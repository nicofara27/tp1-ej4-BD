import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas, obtenerTarea } from "../controllers/tarea.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post([check("nombreTarea", "La tarea es obligatoria")
  .notEmpty()
],crearTarea);

router.route("/tareas/:id")
.get(obtenerTarea)
.put(editarTarea)
.delete(borrarTarea);

export default router;