import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import rootRouter from './routes';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({ origin: ['http://localhost:5173', 'https://sreemadhurafoams-git-main-abdur-rahmans-projects-2d1612ea.vercel.app','https://sreemadhurafoams.vercel.app'] }));

// application routes
app.use('/api/v1', rootRouter);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
