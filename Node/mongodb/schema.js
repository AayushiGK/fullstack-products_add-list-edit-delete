module.exports = function () {
    var mongoose = require("./connectdb")();
    // const AutoIncrement = require('mongoose-sequence')(mongoose);
    var ProductsSchema = new mongoose.Schema({
        p_name: String,
        p_description: String,
        p_metaInfo: String,
        p_Varient: Array,
        p_category: String,
        p_image : String
    });
    var Products = mongoose.model("Products", ProductsSchema);
    return { model: { Products } }
}
