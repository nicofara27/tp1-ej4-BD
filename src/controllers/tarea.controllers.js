import { validationResult } from "express-validator";
import Tarea from "../models/Tarea";

export const listarTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();

        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar las tareas'
        });
    }
}

export const borrarTarea = async (req, res)=> {
    try{

        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:'La tarea fue eliminada'
        });
    } catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'Error al intentar borrar la tarea'
        })
    }
}

export const crearTarea = async (req, res) => {
    try {
      //  manejar los errores de las validaciones
      const errors = validationResult(req)
      // errors.isEmpty() devuekve false cuando hay errores
      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array()
        })
      }
  
      console.log(req.body);
      //Validar los adtos del objeto
      const tareaNueva = new Tarea(req.body);
      //Guradar el objeto en la base de datos
      await tareaNueva.save();
      res.status(201).json({
        mensaje: "La tarea se creo correctamente",
      });
  
      // Esta linea es para comprobar al principio que funcione todo bien
      // res.send("desde el backend en la peticion post");
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al intentar agregar un nuevo producto",
      });
    }
  };

