import { Router } from "express";
import { services } from "../controller/service-controller.js";

const router = Router()


router.route("/service").get(services)

export default router