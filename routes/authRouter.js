import express from 'express';
import authControllers from '../controllers/authControllers.js';
import { userSingupSinginSchema, userEmailSchema } from '../schemas/userSchemas.js';
import validateBody from '../helpers/validateBody.js';
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(userSingupSinginSchema), authControllers.singup);

authRouter.get('/verify/:verificationToken', authControllers.verify);

authRouter.post('/verify', validateBody(userEmailSchema), authControllers.resendVerify);

authRouter.post('/login', validateBody(userSingupSinginSchema), authControllers.singin);

authRouter.patch('/avatars', authenticate, upload.single('avatar'), authControllers.updateAvatar);

authRouter.get('/current', authenticate, authControllers.getCurrent);

authRouter.post('/logout', authenticate, authControllers.logout);

export default authRouter;