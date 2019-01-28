const router = require('express').Router();

router.get("/create", (req, res) => {
    console.log("Create route is working.");
});

module.exports = router;