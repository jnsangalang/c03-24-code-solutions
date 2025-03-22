import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/actors', async (req, res, next) => {
  try {
    const sql = `
      select *
        "actorId",
        "firstName",
        "lastName"
      from "actors";
      `;
    const result = await db.query(sql);
    const actors = result.rows;
    res.send(actors);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      order by "replacementCost" desc;
      `;
    const result = await db.query(sql);
    const filmsHighToLow = result.rows;
    res.send(filmsHighToLow);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
     select *
     from "films"
     where "filmId" =$1;
     `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});
app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (!filmId || !title) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
     select "filmId"
     from "films"
     where "filmId" =$1;
     `;
    const checkParams = [filmId];
    const result = await db.query(sql, checkParams);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }

    const updateSql = `
      update
        "films"
      set
        "title" = $1
      where "filmId" = $2;
      `;
    const updateParam = [title, filmId];
    const updatedResult = await db.query(updateSql, updateParam);
    const update = updatedResult.rows[0];
    res.send(update);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
