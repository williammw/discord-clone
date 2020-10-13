import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCYZRuOxwhmiEKSdHfxMsUWL-4TDgrzZr4",
  authDomain: "dicsord-clone.firebaseapp.com",
  databaseURL: "https://dicsord-clone.firebaseio.com",
  projectId: "dicsord-clone",
  storageBucket: "dicsord-clone.appspot.com",
  messagingSenderId: "907415497435",
  appId: "1:907415497435:web:5ebf85361b136fc59d3afe",
  measurementId: "G-M1P28FTZXM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider };
export default db;