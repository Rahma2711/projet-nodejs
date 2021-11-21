const gestion = require("../models/gestion.models");

const getAllgestions = async (req, res) => {
  try {
    const gestions = await gestion.find();
    return res.json(gestions);
  } catch (err) {
    return res.json(err);
  }
};
const getgestionById = async (req, res) => {
  const id = req.params.gestionid;
  try {
    const gestion = await gestion.findById(id);
    return res.json(gestion);
  } catch (err) {
    return res.json(err);
  }
};
const creategestion = async (req, res) => {
  try {
    const newgestion = new gestion({
      title: req.body.title,
      description: req.body.description,
    });

    const savedgestion = await newgestion.save();
    return res.json(savedgestion);
  } catch (err) {
    return res.json(err);
  }
};
const deletegestion = async (req, res) => {
  const id = req.params.gestionid;
  try {
    const deletedgestion = await gestion.findByIdAndDelete(id);
    return res.json(deletedgestion);
  } catch (err) {
    return res.json(err);
  }
};
const updategestion = async (req, res) => {
  const id = req.params.gestionid;
  const data = req.body;
  try {
    const updatedgestion = await gestion.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedgestion);
  } catch (err) {
    return res.json(err);
  }
};
module.exports.getAllgestions = getAllgestions;
module.exports.creategestion = creategestion;
module.exports.deletegestion = deletegestion;
module.exports.getgestionById = getgestionById;
module.exports.updategestion = updategestion;