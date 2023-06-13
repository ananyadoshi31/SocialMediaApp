import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
             <Header navigation={navigation}/>
             <FormikPostUploader navigation={navigation}/>
    </View>
   
  )
}

const Header=({navigation})=>(
    <View style={styles.headerContainer}>
        <TouchableOpacity
            onPress={()=>navigation.goBack()}
        >
            <Image 
                style={{width:30, height:30, marginTop:30}} 
                source={require('../../assets/back.png')}
            />
            
        </TouchableOpacity>
        <Text style={styles.headetText}>NEW POST</Text>
    <Text></Text>
    </View>
)
const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headetText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:25,
        marginTop:25
    }
})
export default AddNewPost