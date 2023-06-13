import { View, Text,TextInput,Alert, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import {firebase, db } from '../../firebase'


const SignupForm = ({navigation}) => {

    const SignupFormSchema=Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(2,'A username is required'),
        password:Yup.string()
        .required()
        .min(6,'Your password has to be atleast 8 characters')
    })

const getRandomProfilePicture=async()=>{
    // const response = await fetch('https://randomuser.me/api');
    // const data = await response.json()
    // return data.results[0].picture.large
    const response='https://feeds.abplive.com/onecms/images/uploaded-images/2023/06/01/df1b8fbf774c05d138c8ce2a838395821685604355774721_original.jpg'
    return response
}

const onSignup=async(email,password,username)=>{
    try{
        const authUser=await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log('Firebase user created successfuly',email,password)

        db.collection('users').doc(authUser.user.email).set({
            owner_uid:authUser.user.uid,
            username:username,
            email:authUser.user.email,
            profile_picture: await getRandomProfilePicture(),
        })
    }catch(error){
        Alert.alert('My lord...',error.message)
        console.log(error.message)
    }
}
  return (
    <View style={styles.wrapper}>
        <Formik 
            initialValues={{email:'',username:'',password:''}}
            onSubmit={values=>{
                onSignup(values.email,values.password,values.username)
            }}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
                                <>
                        <View style={[styles.inputField,
                        {
                            borderColor:
                            values.email.length<1 || Validator.validate(values.email)
                            ? '#ccc'
                            :'red'
                        }]}>
                            <TextInput
                                    placeholderTextColor='#444'
                                    placeholder='Email'
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                    textContentType='emailAddress'
                                    autoFocus={true}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                            />
            
                        </View>

                        <View style={[styles.inputField,
                        {
                            borderColor:
                            1>values.username.length || values.username.length>=6
                            ? '#ccc'
                            :'red'
                        }]}>
                            <TextInput
                                    placeholderTextColor='#444'
                                    placeholder='Username'
                                    autoCapitalize='none'
                                    textContentType='username'
                                    autoFocus={true}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                            />
            
                        </View>
            
                        <View style={[styles.inputField,
                        {
                            borderColor:
                            1>values.password.length || values.password.length>=6
                            ? '#ccc'
                            : 'red'
                        }]}>
                            <TextInput
                                    placeholderTextColor='#444'
                                    placeholder='Password'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    textContentType='password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                            />
            
                        </View>
                        <View  style={{alignItems:'flex-end', marginBottom:30}}>
                            <Text style={{color:'#6BB0F5'}}>Forgot Password?</Text>
                        </View>
                        
                        <TouchableOpacity  
                        style={styles.button(isValid)}
                        onPress={handleSubmit}
                        
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
            
                        <View style={styles.signupContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <Text style={{color:'#6BB0F5'}}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        </>
            )}

        </Formik>
        
    </View>
  )
}

const styles=StyleSheet.create({
    inputField:{
        borderRadius:4,
        padding:10,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    wrapper:{
        marginTop:80
    },
    button: isValid=>({
        backgroundColor: isValid?'#0096F6':'#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    }
})
export default SignupForm