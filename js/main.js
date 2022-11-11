// Google map

let map;
let palmJumeirahLatLng = { lat: 25.112432, lng: 55.138977 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: palmJumeirahLatLng,
    zoom: 12,
  });
}

window.initMap = initMap;

// ////////////////////
// Partners Logo Slider

$(".partners-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  centerPadding: "600px",

  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

// Hot Parking Spots Slider
$(".spot-slider").slick({
  infinite: true,
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: "250px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// ///////////////////////
// Testimonials slider

$(".testimonials-slider").slick({
  infinite: true,
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: "450px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import {
//   getDatabase,
//   set,
//   ref,
// } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD7QCLFI5LEBRiv0TYcDxNV6HflBQmRYOM",
//   authDomain: "yallaparkk.firebaseapp.com",
//   databaseURL: "https://yallaparkk-default-rtdb.firebaseio.com",
//   projectId: "yallaparkk",
//   storageBucket: "yallaparkk.appspot.com",
//   messagingSenderId: "385774415597",
//   appId: "1:385774415597:web:0da749b98016e47f3da6e4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const database = getDatabase(app);
// const auth = getAuth();
// signUp.addEventListener("click", (e) => {
//   const fullName = document.querySelector(".full_name").value;
//   const email = document.querySelector(".email").value;
//   const phone = document.querySelector(".phone").value;
//   const password = document.querySelector(".password").value;
//   const conPassword = document.querySelector(".conPassword").value;
//   const promoCode = document.querySelector(".promoCode").value;
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // set(ref(database, "users/" + user.uid), {
//       //   fullName: fullName,
//       //   email: email,
//       //   phone: phone,
//       //   password: password,
//       //   conPassword: conPassword,
//       //   promoCode: promoCode,
//       // });
//       alert("User Created!");
//       console.log("User Created!");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// });
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import {
//   getDatabase,
//   set,
//   ref,
// } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBq7ONPWhM2Kr5ZPixLJeZGYZ2kZgosV4A",
//   authDomain: "yallapark.firebaseapp.com",
//   databaseURL: "https://yallapark-default-rtdb.firebaseio.com",
//   projectId: "yallapark",
//   storageBucket: "yallapark.appspot.com",
//   messagingSenderId: "436833476122",
//   appId: "1:436833476122:web:9087ac919dd9e6ed14bba3",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // console.log(app)
// // Initialize variables
// const auth = firebase.auth();
// const database = firebase.database();

// // Set up our register function
// function register() {
//   // Get all our input fields
//   email = document.getElementById("email").value;
//   full_name = document.getElementById("full_name").value;
//   password = document.getElementById("password").value;
//   conPassword = document.getElementById(".conPassword").value;
//   phone = document.getElementById("phone").value;
//   promo = document.getElementById("promo").value;

// Validate input fields
// if (validate_email(email) == false || validate_password(password) == false) {
//   alert("Follow The Instructions");
//   return;
//   // Don't continue running the code
// }
// if (
//   validate_field(full_name) == false ||
//   validate_field(phone) == false ||
//   validate_field(promo) == false
// ) {
//   alert("Follow The Instructions");
//   return;
// }

// Move on with Auth
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(function () {
//       // Declare user variable
//       var user = auth.currentUser;

//       // Add this user to Firebase Database
//       var database_ref = database.ref();

//       // Create User data
//       var user_data = {
//         email: email,
//         full_name: full_name,
//         password: password,
//         conPassword: conPassword,
//         phone: phone,
//         promo: promo,
//         last_login: Date.now(),
//       };

//       // Push to Firebase Database
//       database_ref.child("users/" + user.uid).set(user_data);

//       // DOne
//       alert("User Created!!");
//     })
//     .catch(function (error) {
//       // Firebase will use this to alert of its errors
//       var error_code = error.code;
//       var error_message = error.message;

//       alert(error_message);
//     });
// // }

// Responsive nav Bar
// Getting the menu icon
const bar = document.querySelector(".menu");
const body = document.querySelector("body");
const links = document.querySelector(".left-links");
const rightLinks = document.querySelector(".right-nav");
bar.addEventListener("click", () => {
  body.classList.toggle("active");
  links.classList.toggle("active");
  rightLinks.classList.toggle("active");
});
// For the Modal
// Getting Login button
const login = document.querySelector(".login");
// Getting The Modal
const modal1 = document.querySelector(".modal1");
// onClicking on the Login button the Modal will appear
login.addEventListener("click", () => {
  modal1.classList.add("active");
});
// For Closing the Modal
// Getting the close2 button
const close = document.querySelector(".close");
// onClicking on the close button the Modal will disappear
close.addEventListener("click", () => {
  modal1.classList.remove("active");
});
//  For the second Modal
// Getting Register button
const registered = document.querySelector(".register");
// Getting The Modal
const modal2 = document.querySelector(".modal2");
// onClicking on the Login button the Modal will appear
registered.addEventListener("click", () => {
  modal2.classList.add("active");
});
// For Closing the Modal
// Getting the close button
const close2 = document.querySelector(".close2");
// onClicking on the close button the Modal will disappear
close2.addEventListener("click", () => {
  modal2.classList.remove("active");
});

const containers = [...document.querySelectorAll(".container")];
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

containers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  next.addEventListener("click", () => {
    item.scrollLeft += containerWidth;
    next.classList.add("active");
    prev.classList.remove("active");
  });
  prev.addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
    prev.classList.add("active");
    next.classList.remove("active");
  });
});

$(".slideShow").slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
// Swipper Slider
var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});