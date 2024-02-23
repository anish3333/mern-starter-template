import { Router } from "express";
import {uploadOnServer} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/register").post(
  uploadOnServer.single("avatar"),
  registerUser
)

router.route("/login").post(loginUser)



//verified routes

router.route("/verify").get(isUseralreadyLogged)


export default router;