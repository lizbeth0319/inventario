import mongoose from 'mongoose';

const producctos = new mongoose.Schema({ 
    id_produccto:{type: String,unique: true, required: true} ,//tipo string,unico y si crea automatico
    // Si necesitas que se cree automáticamente, puedes usar:
    // default: () => new mongoose.Types.ObjectId().toString()
    // O si es un ID externo, lo generas antes de guardar el documento. 
    nombre_prod:{ 
        type:String,unique:true,trim: true,
    },
    descripcion:{
        type:String,unique:true
    },
    precio:{
        type:Number,min: 0,required: true
    },
    Imagen: { 
    type: String, // Aquí es donde guardas el URL de la imagen
    required: false, // La imagen puede ser opcional al inicio
    trim: true,
    // Puedes añadir una validación para formato de URL si lo deseas, por ejemplo:
    // match: [/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/i, 'Por favor, usa un formato de URL de imagen válido.']
  },
  categoria:{
    type: String,
    required: true,
  }
});
export default mongoose.model('producctos', producctos);