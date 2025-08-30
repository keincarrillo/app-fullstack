import { Router } from 'express'
import {
  singIn,
  singUp,
  logOut,
  profile
} from '../controllers/auth.controllers'
import { authRequired } from '../middlewares/validateToken'

const router = Router()

router.post('/signup', singUp)
router.post('/signin', singIn)
router.post('/logout', logOut)
router.get('/profile', authRequired, profile)

export default router
