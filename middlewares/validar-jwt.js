import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = `${process.env.JWT_SECRET_KEY}`; // Esto NO se hace en producción, es para ilustrar
// Datos que necesitamos para jwt.sign():
// 1. Payload (la información del token)
// 2. Secret / Private Key (la clave para firmar)
// 3. Opciones (algoritmo, expiración, etc.)

/* const payload = {
    userId: '123', //id usuario
    username: 'john.doe', //los datos de cliente nombre
    roles: ['admin', 'user']
};
const options = {
    algorithm: 'HS256', // O 'RS256', 'ES256', etc.
    expiresIn: '1h',    // El token expira en 1 hora
    issuer: 'duvan' // Quién emite el token
};
 */
// Dentro de tu ruta /login exitosa:
//const userFromDb = findByCredentials(duvan, 12345); // Lógica para obtener usuario de DB


    const payload = {
        userId: '1',       // Del registro de la base de datos
        username: 'liz', // Del registro de la base de datos
        roles: ['admin', 'user'],     // Del registro de la base de datos (o tabla de roles relacionada)
        iss: 'Duvan y lizbeth',   // De una variable de entorno o una constante
        sub:'01', // Siempre el ID del sujeto
        iat: Math.floor(Date.now() / 1000), // El tiempo actual en segundos
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expira en 1 hora
    };
    const token = jwt.sign(payload, secretKey);
    console.log(token);
    // ... luego se usa este payload en jwt.sign()

    //validar
const validarJWT = async (req, res, next) => {
        const token = req.header("x-token");
        if (!token) {
        return res.status(401).json({
        msg: "No hay token en la peticion"
        })
        }
        try {
        const { uid } = jwt.verify(token, secretKey)
        let usuario = await Holder.findById(uid);
        if (!usuario) {
        return res.status(401).json({
        msg: "Token no válido "//- usuario no existe DB
        })
        }
        if (usuario.estado == 0) {
        return res.status(401).json({
        msg: "Token no válido " //- usuario con estado: false
        })
        }
        next();
        } catch (error) {
        res.status(401).json({
        msg: "Token no valido"
        })
        }
}