import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

export type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product>(sql);
    if (!result) {
      throw new ClientError(400, 'result was invalid');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId)) {
      throw new ClientError(400, `${productId} is not valid`);
    }
    const sql = `
      select *
        from "products"
        where "productId" = $1
    `;
    const result = await db.query<Product>(sql, [productId]);
    if (!result) {
      throw new ClientError(400, 'result was invalid');
    }
    const [item] = result.rows;
    res.json(item);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
