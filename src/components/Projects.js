

import React from 'react';
import styles from './Projects.module.css';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const projects = [
  { name: 'DRY BEANS CLASSIFICATION',
    image: '/images/projects/drybeans.png',
    description: 'Utilized computer vision techniques to classify over 13,000 samples of dry beans from 7 different species, facilitating the creation of a robust seed classification system for sustainable agricultural practices.',
    link: 'https://github.com/riddhigupta1318/Dry-Beans-Classification',
    live: '',
    /*technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},*/},
  { name: 'AGRICULTURE POLICY RECOMMENDATION',
    image: '/images/projects/agriculture.jpg',
    description: 'Generate agriculture policy based on remote sensing data, textual data and statistical data',
    link:'https://github.com/riddhigupta1318/Crop-Yield-Prediction',
    live: 'https://policyrecommendation-cloudera.streamlit.app/',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'HEART DISEASES ANALYSIS',
    image: '/images/projects/heart.jpeg',
    description: 'Optimized heart disease dataset preprocessing: removed irrelevant records, handled missing values, encoded variables, scaled features, and conducted feature selection. Showcased the result on Tableau.',
    link: 'https://github.com/riddhigupta1318/Heart-Diseases',},
  { name: 'REAL ESTATE ANALYSIS',
    image: '/images/projects/realestate.jpeg',
    description: 'Executed web scraping, conducted data cleaning and exploratory data analysis (EDA), including visualization creation.Pridected price for rental properties.',
    technology: ['Python', 'PyTorch', 'LSTM', 'Transformers']},
  { name: 'STOCK PREDICTION',
    image: '/images/projects/stockprediction.jpg',
    description: 'Extracted financial news tweets for BERT and integrating Prophet model for stock market univariate forecasting.',
    link: 'https://github.com/riddhigupta1318/Stock-Predication-',
    },
  { name: 'IMAGE CAPTIONING',
    image: '/images/projects/imagecaption.jpg',
    description: 'Generated the caption for the given imag, leveraging ML techniques',
    link: 'https://github.com/riddhigupta1318/Image-Classification',
    },
];

const Projects = () => {
  return (
    <section id="projects-section" className={styles.projects}>
      <div className={styles.heading}>PROJECTS</div>
      <div className={styles.projectalign}>
          {projects.map((project) => (
            <div key={project.name} className={styles.projectdiv}>
              <img src={project.image} className={styles.projectImage} alt={project.name}/>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectDescription}>{project.description}</span>
              <span className={styles.projectLink}>
                {/* {project.link && <a href={project.link}>Github</a>} */}
                <IconButton href={project.link} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                </IconButton>
                {project.live && 
                <IconButton href={project.live} target="_blank" rel="noopener noreferrer">
                <LiveTvIcon />
                </IconButton>}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;