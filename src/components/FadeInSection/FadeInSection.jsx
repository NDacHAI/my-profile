import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children, direction = "up" }) => {
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
        up: "translate-y-24",
        down: "-translate-y-24",
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

export default FadeInSection;
