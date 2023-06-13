
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAugrS5GhaSmyKimtZ6s0bSaM54FJcshE",
  authDomain: "rn-instagram-clone-d0f47.firebaseapp.com",
  projectId: "rn-instagram-clone-d0f47",
  storageBucket: "rn-instagram-clone-d0f47.appspot.com",
  messagingSenderId: "916936588494",
  appId: "1:916936588494:web:0bd84948994c3a616f649f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
const db=firebase.firestore()
export { firebase, db };