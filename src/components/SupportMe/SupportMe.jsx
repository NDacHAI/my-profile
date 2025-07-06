const SupportMe = () => {
    return (
        <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Support My Work</h3>
            <p className="text-gray-700 mb-6">
                If you find this project helpful, please consider supporting me through the options below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://www.buymeacoffee.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 text-gray-800 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-300"
                >
                    ☕ Buy Me a Coffee
                </a>
                <a
                    href="https://www.paypal.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-300"
                >
                    💵 Donate Me
                </a>
            </div>
            <p className="text-xl text-gray-800 mt-6">
                Thank You !
            </p>
        </div>
    );
};

export default SupportMe;
