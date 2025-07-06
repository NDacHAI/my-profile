import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = ({ icon, title, content }) => {
    return (
        <div className="flex flex-col gap-2 items-center p-6 border border-gray-800 rounded-lg hover:-translate-y-1 transition-all duration-300">
            <FontAwesomeIcon icon={icon} className="p-4 text-3xl bg-gray-800 text-white rounded-lg" />
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-sm text-gray-600  mb-4 text-center">{content}</p>
        </div>
    );
}

export default SkillsCard;