import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


class Profile extends Component {
    render() {
        return (
            <Image style={styles.headerBackgroud}  source={{uri: 'http://cdn.pcwallart.com/images/camera-wallpaper-1.jpg'}}  
       >
       <View style={styles.header}>
           <View style={styles.profilepicWrap}>
                 <Image style={styles.headerBackgroud}  source={{uri: 'http://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png'}}  
       />
       </View>
       <Text style={styles.name}> PINAR </Text>
       </View>
       </Image>
        );
    }
}

const styles=StyleSheet.create({
    headerBackgroud: {
        flex:1,
        width:null,
        alignSelf: 'stretch'
    },
    header:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        
    },
    profilepicWrap: {
        width:100,
        height:100,
        borderRadius: 10,
        borderColor: "#00bfff",
        borderWidth:16,

    },
    profilepic: {
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:100,
        borderWidth:4
    },
    name: {
        marginTop:20,
        fontSize:16,
        color: '#fff'
        }
});
 
export default Profile;