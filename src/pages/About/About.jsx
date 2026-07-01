import {
    faBook,
    faCalendarDay,
    faCircleInfo,
    faEnvelope,
    faIdCard,
    faLightbulb,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SlideInSection from "../../components/SlideInSection/SlideInSection";

const About = () => {
    const info = [
        { icon: faIdCard, title: "Name", content: "Nguyen Dac Hai" },
        { icon: faCalendarDay, title: "Date of Birth", content: "November 27, 2003" },
        { icon: faLocationDot, title: "Location", content: "Lam Dong, Vietnam" },
        { icon: faEnvelope, title: "Email", content: "ndachai2003@gmail.com" },
        { icon: faPhone, title: "Phone", content: "Hidden" },
        { icon: faBook, title: "Education", content: "Duy Tan University" },
    ];

    const randomWrapper = (children, key) => {
        const effects = [
            <FadeInSection key={key} direction="up">{children}</FadeInSection>,
            <FadeInSection key={key} direction="down">{children}</FadeInSection>,
            <SlideInSection key={key} direction="left">{children}</SlideInSection>,
            <SlideInSection key={key} direction="right">{children}</SlideInSection>,
        ];
        return effects[Math.floor(Math.random() * effects.length)];
    };

    return (
        <section id="about" className="max-w-7xl mx-auto my-4 scroll-mt-[80px]">
            <div className="flex items-center flex-col gap-2 text-gray-900 dark:text-white">
                {randomWrapper(<h1 className="text-4xl font-bold">About Me</h1>, "title")}
                {randomWrapper(
                    <span className="text-lg font-medium text-center">
                        Discover my background, interests, and the way I approach web development.
                    </span>,
                    "subtitle"
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4 min-h-[calc(100vh-5rem)]">
                {randomWrapper(
                    <div className="w-full flex justify-center lg:justify-start mt-12">
                        <img
                            alt="Nguyen Dac Hai"
                            className="w-sm max-w-md rounded-xl shadow-lg object-cover 
                                border-4 border-gray-900 dark:border-white 
                                hover:shadow-3xl hover:-translate-y-2 
                                transition-all duration-300"
                            src="/avatar.jpg"
                        />
                    </div>,
                    "image"
                )}

                {randomWrapper(
                    <div className="w-full text-gray-900 dark:text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white p-3 rounded-lg"
                                    />
                                    <h3 className="text-xl font-semibold">Who Am I</h3>
                                </div>
                                <span className="text-left">
                                    I'm a Web Developer with a strong interest in responsive interfaces, practical user experience, and maintainable frontend code.
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <FontAwesomeIcon
                                        icon={faLightbulb}
                                        className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white p-3 rounded-lg"
                                    />
                                    <h3 className="text-xl font-semibold">My Approach</h3>
                                </div>
                                <span className="text-left">
                                    I focus on simple, reliable products: clear UI, fast interactions, accessible layouts, and code that is easy to improve over time.
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-gray-900 dark:text-white text-3xl" />
                            <h3 className="text-xl font-semibold">Personal Info</h3>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                            {info.map((item, index) =>
                                randomWrapper(
                                    <li key={index} className="flex items-center gap-2 text-gray-900 dark:text-white">
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className="text-white dark:text-gray-900 bg-gray-900 dark:bg-white p-3 rounded-lg"
                                        />
                                        <div className="flex gap-2 text-sm">
                                            <span className="font-semibold">{item.title}:</span>
                                            <span>{item.content}</span>
                                        </div>
                                    </li>,
                                    `info-${index}`
                                )
                            )}
                        </ul>
                    </div>,
                    "content"
                )}
            </div>
        </section>
    );
};

export default About;
