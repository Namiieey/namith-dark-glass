
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    type: 'circle' | 'square' | 'triangle';
    left: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          left: Math.random() * 100,
          delay: Math.random() * 10,
        });
      }
      setElements(newElements);
    };

    generateElements();
    const interval = setInterval(generateElements, 20000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-element floating-${element.type}`}
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      {/* Static floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/20 rounded-full floating-micro"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full floating-delayed"></div>
      <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-blue-400/20 rounded-full floating-slow"></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-300/25 rounded-full floating-reverse"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/20 rounded-full floating"></div>
    </div>
  );
};

export default FloatingElements;
