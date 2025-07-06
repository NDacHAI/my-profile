import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = ({ icon, title, content }) => {
    return (
        <div className="flex flex-col gap-2 items-center p-6 border border-gray-900 dark:border-white rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:-translate-y-1 transition-all duration-300">
            <FontAwesomeIcon
                icon={icon}
                className="p-4 text-3xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg"
            />
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">{content}</p>
        </div>
    );
}

export default SkillsCard;
