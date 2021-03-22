
module.exports = function () {
  const { db } = require( '../Config/config' );
  var mongoose = require( "mongoose" );
  mongoose.connect( db.mongo_url, {
    "auth": { "authSource": "admin" },
    "user": "admin",
    "pass": "admin123",
    useNewUrlParser: true
  } );
  var dbconnection = mongoose.connection;
  dbconnection.once( "open", () => {
  } );
  dbconnection.on( "error", console.error.bind( console, 'db connection error:' ) );
  mongoose.set( 'useFindAndModify', false );
  return mongoose;
}

