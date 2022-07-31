import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/product.router';
import usersRouter from './routes/user.router';
import ordersRouter from './routes/order.router';
import errorMiddleware from './middlewares/errors.middleware';
import authRouter from './routes/auth.router';

const app = express();

app.use(express.json());

app.use(authRouter);
app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);

app.use(errorMiddleware);

export default app;
