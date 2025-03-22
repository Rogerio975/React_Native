import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgWl4DBn2qFFXPAep-p2i9CgXEVorL8TQ",
  authDomain: "BANCOSDEDADOSFIREBASE.firebaseapp.com",
  projectId: "bancodedados-e9039",
  storageBucket: "BANCOSDEDADOSFIREBASE.appspot.com",
  messagingSenderId: "601759485131",
  appId: "1:601759485131:android:f49d3082ced77b1d441f4e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
