import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJx-6QF3WaU1HMuSSBvwaGk7Z3PzTPrLo",
  authDomain: "song-app-dae54.firebaseapp.com",
  databaseURL:
    "https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "song-app-dae54",
  storageBucket: "song-app-dae54.appspot.com",
  messagingSenderId: "688452596811",
  appId: "1:688452596811:web:d48d18515800d70bb609ce",
  measurementId: "G-13XRBW45L1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
