import "./config"; // Variables de entorno
import app from "./app"; // Template Engine Handlebars
import "./database"; // Conexión a MongoDB

// Servidor
const port = 3000;
app.listen(port);
console.log('Servidor corriendo en: ' + port);
