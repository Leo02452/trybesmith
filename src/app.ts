import express from 'express';
import productsRouter from './routes/product.router';

const app = express();

app.use(express.json());

app.use(productsRouter);

export default app;
