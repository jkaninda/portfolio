import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/css/tailwindcss.css"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYUFT1NPxddygxgpmUDfy_ZaxcMuM8LoI",
    authDomain: "kaninda-d2d8e.firebaseapp.com",
    projectId: "kaninda-d2d8e",
    storageBucket: "kaninda-d2d8e.appspot.com",
    messagingSenderId: "972400730155",
    appId: "1:972400730155:web:08308daf47a238f6474a6e",
    measurementId: "G-WZZHLBK7L7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
createApp(App).use(store)
.use(router)
.use(analytics)
.mount('#app')
