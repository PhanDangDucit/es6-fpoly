// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");
// const { getAnalytics } = require("firebase/analytics");
const firebaseConfig = {
    apiKey: "AIzaSyDGLngzemrDbZFReoQMBdRkpcAMGPqclTw",
    authDomain: "test-firebase-44df2.firebaseapp.com",
    projectId: "test-firebase-44df2",
    storageBucket: "test-firebase-44df2.appspot.com",
    messagingSenderId: "6835101693",
    appId: "1:6835101693:web:af78a5933e5058e9148394",
    measurementId: "G-XW0PTB95YB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Import the functions you need from the SDKs you need
// const analytics = getAnalytics(app);

module.exports = {
    db
}