import React, { useEffect, useState, useRef } from 'react';
import styles from './About.module.css'
import Skills from './Skills';


const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), 500); // Adjust delay as needed
          observer.unobserve(aboutRef.current);
          return () => clearTimeout(timer);
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <section id="about-section" ref={aboutRef} className={styles.about}>
      <div className={visible ? styles.aboutInfo: styles.noabout}>
        <div className = {styles.mydetails}>
          <img src="\images\about\profilepic.jpeg" alt="Riddhi Gupta" className={styles.aboutProfilePicture} />
          <div className={styles.bio}>
            <p className={styles.bioAbout}>ABOUT ME</p>
            <p>
            Welcome!
            I am Riddhi, a detail-oriented data enthusiast with a knack for unraveling complex datasets 
            and deriving actionable insights. Leveraging a blend of analytical skills and creativity, 
            I thrive in transforming raw data into compelling narratives that drive strategic decision-making. 
            My passion for continuous learning and problem-solving fuels my commitment to staying at the forefront 
            of emerging trends and technologies in the data analytics realm.
            </p>
            <p>
              {/* Add links to your social media profiles or portfolio websites */}
              My Hobbies:
              <a href="#about-section"> Hiking, Cooking, Wig Styling</a>
              {/* Add links to other platforms as needed */}
            </p>
          </div>
        </div>
        <div className = {styles.myskills}>
          <Skills/>
        </div>
      </div>
    </section>
  );
};

export default About;