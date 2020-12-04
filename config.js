import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAKATR0YjKa6U-_efu-7JzQC4BMDPx4WRc",
  authDomain: "museub-a060a.firebaseapp.com",
  databaseURL: "https://museub-a060a.firebaseio.com",
  projectId: "museub-a060a",
  storageBucket: "museub-a060a.appspot.com",
  messagingSenderId: "341773690642",
  appId: "1:341773690642:web:4d5e0cf920604cdf2db5cb"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
