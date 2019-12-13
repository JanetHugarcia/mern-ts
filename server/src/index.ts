import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { userRouter } from './routes/user';
import { productRouter } from './routes/product';
import { db } from './data';

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, '/public');

app.set('port', PORT);

app.use(morgan('dev'));
app.use(express.static(publicPath));

app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (_req,res) => {
    res.sendFile('index.html');
})

app.listen(app.get('port'), () => {
    console.log(`server running in http://localhost:${app.get('port')}`);
    db();
});
