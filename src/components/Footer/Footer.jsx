import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faEnvelopeCircleCheck,
    faLocationArrow,
    faPaperPlane,
    faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
    const navigation = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Project" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 border-t border-gray-900 dark:border-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="flex items-center text-2xl font-bold mb-2 gap-2">
                        <FontAwesomeIcon icon={faCode} />
                        Nguyen Dac Hai
                    </h1>
                    <span className="text-sm">
                        Web Developer focused on responsive interfaces, clean code, and practical digital experiences.
                    </span>
                </div>
                <div>
                    <h3 className="flex items-center text-lg font-semibold mb-3 gap-2">
                        <FontAwesomeIcon icon={faLocationArrow} />
                        Navigation
                    </h3>
                    <ul>
                        {navigation.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="text-sm hover:underline"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="flex items-center text-lg font-semibold mb-3 gap-2">
                        <FontAwesomeIcon icon={faShareNodes} />
                        Find Me Online
                    </h1>
                    <SocialLinks />
                </div>
                <div>
                    <h1 className="flex items-center text-lg font-semibold mb-3 gap-2">
                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                        Subscribe to Newsletter
                    </h1>
                    <div className="text-sm mb-3">
                        Stay updated with my latest projects and articles.
                    </div>
                    <input
                        placeholder="Enter your email"
                        aria-label="Email address"
                        className="w-full border border-gray-900 dark:border-white rounded-xl p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300"
                    />
                    <button
                        aria-label="Subscribe to newsletter"
                        className="w-full flex items-center justify-center rounded-xl gap-2 mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        Subscribe
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
