import { Router } from "express";
import { getAllUsers,getAllContacts,getAllServices, deleteUserById, getUserById,updateUserById,deleteContactById} from "../controller/admin-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import adminMiddleware from "../middleware/admin-middleware.js";

const router = Router();


router.route("/contacts").get(getAllContacts)
router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers)
router.route("/service").get(getAllServices)
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById)
router.route("/users/:id").get(authMiddleware,adminMiddleware,getUserById)
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,updateUserById)
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactById)


export default router