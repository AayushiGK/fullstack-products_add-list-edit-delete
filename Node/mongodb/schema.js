module.exports = function () {
    var mongoose = require("./connectdb")();
    // const AutoIncrement = require('mongoose-sequence')(mongoose);
    var Schema = mongoose.Schema;

    var CategoriesSchema = Schema({
        Cateory_id: String,
        Cateory_name: String
    });

    var ProductsSchema = Schema({
        p_name: String,
        p_id: Number,
        p_description: String,
        p_meta_data: String,
        p_varients: String,
        p_category: String,
        p_image : String
    });

    var ProductVarientSchema = Schema({
        v_size: String,
        v_color: Number,
        v_storage: String,
        v_battery: String,
        v_price : String,
        
        v_sound_system: String,
        v_sound_effect: String,
        v_quality:String,
        
        v_RAM: String,
        v_os: String,
        v_camera: String,
        v_frameRate:String,
    });

    var Categories = mongoose.model("Categories", CategoriesSchema);
    var Products = mongoose.model("Products", ProductsSchema);
    var Product_Varient = mongoose.model("Product_Varient", ProductVarientSchema);

    return {
        model: {
            Categories,
            Products,
            Product_Varient
        }
    }

}
