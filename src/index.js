import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "firebase";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
var config = {
  apiKey: "AIzaSyDTSQr_xaaZPpMXFH09EfWxylArrs0t_uM",
  authDomain: "pereyra-project.firebaseapp.com",
  databaseURL: "https://pereyra-project.firebaseio.com",
  projectId: "pereyra-project",
  storageBucket: "pereyra-project.appspot.com",
  messagingSenderId: "661533844114",
  appId: "1:661533844114:web:495c40202cb1ba2ba1fc4b",
  measurementId: "G-ZKDX89E4DW",
};
// Initialize Firebase

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
