import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiz8CiGpvTEnFiAv_66Bnu0vIeuB8-yb4",
    authDomain: "resume-92bf6.firebaseapp.com",
    projectId: "resume-92bf6",
    storageBucket: "resume-92bf6.appspot.com",
    messagingSenderId: "78725714840",
    appId: "1:78725714840:web:e4261ad21e89fb4a5691ed"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();