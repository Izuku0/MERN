import { Router } from "express";
import { home,register,login, user} from "../controller/auth-controller.js";
import {signupSchema,  loginSchema } from "../validator/auth-validator.js";
import { validate } from "../middleware/validate-middleware.js";
import authMiddleware from "../middleware/auth-middleware.js";




const router = Router();

router.route("/").post(home)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)
router.route("/user").get(authMiddleware,user)

export default router; 