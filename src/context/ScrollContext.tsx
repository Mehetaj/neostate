import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextType {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: 'down',
  scrollToSection: () => {},
  activeSection: 'hero',
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [activeSection, setActiveSection] = useState('hero');
  const [sections, setSections] = useState<Array<{ id: string; top: number; bottom: number }>>([]);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
      
      // Find active section
      const currentSection = sections.find(
        section => currentScrollY >= section.top && currentScrollY < section.bottom
      );
      
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Get all sections
    const getSections = () => {
      const sectionElements = document.querySelectorAll('[data-section]');
      const sectionsData = Array.from(sectionElements).map(section => {
        const { top, height } = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        return {
          id: section.getAttribute('data-section') || '',
          top: top + scrollTop - 100, // Offset for earlier activation
          bottom: top + height + scrollTop,
        };
      });
      
      setSections(sectionsData);
    };

    // Initialize
    getSections();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', getSections);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', getSections);
    };
  }, [lastScrollY, activeSection, sections]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollY, scrollDirection, scrollToSection, activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};