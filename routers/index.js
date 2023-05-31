import express from 'express'
import { categoryRouter } from './categoryRoutes.js'
import { userRouter } from './userRoutes.js'

const rootRouter = express();


rootRouter.use('/category', categoryRouter)
rootRouter.use('/user', userRouter )


export { rootRouter };