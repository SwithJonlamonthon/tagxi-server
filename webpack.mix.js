// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const mix = require('laravel-mix');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDE2n8PjJTZB1ASSVFbPSmdjyjZybe1K8",
    authDomain: "taxiapp-21306.firebaseapp.com",
    databaseURL: "https://taxiapp-21306-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taxiapp-21306",
    storageBucket: "taxiapp-21306.appspot.com",
    messagingSenderId: "840248590536",
    appId: "1:840248590536:web:be841f1a7a5f1c4fede5fd",
    measurementId: "G-LWZD594C6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
