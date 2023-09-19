import React, { useEffect, useRef, useState } from 'react';
import './SlideInOnScroll.css';

const SlideInOnScroll = ({ children, direction }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this threshold as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element is in the viewport, set isVisible to true
          setIsVisible(true);
        } else {
          // When the element is out of the viewport, set isVisible to false
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'slide-in-left';
      case 'top':
        return 'slide-in-top';
      case 'bottom':
        return 'slide-in-bottom';
      default:
        return 'fade-in';
    }
  };

  return (
    <div ref={elementRef} className={`animated ${getAnimationClass()} ${isVisible ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInOnScroll;
