import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

const SocialLinks = () => {

    const contact = [
        { href: "#", icon: faGithub, label: "github" },
        { href: "#", icon: faLinkedin, label: "linked" },
        { href: "#", icon: faInstagram, label: "instagram" },
        { href: "https://www.facebook.com/nguyen.ac.hai.587505/", icon: faFacebook, label: "facebook" },
    ];

    return (
        <ul className="flex align-center gap-3">
            {contact.map((link, index) => (

                <li key={index}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <div
                            className="flex items-center justify-center text-xl w-10 h-10 bg-gray-800 rounded-full text-white hover:scale-110 transition-all"
                        >

                            <FontAwesomeIcon className="w-[20px] h-[20px]" icon={link.icon} />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;