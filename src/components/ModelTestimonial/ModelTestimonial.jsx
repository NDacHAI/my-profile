import { faEnvelope, faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { addTestimonial } from "../../firebaseService";

const ModelTestimonial = ({ open, onClose, onSave }) => {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        major: "",
        comment: "",
    })


    if (!open) return null;

    const handleSubmit = async () => {
        if (!form.fullName || !form.email || !form.comment) {
            alert("Please fill all required fields!");
            return;
        }
        try {
            await addTestimonial(form);   // post lên Firestore
            setForm({ fullName: "", email: "", major: "", comment: "" }); // reset
            onSave && onSave(); // gọi callback cha (nếu có)
            onClose(); // đóng modal
        } catch (err) {
            console.error("Error adding testimonial: ", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600/10 backdrop-blur-sm flex items-center justify-center z-50"
        >
            <div className="bg-white dark:bg-gray-900 rounded-lg w-md mx-auto p-4 shadow relative flex flex-col">
                <FontAwesomeIcon icon={faX} className="absolute right-5 cursor-pointer"
                    onClick={onClose}
                />
                <div className="flex flex-col justify-center items-center mt-4">
                    <FontAwesomeIcon icon={faMessage} className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-4 rounded-full " />
                    <h1 className="text-xl my-2">Share Your Testimonial</h1>
                    <h2 className="text-sm">Tell us about your experience working with us</h2>
                </div>
                <div>
                    <div>
                        <div className="mt-4 mb-1 text-sm">Full Name</div>
                        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 dark:bg-gray-800 text-sm">
                            <FontAwesomeIcon icon={faAddressCard} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={form.fullName}
                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-4 mb-1 text-sm">Email</div>
                        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 dark:bg-gray-800 text-sm">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="name@gmail.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-4 mb-1 text-sm">Position</div>
                        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 dark:bg-gray-800 text-sm">
                            <FontAwesomeIcon icon={faBriefcase} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="CEO, Developer, Design, etc."
                                value={form.major}
                                onChange={(e) => setForm({ ...form, major: e.target.value })}
                                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-4 mb-1 text-sm">Testimonial</div>
                        <div className="flex w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 dark:bg-gray-800 text-sm">
                            <FontAwesomeIcon icon={faMessage} className="text-gray-400 mr-2" />
                            <textarea
                                rows="4"
                                placeholder="Share your experience"
                                value={form.comment}
                                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>


                <div className="flex gap-4 text-sm m-8 items-center mx-auto">
                    <button className="py-2 px-12 border border-gray-300 rounded-xl cursor-pointer" onClick={onClose}>Cancel</button>
                    <button className="flex gap-2 items-center bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-2 px-12 border border-gray-300 rounded-xl cursor-pointer"
                        onClick={() => handleSubmit()}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>Send</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ModelTestimonial;