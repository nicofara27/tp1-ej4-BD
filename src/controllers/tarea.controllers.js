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

export const obtenerTarea =  async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id)

    res.status(200).json(tareaBuscada)
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: 'Error al buscar la tarea'
    })
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
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array()
        })
      }

      const tareaNueva = new Tarea(req.body);
      await tareaNueva.save();
      res.status(201).json({
        mensaje: "La tarea se creo correctamente",
      });
  
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al intentar agregar una nueva tarea",
      });
    }
  };

export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'La tarea fue actualizada correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error al intentar editar la tarea'
    })
  }
}