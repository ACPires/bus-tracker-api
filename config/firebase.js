var admin = require("firebase-admin");
var serviceAccount = require("../beacon-firebase-key.json");

module.exports = function(){
  var firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
  });

  return firebase;
}
