import express from 'express';
import { UserModel } from '../data';

const router = express.Router();

router.use((_req, _res, next) => {
    console.log('Time:', Date.now());
    next();
})

router.route('/')
    .get((_req, res) => {
        res.send('user');
    })
    .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const name = req.body['name'];
        const user = new UserModel({name});
        await user.save();
        res.end();
    })

export { router as userRouter };