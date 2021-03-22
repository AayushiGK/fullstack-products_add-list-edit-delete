var router = require("express").Router();
path = require("path");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = function (arrg) {
    var { Categories } = arrg.models;

    router.get(arrg.config.apiUrlInitial + "/getCategories", (req, res, next) => {
        Categories.findAll().then(productCategories => {
            return res.send({ msg: productCategories });
        }).catch(err => {
            return res.status(422).send({ header: "Error", content: err.stack });
        });
    });

    return router;
}
