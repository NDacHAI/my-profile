import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownLoadCV = () => {
    return (
        <button
            className="
        flex items-center justify-center gap-3
        border-2 border-gray-900 dark:border-white
        text-gray-900 dark:text-white
        bg-white dark:bg-gray-900
        px-6 py-3 rounded-lg
        transition-all duration-300
        hover:-translate-y-1
        cursor-pointer
      "
        >
            <FontAwesomeIcon icon={faEnvelope} />
            DownLoad My CV
        </button>
    );
};

export default DownLoadCV;
