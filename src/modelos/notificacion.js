var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
mongoose.connect('mongodb+srv://Xavier07:Xg1105531949@lck.mevmnhk.mongodb.net/?retryWrites=true&w=majority');

var notificacionSchema = new Schema({
    idpersona: String,
    iddispositivo: String,
    cuerpo: String,
    fecha: Date,
});

var notificacion = mongoose.model("notificacion", notificacionSchema);
module.exports.notificacion = notificacion;