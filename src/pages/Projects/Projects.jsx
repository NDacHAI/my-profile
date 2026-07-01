import { useState, useMemo } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { faBuildingColumns, faCalendarCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import SlideInSection from '../../components/SlideInSection/SlideInSection';

const projectsData = [
    {
        id: 1,
        title: 'Shiftly',
        type: 'Fullstack',
        year: 2025,
        status: 'Completed',
        features: [
            'Multi-branch employee and account management',
            'Shift registration, approval, and scheduling',
            'Attendance tracking and estimated payroll reports',
        ],
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'TypeORM', 'MySQL', 'JWT'],
        demoLink: 'https://ndh-shiftly.vercel.app/',
        codeLink: 'https://github.com/NDacHAI/Shiftly',
        icon: faCalendarCheck,
    },
    {
        id: 2,
        title: 'School Management System',
        type: 'Front End',
        year: 2025,
        status: 'Graduation Thesis',
        features: [
            'Role-based dashboards for school users',
            'Academic management for classes, schedules, scores, and attendance',
            'JWT session handling and REST API integration',
        ],
        techStack: ['React', 'Tailwind CSS', 'Spring Boot', 'REST API', 'MySQL'],
        demoLink: '',
        codeLink: 'https://github.com/nhathoang111/KLTN',
        icon: faBuildingColumns,
    },
    {
        id: 3,
        title: 'Task Manager',
        type: 'Front End',
        year: 2025,
        status: 'Completed',
        features: [
            'Firebase authentication and user-specific task data',
            'CRUD tasks with priorities, due dates, and overdue tracking',
            'Responsive dashboard with filters and task statistics',
        ],
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
        demoLink: 'https://ndh-task-manager.vercel.app/',
        codeLink: 'https://github.com/NDacHAI/Task-Manager',
        icon: faSquareCheck,
    },
];

const categories = ['All', 'Front End', 'Back End', 'Fullstack'];

const Projects = () => {
    const [selectedCat, setSelectedCat] = useState('All');
    const [page, setPage] = useState(1);
    const perPage = 6;

    const filtered = useMemo(() => {
        if (selectedCat === 'All') return projectsData;
        if (selectedCat === 'Front End' || selectedCat === 'Back End') {
            return projectsData.filter(p => p.type === selectedCat || p.type === 'Fullstack');
        }
        return projectsData.filter(p => p.type === selectedCat);
    }, [selectedCat]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = useMemo(() => {
        const start = (page - 1) * perPage;
        return filtered.slice(start, start + perPage);
    }, [filtered, page]);

    return (
        <section id="projects" className="max-w-7xl mx-auto my-12 px-4 mt-20 scroll-mt-[100px]">
            <div className="text-center mb-6">
                <FadeInSection direction="up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Projects
                    </h2>
                </FadeInSection>
                <FadeInSection direction="up">
                    <p className="mt-3 font-medium text-lg text-gray-700 dark:text-gray-300">
                        A selection of web projects I have built while learning, practicing, and turning ideas into working products.
                    </p>
                </FadeInSection>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => { setSelectedCat(cat); setPage(1); }}
                        className={`px-4 py-2 rounded-lg font-medium transition
                            ${selectedCat === cat
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                                : 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-900 dark:border dark:border-white hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((p, idx) => (
                    <SlideInSection
                        key={p.id}
                        direction={idx % 2 === 0 ? "left" : "right"}
                    >
                        <ProjectCard {...p} />
                    </SlideInSection>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-10">
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-3 py-1 bg-gray-200 text-gray-900 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setPage(idx + 1)}
                            className={`px-3 py-1 rounded
                                ${page === idx + 1
                                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white'
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-3 py-1 bg-gray-200 text-gray-900 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
