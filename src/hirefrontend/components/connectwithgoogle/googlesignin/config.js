import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-OzWKlCfuTUmbWzj-NJTlXq-YuLLcd5I",
  authDomain: "temp-992a9.firebaseapp.com",
  projectId: "temp-992a9",
  storageBucket: "temp-992a9.appspot.com",
  messagingSenderId: "990557262435",
  appId: "1:990557262435:web:805457593b5cd1986e9e56",
  measurementId: "G-LCRPVPKE9G"
};
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
