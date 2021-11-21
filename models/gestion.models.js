const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gestionSchema = new Schema({
  title: { type: String },
  marque: { type: String },
  price: { type: Number },
  quantity : { type: Number },
  references : { type: Number }

});

module.exports = mongoose.model("gestion", gestionSchema);