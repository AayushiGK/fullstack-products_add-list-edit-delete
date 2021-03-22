const config = require("./Config/config");
var models = require("./mongodb/schema")().models;
var arrg = {
    models,
    config
}
require('./Controller/controllers')(arrg);