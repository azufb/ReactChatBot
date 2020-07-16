import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
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

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
export { firebase };

const initial = {
    login : false,
    username: '(click here!)',
    email: '',
    data: [],
    items: []
}

// レデューサー
function fireReducer(state = initial, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.value;
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state,
        applyMiddleware(thunkMiddleware))
}