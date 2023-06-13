import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {firebase} from '../../firebase'
const handleSignOut=async()=>{
    try{
        await firebase.auth().signOut()
        console.log('Signed out successfuly')
    }catch(error){
        console.log(error)
    }
}
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
        <Image 
            style={styles.logo} 
            source={require('../../assets/ig-logo.png')}
        />
        </TouchableOpacity>
        <View style={styles.iconscontainer}>
            <TouchableOpacity
                onPress={()=>navigation.push('NewPostScreen')}
            >
            <Image 
                style={styles.icon} 
                source={require('../../assets/plus.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                style={styles.icon} 
                source={require('../../assets/like_button.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText} >11</Text>
                </View>
            <Image 
                style={styles.icon} 
                source={require('../../assets/dm-btn.png')}
            />
            </TouchableOpacity>
        

        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:15,
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain'
    },
    iconscontainer:{
        flexDirection:'row'
    },
    logo:{
        width:140,
        height:70,
        resizeMode:'contain'
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600',

    }
})
export default Header