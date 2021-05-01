import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyCqWauHEdRm6DzFQVbeQgp4bDV-9TWXQ6I",
  authDomain: "evernote-4e902.firebaseapp.com",
  projectId: "evernote-4e902",
  storageBucket: "evernote-4e902.appspot.com",
  messagingSenderId: "1021505010376",
  appId: "1:1021505010376:web:bacff594156fe71493c3fd"
});

ReactDOM.render(<App />, document.getElementById('root'));


