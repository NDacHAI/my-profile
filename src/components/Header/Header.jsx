import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import links from "./MenuLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [active, setActive] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let current = "#home";


            links.forEach(link => {
                const section = document.querySelector(link.href);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetHeight = section.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = link.href;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="h-[80px] shadow-lg flex items-center fixed w-full bg-white z-50">
            <div className="w-7xl max-w-[1280px] pl-2 sm:pl-0 py-4 mx-auto flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setActive("#home")}
                    className="text-2xl flex gap-3 items-center text-black"
                >
                    <FontAwesomeIcon icon={faCode} />
                    <h1>My Profile</h1>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.href)}
                                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200
                ${active === link.href
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-800 hover:text-blue-600"
                                    }`}
                            >
                                <FontAwesomeIcon icon={link.icon} />
                                <span>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl mr-10"
                >
                    {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>

            {/* Mobile Menu */}
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
