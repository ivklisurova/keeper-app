import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBS_t5OwcYlcfVO3f-U7nbj6BTFwsQyIMI",
    authDomain: "keeper-e125a.firebaseapp.com",
    projectId: "keeper-e125a",
    storageBucket: "keeper-e125a.appspot.com",
    messagingSenderId: "679198465253",
    appId: "1:679198465253:web:ff9ed5fa795cc49021c80c",
    measurementId: "G-YH4K5LD6GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


