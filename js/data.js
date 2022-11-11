// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC19LiMr1lFwt-sAMGD_JNcpqf_4IjMYaM",
  authDomain: "yallaparkk-7dc38.firebaseapp.com",
  projectId: "yallaparkk-7dc38",
  storageBucket: "yallaparkk-7dc38.appspot.com",
  messagingSenderId: "774338769348",
  appId: "1:774338769348:web:75168509509ac853d8b491",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
// const database = getDatabase(app);
const auth = getAuth(app);
signUp.addEventListener("click", (e) => {
  const fullName = document.querySelector(".full_name").value;
  const rEmail = document.querySelector(".rEmail").value;
  const phone = document.querySelector(".phone").value;
  const rPassword = document.querySelector(".rPassword").value;
  const conPassword = document.querySelector(".conPassword").value;
  const promoCode = document.querySelector(".promoCode").value;
  createUserWithEmailAndPassword(auth, rEmail, rPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      alert("User Created!");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + "  " + errorMessage);
    });
});
// Login Process
document.getElementById("logIn").addEventListener("click", () => {
  const lEmail = document.querySelector(".lEmail").value;
  const lPassword = document.querySelector(".lPassword").value;
  signInWithEmailAndPassword(auth, lEmail, lPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User Logged in!");
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Email Or Password Or Both are Invalid, Please Enter The Correcr!");
    });
});
