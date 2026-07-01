import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ModelTestimonial from "../../components/ModelTestimonial/ModelTestimonial";
import { getTestimonials } from "../../firebaseService";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SlideInSection from "../../components/SlideInSection/SlideInSection";

const Testimonials = () => {
    const [comments, setComments] = useState([]);
    const [openModel, setOpenModel] = useState(false);

    const fetchData = async () => {
        const data = await getTestimonials();
        setComments(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = () => {
        fetchData();
    };

    return (
        <section id="testimonials" className="max-w-7xl mx-auto my-8 scroll-mt-[100px]">
            <FadeInSection direction="up">
                <div className="flex items-center flex-col gap-2 text-gray-900 dark:text-white">
                    <h1 className="text-4xl font-bold">What People Say</h1>
                    <span className="text-lg font-medium text-center">
                        Voices from clients, collaborators, and friends who have experienced my work.
                    </span>
                </div>
            </FadeInSection>

            <SlideInSection direction="up">
                <div className="mx-auto border border-gray-900 dark:border-white max-w-4xl min-h-[386px] max-h-[600px] overflow-y-auto scrollbar-hide rounded-lg mt-12 overflow-hidden">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-lg border-b border-gray-300 dark:border-gray-700 p-6">
                        <div className="flex gap-2 items-center font-semibold">
                            <FontAwesomeIcon icon={faMessage} />
                            <span>Testimonials</span>
                        </div>
                        <button
                            className="flex gap-2 items-center justify-center py-2 px-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg cursor-pointer"
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

                    {comments.length === 0 ? (
                        <div className="flex min-h-[280px] flex-col items-center justify-center px-6 text-center text-gray-900 dark:text-white">
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="mb-6 text-5xl text-gray-300 dark:text-gray-600"
                            />
                            <h3 className="text-xl font-bold">No Testimonials Yet</h3>
                            <p className="mt-3 max-w-md text-sm font-medium text-gray-700 dark:text-gray-300">
                                Be the first to share your experience and inspire others with your story!
                            </p>
                        </div>
                    ) : (
                        <div className="p-6">
                            {comments.map((item, idx) => (
                                <FadeInSection key={item.id} direction={idx % 2 === 0 ? "left" : "right"}>
                                    <div className="p-4 text-left border border-gray-300 bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white rounded-lg mb-4">
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
                                </FadeInSection>
                            ))}
                        </div>
                    )}
                </div>
            </SlideInSection>
        </section>
    );
};

export default Testimonials;
