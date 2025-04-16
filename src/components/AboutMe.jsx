import React from 'react';
import styles from '../app.module.scss'; // Assuming you will create a corresponding SCSS module
import profileImage from '../assets/profile.jpg'; // Adjust the path to your image file

const AboutMe = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2 className={styles.heading}>About Me</h2>
            <div className={styles.aboutContent}>
                <div className={styles.profileImage}>
                    <img
                        src={profileImage}
                        alt="Nancy Chen"
                        className={styles.image}
                    />
                </div>
                <div className={styles.bio}>
                    <p>
                        I'm a Software Engineer with three years of experience at STEMCELL Technologies in Vancouver, BC, where I develop web applications and contribute to leading major initiatives. I helped drive the migration from OutSystems to React, significantly improving performance, and integrated essential APIs like SAP and Amazon EFS through MuleSoft. Using AWS Amplify, I build secure, cloud-based solutions.                    </p>
                    <p>
                        Previously, I worked with RBC, CIBC, and TD in Toronto, where I optimized Jenkins CI/CD pipelines, monitored applications with Splunk, and developed features using Python and Java. I'm passionate about delivering innovative, high-quality software solutions.                        </p>
                    <h3 className={styles.skillsHeading}>Skills</h3>
                    <ul className={styles.skillsList}>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>OutSystems</li>
                        <li>Java</li>
                        <li>C#.NET</li>
                        <li>MuleSoft</li>
                        <li>AWS</li>
                        <li>Jenkins</li>
                        <li>PostgreSQL</li>
                        <li>RESTful APIs</li>
                        <li>GitHub Actions</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;