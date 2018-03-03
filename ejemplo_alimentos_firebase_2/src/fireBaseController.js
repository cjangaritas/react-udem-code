import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCSKZvK6SnfJq3xbWcJjIoQXiXYkWnLfa0",
    authDomain: "administracion-172f0.firebaseapp.com",
    databaseURL: "https://administracion-172f0.firebaseio.com",
    projectId: "administracion-172f0",
    storageBucket: "administracion-172f0.appspot.com",
    messagingSenderId: "400916712833"
  };
  firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {platillos, bebidas};


export default datos;




