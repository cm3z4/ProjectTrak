// import router and projectsController
const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// route /api/books
router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create);

// route /api/books/:id
router.route("/:id")
    .get(projectsController.findById)
    .put(projectsController.update)
    .delete(projectsController.remove);

module.exports = router;