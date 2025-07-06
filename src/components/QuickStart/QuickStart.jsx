import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const QuickStart = () => {
    const data = [
        { icon: <FontAwesomeIcon icon={faBriefcase} />, title: 'Intern', content: 'Experience' },
        { icon: <FontAwesomeIcon icon={faJs} />, title: 'JavaScript', content: 'Main Language' },
        { icon: <FontAwesomeIcon icon={faCode} />, title: '1 Project', content: 'Total Project' },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="
            flex items-center gap-2 rounded-4xl
            bg-gray-900 dark:bg-white
            text-white dark:text-gray-900
            text-[12px] px-2 py-2 w-full sm:w-auto
            transition-all duration-300 hover:-translate-y-1
          "
                >
                    {item.icon}
                    <div className="flex-1">
                        <div>{item.title}</div>
                        <div className="font-light">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuickStart;
