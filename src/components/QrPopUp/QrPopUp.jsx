const QrPopUp = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="p-4 rounded-xl relative"
                onClick={(e) => e.stopPropagation()} // chặn đóng khi bấm vào trong
            >
                <img
                    src="/qr.jpg"
                    alt="QR Code"
                    className="w-64 h-64 object-contain"
                />

            </div>
        </div>
    );
};

export default QrPopUp;
