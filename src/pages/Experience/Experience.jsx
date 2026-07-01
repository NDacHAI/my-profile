import {
    faBriefcase,
    faBuilding,
    faCheck,
    faDatabase,
    faDiagramProject,
    faLock,
    faNetworkWired,
    faPeopleGroup,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SlideInSection from "../../components/SlideInSection/SlideInSection";

const workExperiences = [
    {
        icon: faBuilding,
        title: "Fullstack Intern Developer",
        role: "Enterprise HRM System",
        project: "Visnam Joint Stock Company",
        period: "03/2025 - Present",
        location: "Work Experience",
        responsibilities: [
            "Built and maintained HRM features including employees, leave, payroll, and access control.",
            "Developed RESTful APIs and database architecture using ASP.NET Core and EF Core.",
            "Implemented JWT, RBAC, and workflow automation features.",
        ],
        techStack: [".NET", "Blazor", "PostgreSQL", "EF Core", "REST API", "JWT", "Git"],
    },
];

const responsibilityIcons = [
    faDatabase,
    faLock,
    faServer,
    faDiagramProject,
    faCheck,
    faNetworkWired,
    faBriefcase,
    faPeopleGroup,
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="mx-[-1rem] bg-slate-900 py-14 px-4 text-white sm:mx-0 sm:px-6 lg:px-8 scroll-mt-[80px]"
        >
            <div className="mx-auto max-w-7xl">
                <FadeInSection direction="up">
                    <div className="mb-8 flex justify-center gap-4">
                        <div className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Work Experience</span>
                        </div>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {workExperiences.map((item, index) => (
                        <SlideInSection
                            key={item.title}
                            direction={index % 2 === 0 ? "left" : "right"}
                        >
                            <article className="h-full rounded-lg border border-white/80 bg-slate-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white">
                                <div className="mb-6 flex items-start gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white text-3xl text-slate-900">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold leading-tight text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm font-medium text-slate-300">
                                            {item.role}
                                        </p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            {item.period} - {item.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <p className="mb-2 text-sm font-bold text-white">{item.project}</p>
                                </div>

                                <div className="mb-6">
                                    <p className="mb-3 text-sm font-bold text-white">Responsibilities:</p>
                                    <ul className="space-y-3">
                                        {item.responsibilities.map((responsibility, responsibilityIndex) => (
                                            <li
                                                key={responsibility}
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                            >
                                                <FontAwesomeIcon
                                                    icon={responsibilityIcons[responsibilityIndex] || faCheck}
                                                    className="mt-1 text-slate-300"
                                                />
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="mb-3 text-sm font-bold text-white">Tech Stack:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-100"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </SlideInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
