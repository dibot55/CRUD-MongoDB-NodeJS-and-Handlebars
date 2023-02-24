import { Router } from "express";
import {
  addTask,
  deleteTask,
  doneTask,
  editTask,
  renderRaiz,
  updateTask,
} from "../controller/task";

const router = Router();

// --------- Rutas

// Raiz

router.get("/", renderRaiz);

// Agregar Task

router.post("/task/add", addTask);

// Edit
// Definimos con el argumento "/:id" el identificador de cada registro de mongo mostrado en la vista.
router.get("/task/:id/edit", editTask);

// Update

router.post("/task/:id/edit", updateTask);

// Delete

router.get("/task/:id/delete", deleteTask);

// Done

router.get("/task/:id/toggledone", doneTask);

export default router;
