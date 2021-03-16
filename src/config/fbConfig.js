import * as firebase from "firebase";
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "YourAPIKey",
    authDomain: "DOMAINNAME",
    databaseURL: "https://syed-hammad-marioplan.firebaseio.com",
    projectId: "syed-hammad-marioplan",
    storageBucket: "syed-hammad-marioplan.appspot.com",
    messagingSenderId: "21244774199",
    appId: "YOURAPPID",
    measurementId: "MESUREMENT ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase