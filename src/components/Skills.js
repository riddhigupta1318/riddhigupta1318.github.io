import React, { useState } from 'react';
import styles from './Skills.module.css';

const iconsSkills = [[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Airflow', path: '/images/skills/airflow.svg' },
  { name: 'Dbt', path: '/images/skills/dbt.png' },
  { name: 'PyCharm', path: '/images/skills/PyCHarm.svg' },
  { name: 'VS Code', path: '/images/skills/VScode1.png' },
  { name: 'Jenkins', path: '/images/skills/jenkins1.png' },
  { name: 'Jira', path: '/images/skills/jira.svg' },
  { name: 'Jupyter', path: '/images/skills/jupyter.svg' },
  { name: 'colab', path: '/images/skills/colab.svg' },
  { name: 'Anaconda', path: '/images/skills/Anaconda.svg' },
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Python', path: '/images/skills/python.png' },
  { name: 'R', path: '/images/skills/R.png' },
  { name: 'SQL', path: '/images/skills/mysql.png' },
  { name: 'React', path: '/images/skills/react.png' },
  { name: 'HTML5', path: '/images/skills/html.png' },
  { name: 'CSS', path: '/images/skills/css.png' },
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Celonis', path: '/images/skills/celonis.png' },
  { name: 'Siganivo', path: '/images/skills/siganvio.jpeg' },
  { name: 'Tableau', path: '/images/skills/tableau.png' },
  { name: 'PowerBI', path: '/images/skills/powerbi.jpeg' },
  { name: 'Quilkview', path: '/images/skills/quilkview.png' },
  { name: 'PySpark', path: '/images/skills/apache_spark.svg' },
  { name: 'TensorFlow', path: '/images/skills/tensorflow.svg' },
  { name: 'PyTorch', path: '/images/skills/PyTorch.svg' },
  { name: 'Numpy', path: '/images/skills/numpy.svg' },
  { name: 'Pandas', path: '/images/skills/pandas.svg' },
  { name: 'Scikit-Learn', path: '/images/skills/sk-learn.jpg' },
],
[
  // Replace these with your actual icon data (names, paths, etc.)
  { name: 'Oracle', path: '/images/skills/oracle.png' },
  { name: 'MySQL WB', path: '/images/skills/my.jpeg' },
  { name: 'PostgreSQL', path: '/images/skills/postgresql.svg' },
  { name: 'MongoDB', path: '/images/skills/mongodb-original.svg' },
  { name: 'Neo4j', path: '/images/skills/neo4j.png' },
  { name: 'SAP S/4 Hana', path: '/images/skills/SAPS4.png' },
  { name: 'SAP', path: '/images/skills/SAP.JPG' },
  { name: 'Postman', path: '/images/skills/postman.svg' },
  { name: 'GraphQL', path: '/images/skills/graphql.svg' },
]];


const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleLeftArrowClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex = (currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  const handleLinkClick = (tag) => {
    event.preventDefault();
    setCurrentIndex(tag);
  }


  return (
    <section id="skills-section" className={styles.skills}>
      <div className={styles.iconCarousel}>
        <button className={styles.arrow} onClick={handleLeftArrowClick} disabled={currentIndex === 0}>
          <img className={styles.arrowleft} src="/images/skills/left.svg" />
        </button>
        <div className={styles.iconContainer}>
          {iconsSkills[currentIndex].map((icon) => (
            <div key={icon.name}>
            <img src={icon.path} alt={icon.name} className={styles.icons} />
            <span>{icon.name}</span>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleRightArrowClick} disabled={currentIndex === 3}>
        <img className={styles.arrowright} src="/images/skills/right.svg" />
        </button>
      </div>
      <div className={styles.navigate}>
        <span className={`${currentIndex === 0 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(0)}>Developer Tools</a>
        </span>
        <span className={`${currentIndex === 1 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(1)}>Programming & Web Development</a>
        </span>
        <span className={`${currentIndex === 2 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(2)}>Data Analytics & Science</a>
        </span>
        <span className={`${currentIndex === 3 ? styles.active : ''}`}>
          <a href="#about-section" onClick={(event) => handleLinkClick(3)}>Database & API</a>
        </span>
      </div>
    </section>
  );
};

export default Skills;
