import { useEffect, RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (!ref.current) return;
        
        const section = ref.current.parentElement;
        if (!section) return;
        
        const scrollTop = window.scrollY;
        const parallaxOffset = section.offsetTop;
        const parallaxEffect = (parallaxOffset - scrollTop) * speed;
        
        ref.current.style.transform = `translate(-50%, -50%) translateY(${parallaxEffect}px)`;
      });
    };
    
    // Initial position
    handleScroll();
    
    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [ref, speed]);
};
