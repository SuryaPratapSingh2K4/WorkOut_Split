import express from 'express'
import { getLogin, getSignUp } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login',getLogin)

userRouter.post('/signup',getSignUp)

export default userRouter;