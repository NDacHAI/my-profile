import { faCss, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faDatabase, faKey, faLayerGroup, faPaperPlane, faWind } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SlideInSection from "../../components/SlideInSection/SlideInSection";

const skillsData = [
    { icon: faHtml5, title: 'HTML', content: 'Semantic structure and accessible markup', type: 'Frontend' },
    { icon: faCss, title: 'CSS', content: 'Responsive layouts and polished UI styling', type: 'Frontend' },
    { icon: faJs, title: 'JavaScript', content: 'Interactive behavior and application logic', type: 'Frontend' },
    { icon: faReact, title: 'React', content: 'Component-based web interfaces', type: 'Frontend' },
    { icon: faWind, title: 'Tailwind CSS', content: 'Fast styling with utility-first workflows', type: 'Frontend' },
    { icon: faBolt, title: 'Vite', content: 'Modern frontend tooling and development server', type: 'Frontend' },
    { icon: faNodeJs, title: 'Node.js', content: 'Backend fundamentals and API workflows', type: 'Backend' },
    { icon: faLayerGroup, title: 'Express.js', content: 'REST API structure and routing basics', type: 'Backend' },
    { icon: faDatabase, title: 'PostgreSQL', content: 'Relational database design basics', type: 'Backend' },
    { icon: faDatabase, title: 'MongoDB', content: 'Document database fundamentals', type: 'Backend' },
    { icon: faKey, title: 'JWT Auth', content: 'Authentication and authorization concepts', type: 'Backend' },
    { icon: faGit, title: 'Git', content: 'Version control for daily development', type: 'Other tools' },
    { icon: faGithub, title: 'GitHub', content: 'Code hosting and project collaboration', type: 'Other tools' },
    { icon: faFigma, title: 'Figma', content: 'Reading designs and creating UI references', type: 'Other tools' },
    { icon: faPaperPlane, title: 'Postman', content: 'Testing APIs during development', type: 'Other tools' },
];

const categories = ['Frontend', 'Backend', 'Other tools'];

const Skills = () => {
    const [selectedCat, setSelectedCat] = useState('Frontend');

    const filtered = useMemo(() => {
        return skillsData.filter(p => p.type === selectedCat);
    }, [selectedCat]);

    return (
        <section
            id="skills"
            className="max-w-7xl mx-auto py-12 flex flex-col justify-center scroll-mt-[60px]"
        >
            <div className="text-center">
                <FadeInSection direction="up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
                </FadeInSection>
                <FadeInSection direction="up">
                    <p className="text-gray-600 dark:text-gray-300 mt-3 font-medium text-lg">
                        The tools and technologies I use to design, build, test, and improve web applications.
                    </p>
                </FadeInSection>
            </div>

            <div className="flex justify-center gap-4 my-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCat(cat)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${selectedCat === cat
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                            : 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-900 dark:border dark:border-white hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, idx) => (
                    <SlideInSection
                        key={idx}
                        direction={idx % 2 === 0 ? "left" : "right"}
                    >
                        <SkillsCard {...p} />
                    </SlideInSection>
                ))}
            </div>
        </section>
    );
};

export default Skills;
