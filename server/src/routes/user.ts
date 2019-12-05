import express from 'express';

const router = express.Router();

router.use((_req, _res, next) => {
    console.log('Time:', Date.now());
    next();
})

router.route('/')
    .get((_req, res) => {
        res.send('user');
    })

export { router as userRouter };