import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDGQDd4zru4MuhWMzOT_41ir-jXAe9IQE0",
    authDomain: "nearinitiator.firebaseapp.com",
    projectId: "nearinitiator",
    storageBucket: "nearinitiator.appspot.com",
    messagingSenderId: "895056006126",
    appId: "1:895056006126:web:3c35b4bc77c73cca931cff"
}

function initiateFirestore() {
    const app = initializeApp(firebaseConfig);
    return getFirestore(app);
}

export {initiateFirestore}