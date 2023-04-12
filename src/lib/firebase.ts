import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn6cRhO68HhAWEDq2LlNrVunvfc3Do_48",
  authDomain: "mvlux-382411.firebaseapp.com",
  projectId: "mvlux-382411",
  storageBucket: "mvlux-382411.appspot.com",
  messagingSenderId: "980430924737",
  appId: "1:980430924737:web:cef1c1aaca927a58705d40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);