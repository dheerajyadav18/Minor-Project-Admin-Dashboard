import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBInMKrxks90kF75jrf6dM1EgjF5Po8xwQ",
  authDomain: "admin-dashboard-d66ff.firebaseapp.com",
  projectId: "admin-dashboard-d66ff",
  storageBucket: "admin-dashboard-d66ff.appspot.com",
  messagingSenderId: "292319089956",
  appId: "1:292319089956:web:4625395359aba5b327cfb1",
  measurementId: "G-264RTE2XEY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};