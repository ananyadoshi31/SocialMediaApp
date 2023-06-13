import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React,{useState} from 'react'
import { Divider } from 'react-native-elements'


export const bottomTabIcons=[
    {
        name:"Home",
        active:
        'https://i.pinimg.com/564x/71/89/88/718988215800391b6050182a28ca6810.jpg',
        inactive:'https://i.pinimg.com/564x/71/89/88/718988215800391b6050182a28ca6810.jpg',
    },
    {
        name:"Search",
        active:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrSMICwt4s4wmTqqw-lF_82hI01gf093fYtMxb5EFsN6_8a0NHkmaj7RPPoJ4GMsoJLI&usqp=CAU',
        inactive:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrSMICwt4s4wmTqqw-lF_82hI01gf093fYtMxb5EFsN6_8a0NHkmaj7RPPoJ4GMsoJLI&usqp=CAU'
    },
    {
        name:"Reels",
        active:
        'https://ih1.redbubble.net/image.1566288444.4140/pp,840x830-pad,1000x1000,f8f8f8.jpg',
        inactive:
        'https://ih1.redbubble.net/image.1566288444.4140/pp,840x830-pad,1000x1000,f8f8f8.jpg'
    },
    {
        name:"Shop",
        active:
        'https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-8.jpg',
        inactive:
        'https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-8.jpg'
    },
    {
        name:"Profile",
        active:
        'https://yt3.googleusercontent.com/7eeiv-nSirEYbeBCdApZQq3NV__b4Rj7YexJFiWtb2rAnqsab88nS6NC6vDTxdqIcBZdSIzL=s900-c-k-c0x00ffffff-no-rj',
        inactive:
        'https://yt3.googleusercontent.com/7eeiv-nSirEYbeBCdApZQq3NV__b4Rj7YexJFiWtb2rAnqsab88nS6NC6vDTxdqIcBZdSIzL=s900-c-k-c0x00ffffff-no-rj'
    },
]



const BottomsTab = ( {icons }) => {
    const [ActiveTab, setActiveTab]=useState('Home')

    const Icon=({icon})=>(
        <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
            <Image source ={{uri:ActiveTab===icon.name?icon.active:icon.inactive}} 
            style={[styles.icon,
            icon.name==='Profile'?styles.profilepic() :null,
            ActiveTab==='Profile' && icon.name=== ActiveTab
            ? styles.profilepic(ActiveTab)
            :null,
            ]}/>
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.conatiner}>
        {icons.map((icon,index)=>(
            <Icon key={index} icon={icon}/>
        ))}
        </View>
    </View>

  )
}
const styles=StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:-10,
        zIndex:999,
        backgroundColor:'#000'
    },
    conatiner:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10,
        height:50,
        paddingTop:10
    },
    icon:{
        width:30,
        height:30
    },
    profilepic:(ActiveTab='')=>({
        borderRadius:50,
        borderWidth:ActiveTab==='Profile'?2:0,
        borderColor:'#fff'
    })
})
export default BottomsTab