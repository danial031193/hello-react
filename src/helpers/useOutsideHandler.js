import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref(s)
 */
const useOutsideHandler = (ref, callback) => {
  useEffect(() => {
    const refs = Array.isArray(ref) ? ref : [ref];
    const handleClickOutside = (event) => {
      for (const r of refs) {
        if (r?.current?.contains?.(event.target)) {
          return;
        }
      }

      // Click outside passed refs
      callback(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [callback, ref]);
};

export default useOutsideHandler;
