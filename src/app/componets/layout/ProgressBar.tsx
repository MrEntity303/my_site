// components/ProgressBar.js
"use client";
import { useState, useEffect } from 'react';
import { CSSProperties } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.progressContainer}>
      <div
        style={{
          ...styles.progressBar,
          width: `${scrollPercentage}%`,
        }}
      />
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  progressContainer: {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    width: '100%',
    height: '4px',
    backgroundColor: 'customGray', // Puoi cambiare il colore a piacere
    zIndex: 1000,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'sky-400', // Puoi cambiare il colore a piacere
    transition: 'width 0.1s ease-out',
  },
};

export default ProgressBar;