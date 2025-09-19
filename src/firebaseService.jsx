// src/firebaseService.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Thêm 1 testimonial
export async function addTestimonial(data) {
    await addDoc(collection(db, "testimonials"), data);
}

// Lấy tất cả testimonial
export async function getTestimonials() {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
