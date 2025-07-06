const PageNotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center bg-white dark:bg-gray-900">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                Sorry, the page you are looking for does not exist.
            </p>
        </section>
    );
};

export default PageNotFound;
