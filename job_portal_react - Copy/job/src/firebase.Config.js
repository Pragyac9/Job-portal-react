// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsGFQRw2BAt-NjhJnrYBPXS1Y_lPSEps",
  authDomain: "online-job-portal-85b84.firebaseapp.com",
  projectId: "online-job-portal-85b84",
  storageBucket: "online-job-portal-85b84.appspot.com",
  messagingSenderId: "806513213933",
  appId: "1:806513213933:web:68203170d8b7abc8c627e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
