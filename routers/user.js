import Router from "express";
import htttpuser from "../controllers/user.js";

const router = Router();


router.post('/crear', htttpuser.crearuserpost); //creacion del usuario 
router.post("/login", htttpuser.inicioseccion); //devuelve token 

export default router;