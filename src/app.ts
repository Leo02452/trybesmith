import express from 'express';
import productsRouter from './routes/product.router';
import usersRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(usersRouter);

export default app;
