var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect('mongodb+srv://Xavier07:Xg1105531949@lck.mevmnhk.mongodb.net/?retryWrites=true&w=majority');


var personaSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: String,    
    fecha_nacimiento: Date,
    direccion: String,
    genero: String,
    correo: String,
    celular: String,
    estado: Number,
});

var persona = mongoose.model("persona", personaSchema);
module.exports.persona = persona;
