// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

// export { auth, provider, storage };
// export default db;





import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDDyO5EbdEceBWf4eGIbQZIYNuXDaIvn4M",
  authDomain: "disneyplus-clone-ec440.firebaseapp.com",
  projectId: "disneyplus-clone-ec440",
  storageBucket: "disneyplus-clone-ec440.appspot.com",
  messagingSenderId: "59873900684",
  appId: "1:59873900684:web:d01aebffdb3e7f93eda3a9",
  measurementId: "G-6R0HTRM9FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};

export default db;