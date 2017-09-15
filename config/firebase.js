var admin = require("firebase-admin");
var serviceAccount = require("../beacon-firebase-key.json");

module.exports = function(){
  var firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE
  });

  return firebase;
}
