import { Router, Request, Response } from "express";
import { timeController } from "./controller/TimeController";
import { userController } from "./controller/UserContoller";

const router:Router = Router();
// List users
router.get('/list/users',userController.list)
// Save user
router.post('/create/users',userController.save)
// List times
router.get('/list/times',timeController.list)
// Save time
router.post('/create/times',timeController.save)
export { router }