import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp3L7CuBW70lHWtFL6z6mg7gkN3DPg2Bg",
  authDomain: "hackathon-prelast.firebaseapp.com",
  projectId: "hackathon-prelast",
  storageBucket: "hackathon-prelast.appspot.com",
  messagingSenderId: "1056188725939",
  appId: "1:1056188725939:web:675bff528ed5a6b45c8ec6",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
