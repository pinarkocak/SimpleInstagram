import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

class RegisterPage extends Component{
   constructor(props){
    super(props);
       this.state={
         email:'',
         password:''
       };
  }

  submit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(user){
    user.sendEmailVerification();
    }).catch(function(e){
    alert(e);
  })
  }

  render() { 
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <StatusBar
                backgroundColor="#00bfff"
                barStyle="light-content"/>
            </View>

             <TextInput 
               placeholder="email"
               onChangeText={(email)=> this.setState({email})}
               placeholderTextColor="#008ae6"
               returnKeyType="next"
               style={styles.input}/>

             <TextInput 
               placeholder="password"
               onChangeText={(password)=> this.setState({password})}
               placeholderTextColor="#008ae6"
               returnKeyType="go"
               secureTextEntry={true}
               style={styles.input}/>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text
               style={styles.buttonText}
               onPress={this.submit.bind(this)}>
               Register
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

     buttonContainer: {
       backgroundColor:'#008ae6',
       paddingVertical: 15,
       height: 10,
       width: 350,
       marginTop:70,
       justifyContent: 'center'
    },

    buttonText: {
       textAlign: 'center',
       color: '#FFFFFF',
       fontWeight: '800'
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

export default RegisterPage;