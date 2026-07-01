import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExploreProject = () => {
    return (
        <a
            href="#projects"
            className="
        flex items-center justify-center gap-3
        bg-gray-900 dark:bg-white
        text-white
        dark:text-gray-900
        px-6 py-3 rounded-lg
        transition-all duration-300
        hover:-translate-y-1
        cursor-pointer
      "
        >
            <FontAwesomeIcon icon={faArrowRight} />
            View Projects
        </a>
    );
};

export default ExploreProject;
