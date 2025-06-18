import Router from "express"
//import httphistorial  from "../controllers/historial.js"

const router = Router();

router.post("/registrar_venta",httpventas.postregistrar_venta)

router.get("/listar_venta",httpventas.getlistar_venta)

router.get("/obtener_venta/:id",httpventas.getobtener_ventaid)

router.get("/obtenar_venta_cliente/:id",httpventas.getobtenar_venta_cliente)

router.get("/obtener_venta_producto/:id",httpventas.getobtener_venta_productoid)

router.delete("/eliminar_venta",httpventas.deleteeliminar_venta)

router.delete("/eliminar_venta/:id",httpventas.deleteeliminar_ventaid)

export default router