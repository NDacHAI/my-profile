import { faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = () => {
    return (
        <div className="relative flex justify-center overflow-visible max-h-[calc(100vh-15em)] sm:mt-10">
            {/* Avatar image */}
            <div className="relative z-10">
                <img
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-900 border-4 border-gray-900 dark:border-white hover:shadow-3xl hover:scale-105 transition-all duration-300 animation-float"
                    src="/avatar.jpg"
                    alt="Avatar"
                />
            </div>

            {/* Top Left */}
            <div
                className="absolute top-0 left-10 w-12 h-12 sm:w-16 sm:h-16
                            bg-gray-900 text-white text-xl
                            dark:bg-white dark:text-gray-900
                            border-2 border-gray-200 dark:border-gray-700
                            rounded-full flex items-center justify-center
                            hover:scale-110 transition-all duration-300 animation-float cursor-pointer"
            >
                <FontAwesomeIcon icon={faHtml5} />
            </div>

            {/* Top Right */}
            <div
                className="absolute top-0 right-10 w-12 h-12 sm:w-16 sm:h-16
                            bg-gray-900 text-white text-xl
                            dark:bg-white dark:text-gray-900
                            border-2 border-gray-200 dark:border-gray-700
                            rounded-full flex items-center justify-center
                            hover:scale-110 transition-all duration-300 animation-float cursor-pointer"
            >
                <FontAwesomeIcon icon={faCss3Alt} />
            </div>

            {/* Bottom Left */}
            <div
                className="absolute bottom-0 left-8 w-12 h-12 sm:w-16 sm:h-16
                            bg-gray-900 text-white text-xl
                            dark:bg-white dark:text-gray-900
                            border-2 border-gray-200 dark:border-gray-700
                            rounded-full flex items-center justify-center
                            hover:scale-110 transition-all duration-300 animation-float cursor-pointer"
            >
                <FontAwesomeIcon icon={faJs} />
            </div>

            {/* Bottom Right */}
            <div
                className="absolute bottom-0 right-8 w-12 h-12 sm:w-16 sm:h-16
                            bg-gray-900 text-white text-xl
                            dark:bg-white dark:text-gray-900
                            border-2 border-gray-200 dark:border-gray-700
                            rounded-full flex items-center justify-center
                            hover:scale-110 transition-all duration-300 animation-float cursor-pointer"
            >
                <FontAwesomeIcon icon={faReact} />
            </div>
        </div>
    );
}

export default Avatar;
