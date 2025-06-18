import Router from "express"
//import httphistorial  from "../controllers/historial.js"

const router = Router()

router.post("/crear_cliente",httpcliente.postcrear_cliente)

router.get("/listar_clientes",httpcliente.getlistar_clientes)

router.get("/obtener_cliente/:id",httpcliente.getobtener_cliente)   //para crear va a ser un post y para modificar un put

router.get("/modificar_cliente",httpcliente.getmodificar_cliente)

router.delete("/eliminar_cliente",httpcliente.deletecliente)

router.delete("/eliminar_cliente/:id",httpcliente.deleteclienteid)

router.get("/recomendacion_producto/:id",httpcliente.getrecomendacion_producto)

export default router