import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import styles from '../App.module.scss';

const Contact = () => {
  const contactItems = [
    { icon: <FaEnvelope />, title: 'Email', value: 'nancy410815@hotmail.com', link: 'mailto:nancy410815@hotmail.com' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Vancouver, BC' },
    { icon: <FaLinkedin />, title: 'LinkedIn', value: 'LinkedIn', link: 'https://www.linkedin.com/in/hunghan-chen-70710b8b/' },
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          {contactItems.map((item, index) => (
            <div key={index} className={styles.contactItem}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.title === 'LinkedIn' ? '_blank' : '_self'}
                    rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className={styles.contactLink}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className={styles.contactValue}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;