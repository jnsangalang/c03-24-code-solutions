import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    //  Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades";
      `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `need valid gradeId`);
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1;
      `;
    const result = await db.query(sql, [gradeId]);
    const [grades] = result.rows;
    if (!grades) {
      throw new ClientError(404, `${gradeId} not found`);
    }
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!Number.isInteger(score)) {
      throw new ClientError(400, `need valid score`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score must be between 0-100`);
    }
    if (!name || !course) {
      throw new ClientError(400, `name and course is needed`);
    }
    const sql = `
      insert into "grades" ("name","course","score")
      values($1,$2,$3)
        returning *;
      `;
    const result = await db.query(sql, [name, course, score]);
    const [addedResult] = result.rows;
    res.status(201).json(addedResult);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `${gradeId} grade ID is invalid`);
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `need valid score`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score must be between 0-100`);
    }
    if (!name || !course) {
      throw new ClientError(400, `name and course is needed`);
    }
    const sql = `
      update "grades"
      set "name"=$1,
          "course"=$2,
          "score"=$3
      where "gradeId"=$4
        returning *;
      `;
    const result = await db.query(sql, [name, course, score, gradeId]);
    const [updatedResult] = result.rows;
    if (!updatedResult) {
      throw new ClientError(404, `${gradeId} grade ID not found`);
    }
    res.status(200).json(updatedResult);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `${gradeId} grade ID is invalid`);
    }
    const sql = `
      delete from "grades"
      where "gradeId" = $1
        returning *;
      `;
    const result = await db.query(sql, [gradeId]);
    const [deletedResult] = result.rows;
    if (!deletedResult) {
      throw new ClientError(404, `${gradeId} grade ID not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);
app.listen(8080, () => {
  console.log('listening on port 8080');
});
