import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ContactMe from "../../components/ContactMe/ContactMe";
import SupportMe from "../../components/SupportMe/SupportMe";

const Contact = () => {
    const [selectedCat, setSelectedCat] = useState('Contact Me');

    const categories = [
        { icon: faEnvelope, title: 'Contact Me' },
        { icon: faHeart, title: 'Support Me' },
    ];

    return (
        <section id="contact" className="max-w-7xl mx-auto py-12 flex flex-col justify-center scroll-mt-[40px]">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-3 font-medium text-lg">
                    Reach out via form, social media, or support platforms.
                </p>
            </div>

            <div className="flex justify-center gap-4 my-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCat(cat.title)}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium gap-2 transition ${selectedCat === cat.title
                            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                            : 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                            }`}
                    >
                        <FontAwesomeIcon icon={cat.icon} />
                        <span>{cat.title}</span>
                    </button>
                ))}
            </div>

            {selectedCat === 'Contact Me' ? <ContactMe /> : <SupportMe />}
        </section>
    );
};

export default Contact;
