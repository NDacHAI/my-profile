import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "./MenuLinks";

const MobileMenu = ({ active, setActive, setMenuOpen }) => {
    return (
        <ul
            className="
        absolute top-[80px] left-0 w-full 
        bg-white dark:bg-gray-900 
        flex flex-col gap-3 px-6 py-4 shadow-lg md:hidden
      "
        >
            {links.map((link) => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        onClick={() => {
                            setActive(link.href);
                            setMenuOpen(false);
                        }}
                        className={`
              flex items-center gap-2 px-3 py-2 rounded-lg w-full 
              ${active === link.href
                                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                                : "text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            }
            `}
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
