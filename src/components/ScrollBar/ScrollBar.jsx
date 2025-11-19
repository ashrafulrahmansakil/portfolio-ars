import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(pct);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed left-0 right-0 h-1 z-30 top-[4rem] bg-transparent">
            <div style={{ width: `${progress}%`, height: 4, background: 'linear-gradient(90deg,#06b6d4,#7c3aed)' }} />
        </div>
    ); 
}
