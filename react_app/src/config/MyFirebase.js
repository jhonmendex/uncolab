import firebase from "firebase";
import "firebase/firestore";
import "firebase/app";
const config = {
  apiKey: "AIzaSyCu_pSSdJ2RTtqQLGFbL3H5YMejgXHboyI",
  authDomain: "un-colab-chat.firebaseapp.com",
  databaseURL: "https://un-colab-chat.firebaseio.com",
  projectId: "un-colab-chat",
  storageBucket: "un-colab-chat.appspot.com",
  messagingSenderId: "114115830079",
  appId: "1:114115830079:web:7e051e516b462f84b8b38a",
  measurementId: "G-HCXH7TFVG3",
};

firebase.initializeApp(config);

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
