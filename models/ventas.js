import mongoose from 'mongoose';

const ventas = new mongoose.Schema({ 
    id_venta:{type: String,unique: true, required: true},
    cliente: {
    type: mongoose.Schema.Types.ObjectId, // Este tipo de dato es crucial para referencias a _id
    ref: 'clientes', // Nombre del modelo al que estás haciendo referencia (debe coincidir con 'Cliente' en tu cliente.js)
    required: true // Una venta debe tener un cliente asociado
  },
  producctos: [ // Esto define un array de objetos
    {
      producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'producctos', // Asume que tu modelo de productos se llama 'Producto'
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      },
      precio_unitario: { // Para registrar el precio al momento de la venta
        type: Number,
        required: true,
        min: 0
      },
      // Puedes añadir más detalles del producto si necesitas una "instantánea" al momento de la venta
      nombre_producto: {
        type: String
      }
    }
  ],
  ultimos_cuatro_digitos_tarjeta: { // Campo para los últimos 4 dígitos
    type: String,
    // No 'required: true' ya que no todas las ventas serán con tarjeta o querrás guardarlo
    match: /^\d{4}$/, // Validación simple para asegurar que sean 4 dígitos numéricos
    trim: true
  },
  precio_total: { // Campo para el precio total de la venta
    type: Number,
    required: true,
    min: 0
  },
  fecha: {
    type: Date,
    default: Date.now // Establece la fecha actual por defecto
  }
}, {
  versionKey: false,
  timestamps: true // Agrega 'createdAt' y 'updatedAt' automáticamente
});
export default mongoose.model('ventas', ventas);