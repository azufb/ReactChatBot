import * as admin from 'firebase-admin';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDyuENyHW5V9r92CQEV_GmZ_SVX1BYD_8k",
    authDomain: "chatbotapp-9ceb1.firebaseapp.com",
    databaseURL: "https://chatbotapp-9ceb1.firebaseio.com",
    projectId: "chatbotapp-9ceb1",
    storageBucket: "chatbotapp-9ceb1.appspot.com",
    messagingSenderId: "736570299373",
    appId: "1:736570299373:web:50c204b8716c95cb5b4de4"
};

firebase.initializeApp(firebaseConfig);
export { firebase };