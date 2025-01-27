import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;

    // Set up GSAP scroll animation
    gsap.to(scrollContent, {
      x: -scrollContent.scrollWidth + container.offsetWidth, // Scroll to the left
      ease: "none", // Linear scrolling
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // smooth scrolling
        pin: true, // Pin the container while scrolling
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height:'100vh', overflow: 'hidden', position: 'relative' }}
    >
      <div
        ref={scrollContentRef}
        style={{
          display: 'flex',
          width: 'max-content',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Add content for horizontal scroll */}
        <div style={{ width: '300px', height: '300px', background: 'red', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'blue', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'green', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'yellow', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'red', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'blue', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'green', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'yellow', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'red', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'blue', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'green', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'yellow', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'red', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'blue', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'green', marginRight: '20px' }}></div>
        <div style={{ width: '300px', height: '300px', background: 'yellow', marginRight: '20px' }}></div>
      </div>
    </div>
  );
};

export default HorizontalScroll;