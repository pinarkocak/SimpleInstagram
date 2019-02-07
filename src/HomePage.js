import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

class HomePage extends Component{
  constructor(props){
        super(props)
        this.state={
         
        }
    }
 
    openPicker(){
        //Enable Blob and XMLHttpRequest polyfills
        const Blob=RNFetchBlob.polyfill.Blob
        const fs=RNFetchBlob.fs
        window.XMLHttpRequest=RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob=Blob

        //Choose image and Crop it
        ImagePicker.openPicker({
            cropping:true,
            
        })
        .then(image=> {
            const imagePath=image.path
            const imageId = new Date().getTime()  //Image Name
            const imageRef=firebase.storage().ref('images').child(`${imageId}`)
            let imageType='image/jpg'  //Image type

            //Upload Image URLs to database
            const databaseRef=firebase.database().ref('images')
            const imageURL=imageRef.toString()
            const urlRef=databaseRef.push()
            urlRef.set({ imageURL })
            
        fs.readFile(imagePath, 'base64')
        .then((data) => {
            return Blob.build(data, {type: '${imageType};BASE64'})
        })
        //Uploading image to firebase storage
        .then((blob)=>{
            return imageRef.put(blob, {contentType:imageType})
        })
        //Getting image download URL
        .then(()=>{
            return imageRef.getDownloadURL()
        })
        .then((url)=>{
              let obj ={}
              obj["dp"]=url
              this.setState(obj)

        })
            .catch((error)=>{
                console.log(error)
            })
         })
}

  render() {    
    return (
        
      <View style={styles.container}>
        
        <Image 
          style={{width: 80, height: 80, marginBottom:10, marginTop:10}}
          source={{uri: 'https://lh3.googleusercontent.com/q2AkJBLQf7dC9Rb7FkUvTl9Q0z3u1NQgkCJ387Zi0cZYYq6ybaTjgr9Ggt87jYhAXLg=w300'}}
        />
        <TouchableOpacity style={styles.buttonContainer1}>
           <Text
             style={styles.buttonText}
             onPress={ ()=> this.openPicker() }>
             Add Photo
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2}>
           <Text
             style={styles.buttonText}>
             Camera
           </Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={styles.buttonContainer3}>
            <Text
              style={styles.buttonText}
              onPress={()=>Actions.profile()}>
              Profile
            </Text>
        </TouchableOpacity>

    <ScrollView>
        <Image style={{width:350,height:350,margin:5}} source={{uri:this.state.dp}}/>
    </ScrollView>
    
      </View>
    );
};

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },

  buttonContainer1: {
     backgroundColor:'#009933',
     paddingVertical: 15,
     height: 10,
     width: 100,
     marginBottom:10,
     justifyContent: 'center'
  },
  buttonContainer2: {
     backgroundColor:'#FF6600',
     paddingVertical: 15,
     height: 10,
     width: 100,
     marginBottom:10,
     justifyContent: 'center'
  },

  buttonContainer3: {
     backgroundColor:'#FFCC00',
     paddingVertical: 15,
     height: 10,
     width: 100,
     marginBottom:10,
     justifyContent: 'center'
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '800'
  },
});


export default HomePage;