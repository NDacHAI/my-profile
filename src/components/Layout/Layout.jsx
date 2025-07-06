import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../../pages/About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Skills from "../../pages/Skills/Skills";
import Contact from "../../pages/Contact/Contact";
import { ThemeContext } from "../../context/ThemeContext";

const Layout = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
        >
            <Header />
            <div className="px-4 sm:px-0">
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
