const router = require("express").Router();
const projectController  = require("../../controllers");

router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

module.exports = router;