import mongoose from "mongoose";
// require('dotenv').config();
/*
import { config } from "dotenv";
config(); 
console.log(process.env.DB_URI); // undefined
*/

mongoose.set('strictQuery', false);

// Variable de entorno de la URI de MongoDB
const db_uri = process.env.DB_URI;

// Conexion a MongoDB con mongoose
(async () => {
    try {
        const db = await mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            });
        console.log('Base de datos conectada en: ', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
