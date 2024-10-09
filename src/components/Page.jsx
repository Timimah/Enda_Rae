import React from 'react'

export const Page = ({ children, zIndex, scrollPosition, pageHeight }) => {
    const translateY = Math.max(0, scrollPosition - (zIndex - 1) * pageHeight);
    const scale = 1 - Math.min(0.1, translateY / pageHeight);
  
    return (
      <div 
        className="page" 
        style={{ 
          zIndex,
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity: 1 - (translateY / pageHeight),
        }}
      >
        {children}
      </div>
    );
  };

