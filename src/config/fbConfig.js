import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjheuh11O0InryKfST9Uoaag2n2ZDvuT4",
    authDomain: "dsc-hit-website.firebaseapp.com",
    databaseURL: "https://dsc-hit-website.firebaseio.com",
    projectId: "dsc-hit-website",
    storageBucket: "dsc-hit-website.appspot.com",
    messagingSenderId: "816905332877",
    appId: "1:816905332877:web:d0e62df51e50e565459ac4",
    measurementId: "G-V9HLSD0EHS"
};

firebase.initializeApp(firebaseConfig);

export default firebase