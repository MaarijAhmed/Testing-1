import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDAwI-Tp_5S4IcQziI_Xb8C8CI0WD93gJc",
    authDomain: "jamat-app-4bce2.firebaseapp.com",
    databaseURL: "https://jamat-app-4bce2-default-rtdb.firebaseio.com",
    projectId: "jamat-app-4bce2",
    storageBucket: "jamat-app-4bce2.appspot.com",
    messagingSenderId: "320037334479",
    appId: "1:320037334479:web:aa0bd5f252112be8a036ba",
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
