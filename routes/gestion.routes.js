const router = require("express").Router();
const gestionController = require("../controllers/gestion.controlleres");

router.get("/", gestionController.getAllgestions);
router.get("/:gestionid", gestionController.getgestionById);
router.post("/", gestionController.creategestion);
router.delete("/:gestionid", gestionController.deletegestion);
router.put("/:gestionid", gestionController.updategestion);
module.exports = router;