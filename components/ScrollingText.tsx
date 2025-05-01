import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScrollingText() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = document.querySelector('.marquee');
      const marqueeWidth = marquee.scrollWidth;

      gsap.fromTo(
        '.marquee',
        { x: 0 },
        {
          x: `-${marqueeWidth}px`,
          duration: marqueeWidth / 50, // 50px per second speed
          ease: 'linear',
          repeat: -1,
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div className="overflow-hidden w-screen" ref={containerRef}>
      <div className="flex whitespace-nowrap marquee">
        {/* First copy */}
        {Array.from({ length: 3 }).map((_, i) => (
          <React.Fragment key={`group1-${i}`}>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
          </React.Fragment>
        ))}
        {/* Second copy for seamless loop */}
        {Array.from({ length: 3 }).map((_, i) => (
          <React.Fragment key={`group2-${i}`}>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
            <span className="mr-10">FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE | FREE SHIPPING ON $75 OR MORE |</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}