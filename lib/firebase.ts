// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAI, getGenerativeModel, VertexAIBackend } from "firebase/ai";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "firebase/remote-config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDowvxbna9N8icvun4_6vyys2dzl1KQ_a4",
  authDomain: "prvail-69138435-b4295.firebaseapp.com",
  databaseURL: "https://prvail-69138435-b4295-default-rtdb.firebaseio.com",
  projectId: "prvail-69138435-b4295",
  storageBucket: "prvail-69138435-b4295.appspot.com",
  messagingSenderId: "71673449111",
  appId: "1:71673449111:web:8a58435afa823e9ab6f7d2",
  measurementId: "G-9MHNCTH6DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const remoteConfig = getRemoteConfig(app);

// Conditionally initialize Analytics
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Initialize the Vertex AI Gemini API backend service
const ai = getAI(app, { backend: new VertexAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
export const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });
