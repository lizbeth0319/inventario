import Router from "express"
//import httphistorial  from "../controllers/historial.js"

const router = Router()
router.post('/crear',httpproduccto.postcrear);//agregar produccto

router.get('/listar',httpproduccto.getlistar);

router.get('/obtener/:name',httpproduccto.getobtenername);

router.put ('/modificar',httpproduccto.getmodificar);

router.delete('/eliminar',httpproduccto.deleteeliminar);

router.delete('/eliminar/:id',httpproduccto.deleteeliminarid);

router.get('/descripcion/:id',httpproduccto.getdescripcionid);

router.get('/sugerencia/:id',httpproduccto.getsugerenciaid);

export default router