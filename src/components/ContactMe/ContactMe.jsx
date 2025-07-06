import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faArrowRight, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const ContactMe = () => {

    const contact = [
        { href: "#", icon: faGithub, label: "Github", content: 'Explore my code and project' },
        { href: "#", icon: faLinkedin, label: "Linked", content: "Let's connect professionally" },
        { href: "#", icon: faInstagram, label: "Instagram", content: 'My visual and my life' },
        { href: "https://www.facebook.com/nguyen.ac.hai.587505/", icon: faFacebook, label: "facebook", content: 'My info' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <ul className="w-full flex flex-col gap-4">
                {contact.map((item, index) => (
                    <li key={index} className="w-full text-gray-800 transition-all duration-300 hover:-translate-y-1">
                        <a href={item.href} target="_blank" className="flex items-center justify-between w-full border border-gray-800 px-4 py-7 rounded-lg">
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={item.icon} className="bg-gray-800 text-white p-3 text-xl rounded-lg" />
                                <div>
                                    <h2 className="text-xl font-semibold">{item.label}</h2>
                                    <p className="text-sm text-gray-600">{item.content}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col px-7 py-12 text-gray-800 border border-gray-800 rounded-lg gap-2">
                <h2 className="flex items-center gap-2 text-2xl font-medium">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Send Me a Message</span>
                </h2>
                <input className="border border-gray-00 p-3 rounded-lg" type="text" placeholder="Your name" />
                <input className="border border-gray-800 p-3 rounded-lg" type="text" placeholder="Your email" />
                <textarea className="border border-gray-800 p-3 rounded-lg" type="text" rows='5' placeholder="Your message" />
                <button className="flex gap-2 text-lg items-center justify-center border border-gray-800 py-3 rounded-lg transition-all duration-300 hover:translate-y-1 cursor-pointer">
                    <span>Send</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
}

export default ContactMe;