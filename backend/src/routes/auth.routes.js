import { Router } from 'express'
import {
  singIn,
  singUp,
  logOut,
  profile
} from '../controllers/auth.controllers'
import { authRequired } from '../middlewares/validateToken'

const router = Router()

router.post('/auth/signup', singUp)
router.post('/auth/signin', singIn)
router.post('/auth/logout', logOut)
router.get('/auth/profile', authRequired, profile)

export default router
