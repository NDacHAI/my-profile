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
        <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 border-t  border-gray-900 dark:border-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h1 className="flex items-center text-2xl font-bold mb-2 gap-2">
                        <FontAwesomeIcon icon={faCode} />
                        Nguyễn Đắc Hải
                    </h1>
                    <span className="text-sm">
                        Frontend Developer specializing in UI/UX, modern web technologies,
                        and building smooth digital experiences with clean code & creative
                        flow.
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
                        placeholder="enter your email"
                        aria-label="Email address"
                        className="w-full border border-gray-900 dark:border-gray-900 rounded-xl p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-900 dark:placeholder-white"
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
