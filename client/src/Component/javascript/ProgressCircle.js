import React, { useState, useEffect } from 'react';

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      const clampedProgress = Math.min(Math.max(scrolled, 0), 100);
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="progress-container" onClick={scrollToTop}>
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ transform: `scaleY(${progress / 100})` }} />
    </div>
    <div className="arrow-top">↑</div> {/* Arrow inside the circle container */}
  </div>
  );
}

export default ProgressCircle;
