import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBqoqhy0eUB9r929ELc216RPXJkUTdr9d0",
    authDomain: "curso-react-f2a1e.firebaseapp.com",
    projectId: "curso-react-f2a1e",
    storageBucket: "curso-react-f2a1e.appspot.com",
    messagingSenderId: "397702188913",
    appId: "1:397702188913:web:eeaffb0558b0ba144ef0d0",
    measurementId: "G-3N5NBKSWVS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;