import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ id, start, end, duration, startOnScroll }) => {
  const [current, setCurrent] = useState(start);
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const step = Math.abs(Math.floor((duration / range) * increment));
  const counterRef = useRef(null);

  useEffect(() => {
    const startCounter = () => {
      const timer = setInterval(() => {
        setCurrent(prev => {
          const nextValue = prev + increment;
          return end > start ? Math.min(nextValue, end) : Math.max(nextValue, end);
        });
      }, step);
  
      return () => clearInterval(timer);
    };
  
    if (startOnScroll) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(counterRef.current);
          }
        });
      }, options);
  
      observer.observe(counterRef.current);
  
      return () => observer.disconnect();
    } else {
      startCounter();
    }
  }, [start, startOnScroll, end, increment, step]);
  

  return <span ref={counterRef} className={id}>{current}</span>;
};

export default Counter;
