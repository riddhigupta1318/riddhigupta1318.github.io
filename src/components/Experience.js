import React, { useEffect, useState, useRef } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const expRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Experience is in View');
          const timer = setTimeout(() => setVisible(true), 1000); // Set visibility after 1 second
          observer.unobserve(expRef.current); // Stop observing once in view
          return () => clearTimeout(timer); // Clear timer if component unmounts
        }
      });
    });

    if (expRef.current) {
      observer.observe(expRef.current); // Start observing when the component is mounted
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current); // Cleanup: stop observing when the component is unmounted
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section id="experience-section" ref={expRef} className={styles.experience}>
      <div className={styles.heading}>EXPERIENCE</div>
      <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.chart}>
              <div className={styles.bar}>
                <div className={styles.circle}></div>
                <div className={styles.pipe}></div>
                <div className={styles.block}></div>
              </div>
              <div className={styles.bar}>
                <div className={styles.circle}></div>
                <div className={styles.pipe}></div>
                <div className={styles.block}></div>
              </div>
              <div className={styles.bar}>
                <div className={styles.circle}></div>
                <div className={styles.pipe}></div>
                <div className={styles.block}></div>
              </div>
              <div className={styles.bar}>
                <div className={styles.circle}></div>
                <div className={styles.pipe}></div>
                <div className={styles.block}></div>
              </div>
            </div>
          </div>
    
      </div>
    
      
      {visible && (
      <>
        
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
          <div className={styles.rectangle3}></div>
          <div className={styles.rectangle4}></div>
          <div className={styles.box}></div>
      </>
      )}
    </section>
  );
};

export default Experience;
