import { Router } from 'express'
import { singIn, singUp, logOut } from '../controllers/auth.controllers'

const router = Router()

router.post('/signup', singUp)
router.post('/signin', singIn)
router.post('/logout', logOut)

export default router
