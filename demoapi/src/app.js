import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongooseConnect from './server'
import indexRouter from './routes/index.routes';
import config from './config';

//app config
const app = express();
const PORT = config.PORT || 4000;

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//api routes
app.use('/', indexRouter);

const startApp = () => {
    mongooseConnect();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}

startApp();
