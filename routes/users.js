var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const findDocuments = function(db, callback) {
  // Get the documents collection //nombre_de_la_tabla
  const collection = db.collection('parcial1');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found docs, count: ", docs.length);
    console.log(docs);
    callback(docs);
  });
}

function createUser(callback){
  // Connection URL
  const url = 'mongodb://parcial1:parcial1@ds237922.mlab.com:37922/heroku_4zkldxjp';

  // Database Name // este se debe cambiar por el nombre que yo cree para la base de datos
  const dbName = 'heroku_4zkldxjp';

  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    // Insert a single document
    db.collection('inserts').insertOne({a:1}, function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);

        db.close();
      });
    });
}

//middleweare for ajax get control allow origin
 router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
  res.header('Allow', 'GET, POST, OPTIONS, DELETE, PUT');
  next();
});

/* GET home page. */
router.post('/createUser', function(req, res) {
  createUser(data=>
    res.send(data)
  );
});

module.exports = router;
