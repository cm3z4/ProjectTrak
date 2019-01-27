const db = require("../models");

mondule.exports = {
    findAll: function(req, res) {
        db.Project(req.query)
            .find(req.qurey)
            .sort()
            .catch(err => res.status(422).json(err));
    }
}