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

class ForgotPage extends Component{
       constructor(props){
          super(props);
          this.state={
             email:'',
       };
  }

  submit() {
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user){
    alert("Check your e-mail!");
    }).catch(function(e){
    alert(e);
  })
  }
    render() {
    return (
        <View style={styles.container}>
            <StatusBar
               backgroundColor="#00bfff"
               barStyle="light-content"/>
            
            <TextInput 
               placeholder="email"
               onChangeText={(email)=> this.setState({email})}
               placeholderTextColor="#008ae6"
               returnKeyType="next"
               style={styles.input}/>

            <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
               onPress={this.submit.bind(this)}>
               Send
             </Text>
            </TouchableOpacity>
        </View>
    );
};
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#00bfff', 
    },

     buttonContainer: {
        backgroundColor:'#008ae6',
        paddingVertical: 15,
        height: 10,
        width: 350,
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
        marginTop:30,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default ForgotPage;