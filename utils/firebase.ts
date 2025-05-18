import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDqLEUHMnPN4hlMja-adxWOBpwOVKBando",
  authDomain: "jobfusion-mvp.firebaseapp.com",
  projectId: "jobfusion-mvp",
  storageBucket: "jobfusion-mvp.firebasestorage.app",
  messagingSenderId: "757845119101",
  appId: "1:757845119101:web:b99af10d570e13c0f8e114",
  measurementId: "G-55QGV1LLHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
