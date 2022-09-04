import express from 'express';
import config from './config/serverConfig';
import indexRouter from './routes/indexRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();

config(app);

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
