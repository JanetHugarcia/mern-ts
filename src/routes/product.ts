import express from 'express';

const router = express.Router();

router.route('/')
    .get((_req,res) => {
        res.send('product');
    })

export { router as productRouter };