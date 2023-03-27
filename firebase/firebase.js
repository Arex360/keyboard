var admin = require("firebase-admin");
var serviceAccount = require("./service.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://keyboard-game-a499a-default-rtdb.firebaseio.com"
});
let database = admin.database()
let firestore = admin.firestore()
module.exports= {database,firestore}