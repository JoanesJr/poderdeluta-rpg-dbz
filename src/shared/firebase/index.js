// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiFNswAsLP9th9bmEFSXno08g1rfh1Dk0",
  authDomain: "rpg-dbz.firebaseapp.com",
  projectId: "rpg-dbz",
  storageBucket: "rpg-dbz.appspot.com",
  messagingSenderId: "865816123973",
  appId: "1:865816123973:web:3a16e695be26f27c75a12c",
  measurementId: "G-YHDXJZTCRG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);