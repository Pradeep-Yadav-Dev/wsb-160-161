
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIcNi-mZRXA_ezJECfOg_chF7aNne2QNQ",
  authDomain: "wsb-160-161.firebaseapp.com",
  projectId: "wsb-160-161",
  storageBucket: "wsb-160-161.firebasestorage.app",
  messagingSenderId: "307521448830",
  appId: "1:307521448830:web:2d321830d4ef4d1b1f612f",
  measurementId: "G-YPP44PYDCY"
};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);