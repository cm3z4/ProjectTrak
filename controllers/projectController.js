const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Project(req.query)
            .find(req.qurey)
            .sort()
            .catch(err => res.status(422).json(err));
    }
}