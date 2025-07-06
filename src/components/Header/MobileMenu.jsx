import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "./MenuLinks";
const MobileMenu = ({ active, setActive, setMenuOpen }) => {

    return (
        <ul className="absolute top-[80px] left-0 w-full bg-white flex flex-col items-start gap-3 px-6 py-4 shadow-lg md:hidden">
            {links.map(link => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        onClick={() => {
                            setActive(link.href);
                            setMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full ${active === link.href
                            ? "bg-gray-300"
                            : "text-gray-800 hover:text-blue-600"
                            }`}
                    >
                        <FontAwesomeIcon icon={link.icon} />
                        <span>{link.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default MobileMenu;
