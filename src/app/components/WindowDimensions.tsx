"use client";
import { useState, useEffect } from 'react';

type windowDimensions = {
  width: number | undefined;
  height: number | undefined;
}

export default function getWindowDimensions() {
  const windowExists = typeof window !== 'undefined';
  const [windowDimensions, setWindowDimensions] = useState<windowDimensions>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      console.log("resize");
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowExists])

  return windowDimensions;
}