import { Router } from 'express'
import {
  singIn,
  singUp,
  logOut,
  profile
} from '../controllers/auth.controllers'
import { authRequired } from '../middlewares/validateToken'
import { validateSchema } from '../middlewares/validator.js'
import { registerSchema, signinSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/auth/signup', validateSchema(registerSchema), singUp)
router.post('/auth/signin', validateSchema(signinSchema), singIn)
router.post('/auth/logout', logOut)
router.get('/auth/profile', authRequired, profile)

export default router
