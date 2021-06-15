import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import firebase from 'firebase/app';

let firebaseConfig = {
  apiKey: "AIzaSyCat-rfjlG7M8hWX1ErJC-Su4YJcE-Vzzc",
  authDomain: "ticket-system-b6ea8.firebaseapp.com",
  projectId: "ticket-system-b6ea8",
  storageBucket: "ticket-system-b6ea8.appspot.com",
  messagingSenderId: "692364682710",
  appId: "1:692364682710:web:bb552c75c4a99af3cd7077",
  measurementId: "G-5VSJDWEK74"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;