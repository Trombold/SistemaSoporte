var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://mongo/SistemaSoporte");
 mongoose.connect('mongodb+srv://Xavier07:Xg1105531949@lck.mevmnhk.mongodb.net/?retryWrites=true&w=majority');


 var cuentaSchema = new Schema({
  id_persona: String,
  usuario: String,
  password: String,
  rol: String,
});

cuentaSchema.virtual("password_confirmation").get(function () {
    return this.p_c;
  }).set(function (password) {
    this.p_c = password;
  });

var cuenta = mongoose.model("cuenta", cuentaSchema);
module.exports.cuenta = cuenta;
