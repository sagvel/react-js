import React, { useEffect, useState } from 'react';

export default function Dimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const handleResize = event => {
    const { innerWidth, innerHeight } = event.target;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
  };
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const { width, height } = dimensions;
  return (
    <div className="dimensions">
      {width}px - {height}px
    </div>
  );
}
