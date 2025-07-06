import { faBook, faCalendarDay, faCircleInfo, faEnvelope, faIdCard, faLightbulb, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {

    const info = [
        { icon: faIdCard, title: 'Name', content: 'Nguyễn Đắc Hải' },
        { icon: faCalendarDay, title: 'Date of Birth', content: 'November, 27, 2003' },
        { icon: faLocationDot, title: 'Place of Birth', content: 'Đăk Nông, Việt Nam' },
        { icon: faEnvelope, title: 'Email', content: 'ndachai2003@gmail.com' },
        { icon: faPhone, title: 'Phone', content: '0123456789' },
        { icon: faBook, title: 'Education', content: 'Duy Tan University' },
    ]

    return (
        <section id="about" className="max-w-7xl mx-auto my-8 scroll-mt-[80px]">
            <div className="flex items-center flex-col gap-2 text-gray-800">
                <h1 className="text-4xl font-bold">About Me</h1>
                <span className="text-lg font-medium">Discover my journey, passions, and the story behind my work</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4 min-h-[calc(100vh-5rem)]">

                <div className="w-full flex justify-center lg:justify-start mt-16 aos-init aos-animate">
                    <img alt="about me" className="w-sm max-w-md rounded-xl shadow-lg object-cover 
             border-4 border-white dark:border-gray-800 
             hover:shadow-3xl hover:-translate-y-2 
             transition-all duration-300" src="/avatar.jpg" />
                </div>

                <div className="w-full text-gray-800 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 aos-init aos-animate">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faCircleInfo} className="text-white bg-gray-800 p-3 rounded-lg" />
                                <h3 className="text-xl font-semibold">Who Am I</h3>
                            </div>
                            <span>
                                I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic.
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faLightbulb} className="text-white bg-gray-800 p-3 rounded-lg" />
                                <h3 className="text-xl font-semibold">My Approach</h3>
                            </div>
                            <span>
                                I focus on user-centered design, performance, and accessibility always evolving with modern tech to deliver seamless digital experiences.
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faCircleInfo} className="text-gray-800 text-3xl" />
                        <h3 className="text-xl font-semibold">Personal Info</h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                        {
                            info.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-800">
                                    <FontAwesomeIcon icon={item.icon} className="text-white bg-gray-800 p-3 rounded-lg" />
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-semibold">{item.title}:</span>
                                        <span>{item.content}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default About;