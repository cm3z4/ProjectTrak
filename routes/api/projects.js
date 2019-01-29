// import router and projectsController
const router = require("express").Router();
const projectsController = require("../../controllers/projectController");

// route /api/projects
router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create);

// route /api/projects/:id
router.route("/:id")
    .get(projectsController.findById)
    .put(projectsController.update)
    .delete(projectsController.remove);

module.exports = router;