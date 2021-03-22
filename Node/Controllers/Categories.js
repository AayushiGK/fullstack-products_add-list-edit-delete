
var router = require("express").Router();
module.exports = function (arrg) {
    var { } = arrg.models;


    router.post(arrg.config.apiUrlInitial + "/deleteProduct", (req, res, next) => {
        console.log(req.body);
        Products.destroy({ where: { product_id: req.body.id } }).then(() => {
            return res.status(200).send({ header: "Success", content: "Deleted" });
        }).catch(err => {
            return res.status(422).send({ header: "Error", content: "Deletion Failed" });
        });
    });
    return router;
}