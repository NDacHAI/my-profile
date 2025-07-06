// src/components/Projects.jsx
import React, { useState, useMemo } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { faWallet, faBook } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
    {
        id: 1,
        title: 'Money Tracker',
        type: 'Fullstack',
        year: 2025,
        status: 'Completed',
        features: [
            'Supabase Auth + Database',
            'CRUD transaksi harian',
            'Statistik pengeluaran',
            'Dark mode UI',
        ],
        techStack: ['React', 'Supabase', 'Tailwind'],
        demoLink: 'https://demo.money-tracker.com',
        codeLink: 'https://github.com/yourname/money-tracker',
        icon: faWallet,
    },
    {
        id: 2,
        title: 'Blog Platform',
        type: 'Front End',
        year: 2024,
        status: 'Live',
        features: [
            'Markdown editor',
            'Responsive design',
            'SEO optimized',
            'SEO optimized',
        ],
        techStack: ['Next.js', 'Tailwind', 'Vercel'],
        demoLink: 'https://demo.blog-platform.com',
        codeLink: 'https://github.com/yourname/blog-platform',
        icon: faBook,
    },
];

const categories = ['All', 'Front End', 'Back End', 'Fullstack'];

const Projects = () => {
    const [selectedCat, setSelectedCat] = useState('All');
    const [page, setPage] = useState(1);
    const perPage = 6;

    const filtered = useMemo(() => {
        if (selectedCat === 'All') return projectsData;
        return projectsData.filter(p => p.type === selectedCat);
    }, [selectedCat]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = useMemo(() => {
        const start = (page - 1) * perPage;
        return filtered.slice(start, start + perPage);
    }, [filtered, page]);

    return (
        <section id="projects" className="max-w-7xl mx-auto my-12 px-4">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Projects
                </h2>
                <p className="mt-3 font-medium text-lg text-gray-700 dark:text-gray-300">
                    Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps connected with real-time databases.
                </p>
            </div>

            {/* Filter */}
            <div className="flex justify-center gap-4 mb-6">
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>

            {/* Pagination */}
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
        </section>
    );
};

export default Projects;

