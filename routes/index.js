// import packages and routes
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routes
router.use("/api", apiRoutes);

// if no routes are hit send the react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;