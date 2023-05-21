var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect('mongodb+srv://Xavier07:Xg1105531949@lck.mevmnhk.mongodb.net/?retryWrites=true&w=majority');

var soporteSchema = new Schema({
    cliente: String,
    equipo: String,
    descripcion: String,    
});

var soporte = mongoose.model("soporte", soporteSchema);
module.exports.soporte = soporte;