import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

// Endpoint for testing

app.use(express.json());

app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.query;
    if (firstName === undefined || lastName === undefined) {
      throw new ClientError(400, `please enter valid names`);
    }
    const sql = `
        insert into "actors" ("firstName", "lastName")
        values($1, $2)
        returning *;
        `;
    const result = await db.query(sql, [firstName, lastName]);
    const [addedActor] = result.rows;
    if (!addedActor) {
      throw new ClientError(400, `Invalid name values`);
    }
    res.status(201).json(addedActor);
  } catch (err) {
    next(err);
  }
});
app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.query;
    if (!Number.isInteger(actorId)) {
      throw new ClientError(400, `${actorId} is not valid`);
    }
    if (firstName === undefined || lastName === undefined) {
      throw new ClientError(400, `please enter valid names and actor ID`);
    }
    const sql = `
        update "actors"
        set "firstName" = $1,
             "lastName" = $2
        where "actorId" = $3
        returning *;
        `;

    const result = await db.query(sql, [firstName, lastName, actorId]);
    const [updatedActor] = result.rows;
    if (!updatedActor) {
      throw new ClientError(400, `Invalid name values`);
    }
    res.status(200).json(updatedActor);
  } catch (err) {
    next(err);
  }
});
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `${actorId} is not valid`);
    }
    const sql = `
        delete from "actors"
        where "actorId" = $1
        returning *;
        `;

    const result = await db.query(sql, [actorId]);
    const [deletedActor] = result.rows;
    if (!deletedActor) {
      throw new ClientError(400, `Invalid name values`);
    }
    res.status(204).json(deletedActor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
