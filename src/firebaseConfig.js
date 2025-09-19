import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Cấu hình Firebase (cái bạn copy)
const firebaseConfig = {
    apiKey: "AIzaSyDQJemV1LsvJ_fFEs2SgSE-xbirodaK2Rw",
    authDomain: "my-portfolio-cc4ad.firebaseapp.com",
    projectId: "my-portfolio-cc4ad",
    storageBucket: "my-portfolio-cc4ad.appspot.com", // <-- sửa lại
    messagingSenderId: "178382748482",
    appId: "1:178382748482:web:decd95695be790126726db",
    measurementId: "G-X268RWN2FY"
};


// Khởi tạo app
const app = initializeApp(firebaseConfig);

// Kết nối Firestore
export const db = getFirestore(app);
