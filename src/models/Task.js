// Aqui se modelan los datos para la BD con mongoose.
import { Schema, model } from "mongoose";

// Schema campos a guardar
// model son las tablas a guardar

const taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true, // este es el createdAt y updatedAt de mongoose
    versionKey: false // para que no ponga el __v: 0
});

// Este seria el "query" de MongoDB 
export default model('Task', taskSchema); 
// 'Task' sera el nombre de la coleccion (tabla) en mongoDB en plural