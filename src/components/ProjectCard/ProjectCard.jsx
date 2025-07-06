import { faCode, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({
    title,
    type,
    year,
    status,
    features,
    techStack,
    icon,
    demoLink,
    codeLink,
}) => {
    return (
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
                <div className="mb-4">
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-3xl p-2 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg"
                    />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-1">{title}</h3>
                    <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                        {type} • {year} • {status}
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="mb-4">
                <h4 className="font-medium mb-2">Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
                <h4 className="font-medium mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 text-sm rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 font-medium">
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-2 rounded bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 hover:-translate-y-1 transition-all duration-300"
                >
                    <span>Demo</span>
                    <FontAwesomeIcon icon={faExternalLink} />
                </a>
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-2 rounded border border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-200 hover:-translate-y-1 transition-all duration-300"
                >
                    <span>Code</span>
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
