import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  putTask
} from '../controllers/tasks.controllers.js'
import { validateSchema } from '../middlewares/validator.js'
import { taskSchema } from '../schemas/tasks.schema.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', [validateSchema(taskSchema), authRequired], createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', [validateSchema(taskSchema), authRequired], putTask)

export default router
