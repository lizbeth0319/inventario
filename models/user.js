// nombre,apellido,caargo,cedula,id_emppleado,correoempleado,
import mongoose from 'mongoose';

const users = new mongoose.Schema({
    id_empleado:{
    type: String,
    unique: true, 
    required: true,
},
nombres: {type: String,required: true,trim: true},
  apellidos: {type: String,required: true,trim: true},
cedula: {
    type: String,
    required: true,
    unique: true,  
    trim: true
  },
  cargo:{
    type: String,
    required: true
  },
  correo_empleado: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true, 
    trim: true, 
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor, usa un formato de correo válido.']
  },
  contrasena_hash: {
    type: String,required: true // Este campo siempre debe estar presente
  },
});
export default mongoose.model('users', users);