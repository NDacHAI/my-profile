import { faCss, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faDatabase, faKey, faLayerGroup, faPaperPlane, faWind } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import SkillsCard from "../../components/SkillsCard/SkillsCard";

const skillsData = [
    {
        icon: faHtml5,
        title: 'HTML',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faCss,
        title: 'CSS',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faJs,
        title: 'JavaScript',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faReact,
        title: 'React',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faWind,
        title: 'Tailwind',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faBolt,
        title: 'Vite',
        content: 'Basic',
        type: 'Frontend',
    },
    {
        icon: faNodeJs,
        title: 'Node.js',
        content: 'Basic',
        type: 'Backend',
    },
    {
        icon: faLayerGroup,
        title: 'Express.js',
        content: 'Basic',
        type: 'Backend',
    },
    {
        icon: faDatabase,
        title: 'PostgreSQL',
        content: 'Basic',
        type: 'Backend',
    },
    {
        icon: faDatabase,
        title: 'MongoDB ',
        content: 'Basic',
        type: 'Backend',
    },
    {
        icon: faKey,
        title: 'JWT Auth',
        content: 'Basic',
        type: 'Backend',
    },
    {
        icon: faGit,
        title: 'Git',
        content: 'Basic',
        type: 'Other tools',
    },
    {
        icon: faGithub,
        title: 'Github',
        content: 'Basic',
        type: 'Other tools',
    },
    {
        icon: faFigma,
        title: 'Figma',
        content: 'Basic',
        type: 'Other tools',
    },
    {
        icon: faPaperPlane,
        title: 'Postman',
        content: 'Basic',
        type: 'Other tools',
    },

]

const categories = ['Frontend', 'Backend', 'Other tools'];

const Skills = () => {

    const [selectedCat, setSelectedCat] = useState('Frontend')

    const filtered = useMemo(() => {
        return skillsData.filter(p => p.type === selectedCat);
    }, [selectedCat]);

    return (
        <section id='skills' className="max-w-7xl mx-auto py-12 flex flex-col justify-center scroll-mt-[40px]">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
                <p className="text-gray-600 mt-3 font-medium text-lg">A glimpse of where I've been — from work experience to organizational life that shaped who I am.</p>
            </div>

            <div className="flex justify-center gap-4 my-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => { setSelectedCat(cat) }}
                        className={`px-4 py-2 rounded-lg font-medium transition ${selectedCat === cat
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-200 text-gray-800 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                            }`}
                    >
                        {cat}
                    </button>
                ))}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, index) => (
                    <SkillsCard key={index} {...p} />
                ))}
            </div>
        </section>
    );
}

export default Skills;