import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function addTestimonial(data) {
    await addDoc(collection(db, "testimonials"), data);
}

export async function getTestimonials() {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
