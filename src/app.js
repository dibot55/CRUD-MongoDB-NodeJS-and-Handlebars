// ---------------------- Configuracion de Express
import express from "express";
import { create } from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path"; // Para que el __dirname funcione en otras computadoras
import morgan from "morgan";

const app = express();

// Importar las vistas (views)
app.set("views", path.join(__dirname, "views"));

// Eliges que Template Engine usara Express, .hbs es de handlebars
app.engine(
    ".hbs",
    create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaulLayout: "main",
        extname: ".hbs",
        partialsDir: path.join(app.get("views"), "partials") // Definimos la ruta de los partials
    }).engine
);
// Indicamos a Express que use el Motor de plantilla
app.set("view engine", ".hbs");

//--------------------------------Middlewares
// Visualizamos las peticiones entrantes por consola con el middleware morgan
app.use(morgan('dev'));

// Convertimos los datos del formularo a JSON
app.use(express.urlencoded({extended: false}));

// Rutas
app.use(indexRouter);

// Archivos Estaticos (Public)
app.use(express.static(path.join(__dirname, "public")));

export default app;
