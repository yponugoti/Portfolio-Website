import React from 'react';
import styles from './Projects.module.css';
import autonomouCarPicture from '../../assets/autonomousCar.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
              url="https://github.com/yponugoti/spyn"
              img={autonomouCarPicture}
              title="Project Spyn"
              description="Autonomous Car Algorithm"
            />
            <ProjectCard 
              url="https://github.com/yponugoti/spyn"
              img={autonomouCarPicture}
              title="Project Spyn 2"
              description="Autonomous Car Algorithm 2"
            />
        </div>
    </section>
  );
}

export default Projects;