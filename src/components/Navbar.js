import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'; // Import your CSS file

const sections = [
  'home-section',
  'about-section',
  'projects-section',
  // 'experience-section',
  // 'contact-section'
];

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('');
  useEffect(() => {
    setCurrentSection('home-section'); 
    const handleScroll = () => {
      const sectionInView = sections.find((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const padding = window.innerHeight/1.5; // Adjust as needed
          return rect.top >= -padding && rect.bottom <= window.innerHeight + padding;
        }
        return false;
      });
  
      if (sectionInView) {
        setCurrentSection(sectionInView);
      } else {
        setCurrentSection(''); // Reset if no section is in view
      }
    };
  
    // Remove this line:
    // setCurrentSection('about-section')
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []); // Empty dependency array to run only once

  const handleScrollToSection = (event) => {
    const index = event.target.href.indexOf("#");
    event.preventDefault()
    const scrollSection = document.getElementById(event.target.href.substring(index + 1));
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <nav className={styles.nav}>
      <a href="#home-section">
        <div className={styles.sign}></div>
      </a>
      <div className={styles.navLink}>
      <span className={`${currentSection === 'home-section' ? styles.active : ''}`}>
          <a href="#home-section" onClick={handleScrollToSection}>
            HOME
          </a>
        </span>
        <span className={`${currentSection === 'about-section' ? styles.active : ''}`}>
          <a href="#about-section" onClick={handleScrollToSection}>
            ABOUT
          </a>
        </span>
        {/* <span className={`${currentSection === 'skills-section' ? styles.active : ''}`}>
          <a href="#skills-section">
            SKILLS
          </a>
        </span> */}
        <span style={{paddingRight: "20px"}} className={`${currentSection === 'projects-section' ? styles.active : ''}`}>
          <a href="#projects-section" onClick={handleScrollToSection}>
            PROJECTS
          </a>
        </span>
        {/* <span className={`${currentSection === 'experience-section' ? styles.active : ''}`}>
          <a href="#experience-section" onClick={handleScrollToSection}>
            EXPERIENCE
          </a>
        </span>
        <span style={{paddingRight: "20px"}} className={`${currentSection === 'contact-section' ? styles.active : ''}`}>
          <a href="#contact-section" onClick={handleScrollToSection}>
            CONTACT
          </a>
        </span> */}
      </div>
    </nav>
  );
};


export default Navbar;
