import { useLayoutEffect, useState } from 'react';

interface Size {
  width: number
  height: number
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth ?? 0,
        height: window.innerHeight ?? 0,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
