import express from 'express';
import morgan from 'morgan';
import { userRouter } from './routes/user';
import { productRouter } from './routes/product';

const app = express();
const PORT = 3000;

app.set('port', PORT);

app.use(morgan('dev'));
app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (_req,res) => {
    res.send('inicio');
})

app.listen(app.get('port'), () => {
    console.log(`server running in http://localhost:${app.get('port')}`);
});
