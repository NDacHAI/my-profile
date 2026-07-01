import { useState } from "react";
import QrPopUp from "../QrPopUp/QrPopUp";

const SupportMe = () => {
    const [qrPopup, setQrPopup] = useState(false);

    return (
        <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Support My Work
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you find my work helpful, you can support me through the options below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    className="
                        border border-gray-900 dark:border-white
                        text-gray-900 dark:text-white
                        px-4 py-2 rounded-lg font-medium
                        hover:-translate-y-1 transition-all duration-300 cursor-pointer
                    "
                    onClick={() => setQrPopup(true)}
                >
                    Buy Me a Coffee
                </button>
                <button
                    className="
                        bg-gray-900 dark:bg-white
                        text-white dark:text-gray-900
                        px-4 py-2 rounded-lg font-medium
                        hover:-translate-y-1 transition-all duration-300 cursor-pointer
                    "
                    onClick={() => setQrPopup(true)}
                >
                    Donate Me
                </button>
            </div>
            <p className="text-xl text-gray-900 dark:text-white mt-6">
                Thank you!
            </p>

            <QrPopUp
                open={qrPopup}
                onClose={() => setQrPopup(false)}
            />
        </div>
    );
};

export default SupportMe;
