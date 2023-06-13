import { View, Text,SafeAreaView,StyleSheet, ScrollView,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { posts } from '../data/posts'
import BottomsTab from '../components/home/BottomsTab'
import { bottomTabIcons } from '../components/home/BottomsTab';
import {db} from '../firebase'

const HomeScreen = ({navigation}) => {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    db.collectionGroup('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(post =>({id:post.id, ...post.data()})))
    })
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories />
      <ScrollView>
        {posts.map((post,index)=>(
            <Post post={post} key={index}  />
            
        ))}
        <Text></Text>
      </ScrollView>   
      <BottomsTab icons={bottomTabIcons}/>
    </SafeAreaView>

    
  )
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1
  }
})
export default HomeScreen