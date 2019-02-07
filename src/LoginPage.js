import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import ForgotPage from './ForgotPage';
import HomePage from './HomePage';

class LoginPage extends Component{
       constructor(props){
           super(props);
           this.state={
             email:'',
             password:''
           };

        Actions.home();
      }
    
  submit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(user){
    Actions.home();
    }).catch(function(e){
    alert(e);
  })
  }

    render () {
    return (
        <View style={styles.container}>

           <View style={styles.logoContainer}>
            <StatusBar
             backgroundColor="#00bfff"
             barStyle="light-content"/>

             <Image 
             style={styles.logo}
             source={{uri: 'https://lh3.googleusercontent.com/q2AkJBLQf7dC9Rb7FkUvTl9Q0z3u1NQgkCJ387Zi0cZYYq6ybaTjgr9Ggt87jYhAXLg=w300'}}/>
            </View>

          <TextInput style={styles.input}
             onChangeText={(email)=> this.setState({email})}
             placeholder="email"
             placeholderTextColor="#008ae6"
             returnKeyType="next"/>

          <TextInput style={styles.input}
             onChangeText={(password)=> this.setState({password})}
             placeholder="password"
             placeholderTextColor="#008ae6"
             returnKeyType="go"
             secureTextEntry={true}/>

          <Text
             style={styles.forgotpassword}
             onPress={()=>Actions.forgot()}>
             forgot password?
          </Text>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={this.submit.bind(this)}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
             <Text
              style={styles.buttonText}
              onPress={()=>Actions.register()}>
              New Here?
            </Text>
          </TouchableOpacity>  

        </View>
    );
};
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfff', 
    },

    logoContainer: {
       alignItems: 'center',
       flexGrow: 1,
       justifyContent: 'center'
    },
    
    logo: {
       width: 200,
       height: 200,
    },

    buttonContainer: {
      backgroundColor:'#008ae6',
      paddingVertical: 15,
      height: 10,
      width: 350,
      marginBottom:10,
      justifyContent: 'center'
  },

    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '800'
  },
  
    forgotpassword: {
      justifyContent: 'center',
      color: '#FFFFFF',
      textDecorationLine:'underline',
      marginLeft:240,
      marginBottom:10,
  },

    input: {
       height: 40,
       width: 350,
       backgroundColor:'#80dfff',
       marginBottom:10,
       color: '#FFFFFF',
       paddingHorizontal: 10,
       textAlign: 'center',
  },

});

export default LoginPage;