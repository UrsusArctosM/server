import express from 'express'
import { categoryController } from '../controllers/categoryController.js'
const categoryRouter = express();

categoryRouter.get('/', categoryController.getAll)
categoryRouter.post('/', categoryController.create)
categoryRouter.get('/:id', categoryController.getOne)
export {categoryRouter}