import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../../pages/About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Skills from "../../pages/Skills/Skills";
import Contact from "../../pages/Contact/Contact";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,    // Cho phép animate lại khi cuộn quay lại
            mirror: true,   // Ẩn phần tử khi cuộn ra khỏi vùng nhìn thấy
        });
        AOS.refresh()
    }, []);


    return (
        <div>
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
