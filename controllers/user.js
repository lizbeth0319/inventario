import user from "../models/user.js";
import bcryptjs from "bcryptjs";

const htttpuser = {

    crearuserpost: async (req, res) => {
        try {
            const {
                id_empleado,
                nombres,
                apellidos,
                cedula,
                cargo,
                correo_empleado,
                contrasena
            } = req.body; // lo que resive 

            if (!id_empleado || !nombres || !apellidos || !cedula || !cargo || !correo_empleado || !contrasena) {
                return res.status(400).json({
                    success: false,
                    error: 'Todos los campos obligatorios deben ser proporcionados.'
                });
            }
                const salt= await bcryptjs.genSalt(1);
                //user.contrasena = bcryptjs.hashSync(contrasena, salt)
            const newUser = new user({ //aqui lo que voy a guardar
                id_empleado,
                nombres,
                apellidos,
                cedula,
                cargo,
                correo_empleado,
                contrasena_hash: bcryptjs.hashSync(contrasena, salt) // Pasa la contraseña en texto plano 
            });
            //guardar en a base de datos
            const savedUser = await newUser.save();
            console.log(newUser);
            const userResponse = savedUser.toObject(); // Convierte el documento Mongoose a un objeto JS
            delete userResponse.contrasena_hash;
            res.status(200).json({
                success: true,
                message: 'Usuario creado exitosamente.',
                data: userResponse // El usuario recién creado (sin contraseña_hash)
            });
        } catch (error) {
            if (error.code === 11000) { // Código de error de duplicado en MongoDB
                const field = Object.keys(error.keyValue)[0]; // Obtiene el nombre del campo duplicado
                return res.status(400).json({
                    success: false,
                    error: `Ya existe un usuario con este ${field}.`
                });
            }
            if (error.name === 'ValidationError') { // Errores de validación de Mongoose
                const messages = Object.values(error.errors).map(val => val.message);
                return res.status(400).json({
                    success: false,
                    error: messages.join('. ')
                });
            }

            res.status(500).json({
                success: false,
                error: 'Error del servidor al crear el usuario -m.'
            });
        }

    },

    inicioseccion: async (req, res) => {
        const valido = "cosa";
        res.status(200).json({
            message: 'prueba uso exitosamente.' + valido,
        })
    }

}
export default htttpuser;