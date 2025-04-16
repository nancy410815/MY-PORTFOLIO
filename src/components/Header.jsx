import styles from '../app.module.scss'; // Adjust the path based on the location of App.module.scss

function Header({ activeSection }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nancy Chen</h1>
      <p className={styles.subtitle}>Software Engineer</p>
      <nav className={styles.nav}>
        <a 
          href="#about" 
          className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
        >
          About
        </a>
        <a 
          href="#experience" 
          className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
        >
          Experience
        </a>
        <a 
          href="#education" 
          className={`${styles.navLink} ${activeSection === 'education' ? styles.active : ''}`}
        >
          Education
        </a>
        <a 
          href="#contact" 
          className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;