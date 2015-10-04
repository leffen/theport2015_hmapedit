var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');


module.exports = (function () {

  var factory = {};

  factory.createDatabase = function(strDatabaseName, fnCallback){
      var file 	= strDatabaseName+'.sqlite3';
      var exists 	= fs.existsSync(file);

      console.log(">> createDb "+strDatabaseName);
      db = new sqlite3.Database(strDatabaseName+'.sqlite3', fnCallback);
    }


    db = new sqlite3.Database(':memory:');

  // function privatefunc () {};

  shared.updateDataset = function(name,data) {
    db.serialize(function() {
      db.run("CREATE TABLE test (test TEXT)");

      var stmt = db.prepare("INSERT INTO test VALUES (?)");
      for (var i = 0; i < 10; i++) {
        stmt.run("test " + i);
      }

      stmt.finalize();
    });
  };

  shared.query = function(query,callback) {
    db.all(query, callback);
  };

  shared.cleanUp = function() {
    this.db.close();
  };

  return shared;

})();


