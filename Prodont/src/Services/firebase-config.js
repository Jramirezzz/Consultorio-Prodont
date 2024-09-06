import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiiwim5gi5WdNvtUX-Px0GIGCHd9Rm_Ec",
  authDomain: "prodont-bd5eb.firebaseapp.com",
  projectId: "prodont-bd5eb",
  storageBucket: "prodont-bd5eb.appspot.com",
  messagingSenderId: "479409623791",
  appId: "1:479409623791:web:8dabdcec0cf264c5b8011a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
