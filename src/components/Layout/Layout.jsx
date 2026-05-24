
import { useContext } from "react";
import About from "../../pages/About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Experience from "../../pages/Experience/Experience";
import Skills from "../../pages/Skills/Skills";
import Contact from "../../pages/Contact/Contact";
import { ThemeContext } from "../../context/ThemeContext";
import Testimonials from "../../pages/Testimonials/Testimonials";

const Layout = () => {
    const { theme } = useContext(ThemeContext);


    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
                } overflow-hidden`}
        >
            <Header />
            <div className="px-4 sm:px-0">
                <Home />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
