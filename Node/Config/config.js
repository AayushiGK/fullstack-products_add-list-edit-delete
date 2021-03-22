path = require("path");
module.exports = {
    db: {
        mysql_db: 'hulsung_products',
        mongo_url: "mongodb://localhost:27017/hulsung_products"
    },
    apiUrlInitial: "/",
    server: {
        port: 4000
    },
    path: {
        awards_url: 'http://localhost:4000/OneWurth/public/documents/Users/',
        awards_path: path.join(path.dirname(require.main.filename), "public/documents/Users/"),
    }
}   