import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MarqueeText from "../../components/MarqueText/MarqueText";
import ExploreProject from "../../components/ExploreProject/ExploreProject";
import DownLoadCV from "../../components/DownLoadCV/DownLoadCV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import QuickStart from "../../components/QuickStart/QuickStart";
import Avatar from "../../components/Avatar/Avatar";

const Home = () => {
    return (
        <section id="home" className="pt-[80px]">
            <div className="max-w-7xl mx-auto pb-12">
                <div className="grid items-center lg:grid-cols-2 gap-12 min-h-[calc(100vh-5em)]">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-800">
                            Hi, I'm Nguyễn
                            <span className="block mt-3">
                                Đắc Hải 👋
                            </span>
                        </h1>
                        <MarqueeText />
                        <div data-aos="fade-right" data-aos-delay="300" className="font-light text-gray-800 max-w-lg mt-2 ">
                            I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel intuitive, fast, and delightful to use.
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center my-6 gap-2 sm:gap-0">
                            <span className="mr-3">Follow me on:</span>
                            <SocialLinks />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <ExploreProject />
                            <DownLoadCV />
                        </div>

                        <div className="my-4">
                            <div className="flex flex-col gap-3 text-gray-800 font-semibold">
                                <div className="flex items-center gap-3 pt-3">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <div>Quick Starts:</div>
                                </div>
                                <QuickStart />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Avatar />
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Home;
