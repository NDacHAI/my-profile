import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MarqueeText from "../../components/MarqueText/MarqueText";
import ExploreProject from "../../components/ExploreProject/ExploreProject";
import DownLoadCV from "../../components/DownLoadCV/DownLoadCV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import QuickStart from "../../components/QuickStart/QuickStart";
import Avatar from "../../components/Avatar/Avatar";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SlideInSection from "../../components/SlideInSection/SlideInSection";

const Home = () => {
    // Hàm random chọn hiệu ứng
    const randomWrapper = (children, key) => {
        const effects = [
            <FadeInSection key={key} direction="up">{children}</FadeInSection>,
            <FadeInSection key={key} direction="down">{children}</FadeInSection>,
            <SlideInSection key={key} direction="left">{children}</SlideInSection>,
            <SlideInSection key={key} direction="right">{children}</SlideInSection>,
        ];
        return effects[Math.floor(Math.random() * effects.length)];
    };

    return (
        <section id="home" className="pt-[80px] bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto pb-12 pt-12 sm:pt-0">
                <div className="grid items-center lg:grid-cols-2 gap-12 min-h-[calc(100vh-5em)]">

                    <div>
                        {randomWrapper(
                            <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-left">
                                Hi, I'm Nguyễn
                                <span className="block mt-3">Đắc Hải 👋</span>
                            </h1>,
                            "title"
                        )}


                        {randomWrapper(<MarqueeText />, "marquee")}

                        {randomWrapper(
                            <div className="font-light text-gray-900 dark:text-gray-300 max-w-lg mt-2 text-left">
                                I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel intuitive, fast, and delightful to use.
                            </div>,
                            "desc"
                        )}

                        {randomWrapper(
                            <div className="flex flex-col sm:flex-row items-start sm:items-center my-6 gap-2 sm:gap-0">
                                <span className="mr-3 text-gray-900 dark:text-gray-300">
                                    Follow me on:
                                </span>
                                <SocialLinks />
                            </div>,
                            "social"
                        )}

                        {randomWrapper(
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <ExploreProject />
                                <DownLoadCV />
                            </div>,
                            "actions"
                        )}

                        {randomWrapper(
                            <div className="my-4">
                                <div className="flex flex-col gap-3 text-gray-900 dark:text-white font-semibold">
                                    <div className="flex items-center gap-3 pt-3">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                        <div>Quick Starts:</div>
                                    </div>
                                    <QuickStart />
                                </div>
                            </div>,
                            "quickstart"
                        )}
                    </div>

                    <div>
                        {randomWrapper(<Avatar />, "avatar")}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
