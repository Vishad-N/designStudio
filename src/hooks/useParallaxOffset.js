import { useEffect, useRef } from 'react';

export function useParallaxOffset() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const updateOffset = () => {
      if (ref.current) {
        let el = ref.current;
        let offset = 0;
        while(el) {
          offset += el.offsetTop;
          el = el.offsetParent;
        }
        ref.current.style.setProperty('--offset', offset);
      }
    };
    
    const timeout = setTimeout(updateOffset, 100);
    window.addEventListener('resize', updateOffset);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return ref;
}
