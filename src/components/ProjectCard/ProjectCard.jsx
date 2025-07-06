// src/components/ProjectCard.jsx
import { faCode, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ title, type, year, status, features, techStack, icon, demoLink, codeLink }) => {
    return (
        <div className="border rounded-lg p-6 bg-white text-gray-800 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
                <div className="mb-4">
                    <FontAwesomeIcon icon={icon} className="text-3xl p-2 bg-gray-800 text-white rounded-lg" />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-1 text-gray-800">{title}</h3>
                    <p className="text-sm mb-4 text-gray-600">
                        {type} • {year} • {status}
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="mb-4">
                <h4 className="font-medium mb-2 text-gray-800">Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
                <h4 className="font-medium mb-2 text-gray-800">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-gray-200 rounded text-gray-800 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 font-medium">
                <a
                    href='#'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1/3 items-center justify-center gap-3 py-2 rounded bg-gray-800 text-white hover:-translate-y-1 transition-all duration-300"
                >
                    <span>Demo</span>
                    <FontAwesomeIcon icon={faExternalLink} />
                </a>
                <a
                    href='#'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-3 py-2 rounded text-gray-800 border border-gray-800 hover:-translate-y-1 transition-all duration-300"
                >
                    <span>Code</span>
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
