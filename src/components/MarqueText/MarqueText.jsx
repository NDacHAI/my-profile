'use client';
import { useState, useEffect } from 'react';

const texts = [
    "🚀 I am a Web Developer",
    "🚀 I love building amazing websites",
    "🚀 Contact me anytime"
];

export default function MarqueeText() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    const chars = Array.from(texts[index]);

    useEffect(() => {
        if (!deleting && subIndex === chars.length) {
            const timeout = setTimeout(() => setDeleting(true), 1000);
            return () => clearTimeout(timeout);
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) =>
                deleting ? prev - 1 : prev + 1
            );
        }, deleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, chars.length]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setBlink((v) => !v);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <div className="text-2xl font-medium py-4 text-gray-900 dark:text-white">
            {chars.slice(0, subIndex).join('')}
            <span className="inline-block w-1">{blink ? '|' : ' '}</span>
        </div>
    );
}
