import React from 'react';
import styles from '../app.module.scss';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.heading}>Work Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Software Developer</h3>
            <h4>STEMCELL Technologies</h4>
            <p className={styles.period}>Feb 2022 - Present</p>
            {/* <p> */}
            <ul>
              <li>Developed and maintained multiple web applications using OutSystems, ensuring scalable and efficient solutions.</li>
              <li>Designed and integrated various endpoints, including exchange rate APIs, Amazon EFS, and SAP, through MuleSoft, optimizing data flow and system connectivity.</li>
              <li>Led the migration of applications from OutSystems (low-code) to React, enhancing performance, flexibility, and maintainability while ensuring a seamless transition.</li>
              <li>Built and managed modern web applications with React, utilizing AWS Amplify to deliver secure, cloud-based solutions with seamless AWS service integration.</li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Developer</h3>
            <h4>RBC</h4>
            <p className={styles.period}>May 2021 - Aug 2021</p>
           
            <ul>
              <li>Developed and bug-fixed Jenkins pipelines, maintaining continuous integration (CI) and continuous deployment (CD) processes.</li>
              <li>Deployed SonarQube in OpenShift by building Dockerfiles and YAML files to configure Toad Database, CPU size, and documentation.</li>
              <li>Developed JUnit tests for REST API and GraphQL projects to achieve the team's target coverage.</li>
              <li>Developed new features and fixed bugs using the Spring Framework.</li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Application Developer</h3>
            <h4>CIBC</h4>
            <p className={styles.period}>Sep 2020 - Dec 2020</p>
            <ul>
              <li>Built responsive websites for various clients.</li>
              <li>Collaborated with the design team to implement pixel-perfect designs.</li>
              <li>Participated in daily stand-ups and sprint planning.</li>
            </ul> </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;