import * as React from 'react';
import './config/statusBarConfig';
import Routes from './routes';
import firebase from '@react-native-firebase/app'



const firebaseConfig = {
    apiKey: "AIzaSyArGhm_2oOn5JB527OYM6W_0ckpQnWoU6M",
    authDomain: "liveb-investimentos.firebaseapp.com",
    databaseURL: "https://liveb-investimentos.firebaseio.com",
    projectId: "liveb-investimentos",
    storageBucket: "liveb-investimentos.appspot.com",
    messagingSenderId: "951649084041",
    appId: "1:951649084041:web:760ddf4cd367b80473dc58",
    measurementId: "G-38026TPWQ0"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

const App = () => <Routes />;

export default App;