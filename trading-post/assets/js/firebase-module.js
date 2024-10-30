// js/firebase.js

// Import Firebase SDKs (required if you're using module syntax)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { getFirestore, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzMzYnXZ4GSjdC_l7tF9ww3FmuLhK2ur4",
    authDomain: "campus-trading-post-mis.firebaseapp.com",
    projectId: "campus-trading-post-mis",
    storageBucket: "campus-trading-post-mis.appspot.com",
    messagingSenderId: "682238331805",
    appId: "1:682238331805:web:c7bcfd26037c8193de3d74"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Authentication Functions
async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User registered:", user);
    } catch (error) {
        console.error("Error signing up:", error);
    }
}

async function logIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

async function logOut() {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Error logging out:", error);
    }
}

async function updateUserProfile(userId, newInfo) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, newInfo);
        console.log("User profile updated");
    } catch (error) {
        console.error("Error updating profile:", error);
    }
}

// Export functions to be accessible in other scripts
export { signUp, logIn, logOut, updateUserProfile };

