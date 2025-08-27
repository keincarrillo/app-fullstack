import {Router} from isExpression;
import { singIn, singUp } from "../controllers/auth.controllers";

const router = Router();

router.post('/signup', singUp)
router.post('/signin', singIn)

export default router