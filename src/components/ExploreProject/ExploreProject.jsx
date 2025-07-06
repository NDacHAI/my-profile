import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExploreProject = () => {
    return (
        <button
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
            <FontAwesomeIcon icon={faDownload} />
            Explore My Project
        </button>
    );
};

export default ExploreProject;
