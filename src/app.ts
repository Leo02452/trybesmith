import express from 'express';
import productsRouter from './routes/product.router';
import usersRouter from './routes/user.router';
import ordersRouter from './routes/order.router';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);

export default app;
