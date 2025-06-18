import express from "express";
import user from "./routers/user.js";
import cliente from "./routers/clientes.js";
import producto from "./routers/producctos.js";
import venta from "./routers/ventas.js";
import connectDB from "./config/db.js";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.static("public"));


app.use('/user', user);//crear usuario

//---producctos
    app.use('/produccto/crear',producto);//agregar produccto

//---clientes--
app.use("/clientes/crear_cliente", cliente);

//----ventas-
app.use("/ventas/registrar_venta", venta);


 // en comentarios para evitar confuncion al iniciar
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http: ${PORT}`);
    connectDB().then(() => {


    }).catch(error => {
        console.error("Failed to start server due to DB connection error:", error);
    });
});


