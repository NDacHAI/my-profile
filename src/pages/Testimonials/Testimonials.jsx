import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ModelTestimonial from "../../components/ModelTestimonial/ModelTestimonial";
import { getTestimonials } from "../../firebaseService";

const Testimonials = () => {
    const [comments, setComments] = useState([]);
    const [openModel, setOpenModel] = useState(false);

    // Lấy dữ liệu từ Firestore
    const fetchData = async () => {
        const data = await getTestimonials();
        setComments(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = () => {
        fetchData(); // reload sau khi thêm mới
    };

    return (
        <section id="testimonials" className="max-w-7xl mx-auto my-8 scroll-mt-[80px]">
            <div className="flex items-center flex-col gap-2 text-gray-900 dark:text-white">
                <h1 className="text-4xl font-bold">What People Say</h1>
                <span className="text-lg font-medium">
                    Voices from clients, collaborators, and friends who have experienced my work.
                </span>
            </div>

            <div className="mx-auto border border-gray-900 dark:border-white max-w-4xl max-h-[600px] overflow-y-auto scrollbar-hide rounded-lg mt-12 overflow-hidden">
                <div className="flex items-center justify-between text-lg border-b border-gray-300 p-6">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faMessage} />
                        <span>Testimonials</span>
                    </div>
                    <button
                        className="flex gap-2 items-center py-2 px-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg cursor-pointer"
                        onClick={() => setOpenModel(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Add Testimonial</span>
                    </button>

                </div>
                <ModelTestimonial
                    open={openModel}
                    onClose={() => setOpenModel(false)}
                    onSave={handleSave}
                />

                <div className="p-6">
                    {comments.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 border border-gray-300 bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white rounded-lg mb-4"
                        >
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-gray-600" />
                            <div className="text-sm my-2">{item.comment}</div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} className="text-yellow-400" icon={faStar} />
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full my-4">
                                    {item.fullName?.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold">{item.fullName}</span>
                                    <span>{item.major}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
