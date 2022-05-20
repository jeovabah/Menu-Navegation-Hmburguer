import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCv1BiXY2FLa_jq3ksq8PhxnZvxLvXZYsE",
  authDomain: "crudreactcommerce.firebaseapp.com",
  projectId: "crudreactcommerce",
  storageBucket: "crudreactcommerce.appspot.com",
  messagingSenderId: "969048461680",
  appId: "1:969048461680:web:e1110382e3f47e32133fb5",
  measurementId: "G-8NW32XYT9F"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const itemCollection = collection(db, "itens")
export const storage = getStorage(app)


