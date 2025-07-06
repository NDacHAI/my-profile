import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelopeCircleCheck, faLocationArrow, faPaperPlane, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {

    const navigation = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Project" },
        { href: "#contact", label: "Contact" },
    ];



    return (
        <footer className="bg-white text-gray-800 py-12 border-t border-t-gray-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h1 className="flex items-center text-2xl font-bold mb-2 gap-2">
                        <FontAwesomeIcon icon={faCode} />
                        Nguyễn Đắc Hải
                    </h1>
                    <span className="text-sm text-gray-800">
                        Frontend Developer specializing in UI/UX, modern web technologies, and building smooth digital experiences with clean code & creative flow.
                    </span>
                </div>
                <div>
                    <h3 className="flex items-center text-lg font-semibold mb-3 gap-2">
                        <FontAwesomeIcon icon={faLocationArrow} />
                        Navigation
                    </h3>
                    <ul>
                        {navigation.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-sm">
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
                    <div className="flex space-between ">
                        <SocialLinks />
                    </div>
                </div>
                <div>
                    <h1 className="flex items-center text-lg font-semibold mb-3 gap-2">
                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                        Subscribe to Newsletter
                    </h1>
                    <div className="text-sm text-black">Stay updated with my latest projects and articles.</div>
                    <input
                        placeholder="enter your email"
                        className="w-full border border-gray-300 rounded-xl p-3 mt-3"
                        aria-label="Email address"
                    />
                    <button
                        className="w-full flex items-center justify-center rounded-xl gap-2 mt-2 bg-gray-800 text-white py-4 px-3 transition-all transform  hover:-translate-y-1 cursor-pointer "
                        aria-label="Subscribe to newsletter"
                    >
                        Subscribe
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;