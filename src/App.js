import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import ForgotPage from './ForgotPage';
import Profile from './Profile';
import CameraComponent from './CameraComponent';

import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyB05gp9sPrRAS4BJUZR93OGmIA_1yLPKeU",
    authDomain: "cameraapp-ff97b.firebaseapp.com",
    databaseURL: "https://cameraapp-ff97b.firebaseio.com",
    projectId: "cameraapp-ff97b",
    storageBucket: "cameraapp-ff97b.appspot.com",
    messagingSenderId: "248527115196"
});

class App extends Component {
    render () {
        return (

         <Router>
             <Scene key="root">

                 <Scene 
                  key="login"
                  component={LoginPage}
                  initial
                 />

                 <Scene 
                  key="register"
                  component={RegisterPage}
                 />

                   <Scene 
                  key="forgot"
                  component={ForgotPage}
                 />

                  <Scene 
                  key="home"
                  component={HomePage}
                 />
                 
                   <Scene 
                  key="profile"
                  component={Profile}
                 />
                  
                   <Scene 
                  key="camera"
                  component={CameraComponent}
                  title="Camera"
                 />

             </Scene>
         </Router>
        );
    }
};

export default App;