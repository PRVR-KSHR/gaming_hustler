import React, { useEffect, useRef } from "react";
import Scrollbar from 'smooth-scrollbar';
import OverScrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Navbar from '../HomeComponent/Navbar'; // Import your Navbar component

const Scroll = () => {
    const progressRef = useRef(null); 

    useEffect(() => {
        Scrollbar.use(OverScrollPlugin);
        const scrollbar = Scrollbar.init(document.body, {
            damping: 0.07,
            plugins: {
                OverScroll: {
                    enable: true,
                    effect: 'bounce',
                    damping: 0.15,
                    maxOverscroll: 150
                }
            }
        });

        // Update progress bar on scroll
        scrollbar.addListener(({ offset }) => {
            const progressBar = progressRef.current;
            if (progressBar) {
                const progress = Math.min((offset.y / scrollbar.limit.y) * 100, 100);
                progressBar.style.height = `${progress}%`;
            }
        });

        // Scroll to top function
        const scrollToTop = () => {
            scrollbar.scrollTo(0, 0, 300); // Smooth scroll to the top
        };

        // Add click event listener to progress bar container to scroll to top
        progressRef.current.addEventListener('click', scrollToTop);

        return () => {
            if (Scrollbar) {
                Scrollbar.destroy(document.body);
                progressRef.current.removeEventListener('click', scrollToTop);
            }
        };
    }, []);

    return (
        <div>
            <div className="progress-bar-container" ref={progressRef}></div>
        </div>
    );
};

export default Scroll;
