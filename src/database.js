import mongoose from "mongoose";

//Crea la coleccion de la base de dato 127.0.0.1 es lo mismo a localhost
const url = 'mongodb://127.0.0.1:27017/tp1-ej4-react';

mongoose.connect(url);

const connection = mongoose.connection;

//Una vez que ocurrio un evento (Se abra la base de datos) ejecuta la logica siguiente 
connection.once('open', ()=>{
    console.log('BD conectada')
})