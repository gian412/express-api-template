import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => res.status(200).json({ message: 'Welcome to Express API template' }));

export default indexRouter;
