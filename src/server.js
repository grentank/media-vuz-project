import express from 'express';
import config from './config/serverConfig';
import indexRouter from './routes/render/indexRouter';
import showRouter from './routes/render/showRouter';
import adminRouter from './routes/render/adminRouter';
import adminCheck from './middlewares/adminCheck';
import apiPubluc from './routes/api/apiPublic';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();

config(app);

app.use('/', indexRouter);
app.use('/show', showRouter);
app.use('/api/v1', apiPubluc);
app.use(adminCheck);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
