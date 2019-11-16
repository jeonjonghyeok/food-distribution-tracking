import express from "express";
import router from "../router";
import {home,bbq,postSignin,getSignin,getLogin,postLogin,logout} from "../controllers/userController.js";
const globalRouter = express.Router();

globalRouter.get(router.home,home);
globalRouter.get(router.login,getLogin);
globalRouter.get(router.bbq,bbq);
globalRouter.post(router.login,postLogin);
globalRouter.get(router.logout, logout);
globalRouter.get(router.signin, getSignin);
globalRouter.post(router.signin, postSignin);


export default globalRouter;