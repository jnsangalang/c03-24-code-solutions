import express from 'express';
import pg from 'pg';
import { errorMiddleware, ClientError } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "films"
        order by "replacementCost" desc
        limit 2;
      `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    // const { filmId } = req.query;
    const filmId = req.params.filmId;
    if (filmId === undefined) {
      throw new ClientError(400, `filmId is required`);
    }
    const sql = `
      select *
        from "films"
        where "filmId" = $1
      `;
    const param = [filmId];
    const result = await db.query(sql, param);
    const films = result.rows[0];
    if (!films) {
      throw new ClientError(400, `film ${filmId} does not exist`);
    }
    res.json(films);
  } catch (err) {
    next(err);
  }
});
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
