import mongoose from 'mongoose';

const cliente = new mongoose.Schema({
    id_cliente: {
    type: String,
    unique: true, // Asegura que cada id_cliente sea único
    required: true,// Puedes añadir 'required: true' si este ID es obligatorio y generado por tu app
    // Ejemplo de cómo generarlo antes de guardar si lo requieres:
    // default: () => new mongoose.Types.ObjectId().toString() // Genera un ID similar a ObjectId pero como string
  }, //identificador para mongo
    correo: {
    type: String,
    required: true,
    unique: true, // Asegura que cada correo sea único
    lowercase: true, // Guarda el correo en minúsculas para consistencia
    trim: true, // Elimina espacios en blanco al inicio y final
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor, usa un formato de correo válido.']
  },
  username: {type: String,unique: true, sparse: true,trim: true},
  nombres: {type: String,required: true,trim: true},
  apellidos: {type: String,required: true,trim: true},
cedula: {
    type: String,
    required: true,
    unique: true, // Asegura que cada cédula sea única
    trim: true
  },
  tarjeta_credito: {
    ultimos_cuatro_digitos: {type: String,// No required: true, ya que la info de tarjeta no siempre estará presente
    },
    fecha_expiracion: {type: String,// Validación simple de formato MM/AA
    match: [/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato de fecha de expiración debe ser MM/AA']
    },
    tipo: {type: String}},

  contrasena_hash: {type: String,required: true // Este campo siempre debe estar presente
  },
  fecha_registro: {
    type: Date,
    default: Date.now // Establece la fecha actual por defecto al crear el documento
  },
  activo: {
    type: Boolean,
    default: true // Por defecto, la cuenta está activa
  }
}, {
  versionKey: false, // Evita que Mongoose agregue el campo '__v' para control de versiones
  timestamps: true // Agrega 'createdAt' y 'updatedAt' automáticamente
});
export default mongoose.model('clientes', cliente);