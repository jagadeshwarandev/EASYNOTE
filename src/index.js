import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
  //api key comes here ;
});

ReactDOM.render(<App />, document.getElementById('root'));


