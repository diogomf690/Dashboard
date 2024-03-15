  // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//const { initializeApp } = require('firebase-admin/app');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYQrSgxmC2YPVkHVl7vKF96brYwJKj9Q",
  authDomain: "pap-12-de1b2.firebaseapp.com",
  databaseURL: "https://pap-12-de1b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pap-12-de1b2",
  storageBucket: "pap-12-de1b2.appspot.com",
  messagingSenderId: "574301025540",
  appId: "1:574301025540:web:3a2fb4b9fe1d78fde48c51"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

  let sideBar = document.querySelector('.side-bar');
    let arrowCollapse = document.querySelector('#logo-name__icon');
    sideBar.onclick = () => {
      sideBar.classList.toggle('collapse');
      arrowCollapse.classList.toggle('collapse');
      if (arrowCollapse.classList.contains('collapse')) {
        arrowCollapse.classList =
          'bx bx-arrow-from-left logo-name__icon collapse';
      } else {
        arrowCollapse.classList = 'bx bx-arrow-from-right logo-name__icon';
      }
    };
  