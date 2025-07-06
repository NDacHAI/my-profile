import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import links from "./MenuLinks";
import MobileMenu from "./MobileMenu";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [active, setActive] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const pos = window.scrollY + 200;
            let current = "#home";
            links.forEach((link) => {
                const sec = document.querySelector(link.href);
                if (
                    sec &&
                    pos >= sec.offsetTop &&
                    pos < sec.offsetTop + sec.offsetHeight
                ) {
                    current = link.href;
                }
            });
            setActive(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Tạo activeClass theo theme
    const activeClass =
        theme === "dark"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white";

    const inactiveClass =
        "text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400";

    return (
        <header className="h-[80px] flex items-center fixed w-full bg-white dark:bg-gray-900 z-50 shadow-lg dark:shadow-white/5">

            <div className="w-7xl max-w-[1280px] mx-auto flex items-center justify-between px-2 sm:px-0 py-4">
                <a
                    href="#home"
                    onClick={() => setActive("#home")}
                    className="flex items-center gap-3 text-2xl text-black dark:text-white"
                >
                    <FontAwesomeIcon icon={faCode} />
                    <h1>My Profile</h1>
                </a>

                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.href)}
                                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition duration-200 ${active === link.href ? activeClass : inactiveClass
                                    }`}
                            >
                                <FontAwesomeIcon icon={link.icon} />
                                <span>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setMenuOpen((o) => !o)}
                    className="md:hidden text-2xl text-black dark:text-white mr-3"
                >
                    {menuOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
            </div>

            {menuOpen && (
                <MobileMenu
                    active={active}
                    setActive={setActive}
                    setMenuOpen={setMenuOpen}
                />
            )}
        </header>
    );
};

export default Header;
