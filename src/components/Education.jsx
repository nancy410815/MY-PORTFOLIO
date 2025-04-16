import React from 'react';
import styles from '../app.module.scss'; // Assuming you will create a corresponding SCSS module

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationTimeline}>
        <div className={styles.educationItem}>
          <h3>Software Development and Networking Engineering</h3>
          <h4>Sheridan College</h4>
          <p className={styles.period}>2018 - 2021</p>
          <p>Sheridan Student Union/ International Student Community</p>
        </div>
        <div className={styles.educationItem}>
          <h3>Bachelor of Science in International Business</h3>
          <h4>National Taipei University of Business</h4>
          <p className={styles.period}>2009 - 2013</p>
          <p>Internship in the department of insurance at Fubon bank for four months and passed Personal insurance representative exam to obtain a certificate</p>
        </div>
      </div>
    </section>
  );
};

export default Education;