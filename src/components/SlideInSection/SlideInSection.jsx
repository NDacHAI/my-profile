import { useEffect, useRef, useState } from "react";

const SlideInSection = ({ children, direction = "left" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const directionClasses = {
        left: "-translate-x-24",
        right: "translate-x-24",
    };

    return (
        <div
            ref={ref}
            className={`inline-block w-full text-center transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${directionClasses[direction]}`}
        `}
        >
            {children}
        </div>
    );

};

export default SlideInSection;
