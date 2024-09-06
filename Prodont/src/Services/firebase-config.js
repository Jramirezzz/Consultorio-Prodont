// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDACd2GKlqDe9s6U5KFhXf5yckJ7zV3P7I",
  authDomain: "prodont-1b89a.firebaseapp.com",
  projectId: "prodont-1b89a",
  storageBucket: "prodont-1b89a.appspot.com",
  messagingSenderId: "528968615485",
  appId: "1:528968615485:web:f705389f4fb802d0434c54"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
