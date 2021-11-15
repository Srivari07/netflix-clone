import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUPYfUg2BONXW_uW3WaufXxNGQ4LVrZow",
  authDomain: "netflix-clone-app-5cb4b.firebaseapp.com",
  projectId: "netflix-clone-app-5cb4b",
  storageBucket: "netflix-clone-app-5cb4b.appspot.com",
  messagingSenderId: "300116084928",
  appId: "1:300116084928:web:414cbc9a1dad8c1ec98525",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();

export { auth };
export default db;
