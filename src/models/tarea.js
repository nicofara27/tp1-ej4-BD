import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 150
    }
})

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;