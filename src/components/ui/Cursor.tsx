import React, { useEffect, useState, useCallback } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Check if cursor is over clickable element
    const target = e.target as HTMLElement;
    const isClickable = 
      target.tagName === 'BUTTON' || 
      target.tagName === 'A' ||
      target.closest('button') || 
      target.closest('a') ||
      getComputedStyle(target).cursor === 'pointer';
    
    setIsPointer(isClickable);
  }, []);

  useEffect(() => {
    // Check if we're on a device that likely has a mouse
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleMouseMove]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isPointer ? '50px' : '40px',
          height: isPointer ? '50px' : '40px',
          opacity: isClicking ? 0.5 : 1,
          borderColor: isPointer ? 'rgba(7, 102, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      />
    </>
  );
};

export default Cursor;