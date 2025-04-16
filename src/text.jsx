<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Nancy Chen</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.2/babel.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
    }

    .portfolio {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Header Styles */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      text-align: center;
      padding: 20px 0;
      background-color: rgba(255, 255, 255, 0.95);
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
      backdrop-filter: blur(5px);
    }

    header h1 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 5px;
    }

    header .title {
      font-size: 1.2rem;
      color: #718096;
      margin-bottom: 20px;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
    }

    nav a {
      background: none;
      border: none;
      padding: 10px 20px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: #4a5568;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 5px;
      text-decoration: none;
    }

    nav a:hover {
      background-color: #e2e8f0;
      color: #2d3748;
    }

    nav a.active {
      background-color: #3182ce;
      color: white;
    }

    /* Section Styles */
    section {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 60px 30px;
      margin-bottom: 30px;
      scroll-margin-top: 150px; /* Adds margin for smooth scrolling */
    }

    section h2 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e2e8f0;
    }

    /* About Section */
    .about-content {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
    }

    .profile-image {
      flex: 1;
      min-width: 250px;
    }

    .image-placeholder {
      width: 100%;
      height: 300px;
      background-color: #e2e8f0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #718096;
    }

    .bio {
      flex: 2;
      min-width: 300px;
    }

    .bio p {
      margin-bottom: 15px;
    }

    .bio h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 1.3rem;
      color: #4a5568;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      list-style: none;
    }

    .skills-list li {
      background-color: #e2e8f0;
      color: #4a5568;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    /* Experience Section */
    .timeline-item {
      position: relative;
      padding-left: 30px;
      margin-bottom: 30px;
      border-left: 2px solid #4299e1;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-content {
      padding: 20px;
      background-color: #f7fafc;
      border-radius: 8px;
    }

    .timeline-content h3 {
      font-size: 1.2rem;
      color: #2b6cb0;
      margin-bottom: 5px;
    }

    .timeline-content h4 {
      font-size: 1rem;
      color: #4a5568;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .period {
      font-size: 0.9rem;
      color: #718096;
      margin-bottom: 10px;
    }

    /* Education Section */
    .education-item {
      margin-bottom: 25px;
      padding: 20px;
      background-color: #f7fafc;
      border-radius: 8px;
    }

    .education-item:last-child {
      margin-bottom: 40px;
    }

    .education-item h3 {
      font-size: 1.2rem;
      color: #2b6cb0;
      margin-bottom: 5px;
    }

    .education-item h4 {
      font-size: 1rem;
      color: #4a5568;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .certifications {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .certification-item {
      padding: 15px;
      background-color: #f7fafc;
      border-radius: 8px;
    }

    .certification-item h3 {
      font-size: 1.1rem;
      color: #2b6cb0;
      margin-bottom: 5px;
    }

    .certification-item p {
      font-size: 0.9rem;
      color: #718096;
    }

    /* Contact Section */
    .contact-content {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }

    .contact-info {
      flex: 1;
      min-width: 250px;
    }

    .contact-item {
      margin-bottom: 20px;
    }

    .contact-item h3 {
      font-size: 1.1rem;
      color: #4a5568;
      margin-bottom: 5px;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 30px;
    }

    .social-links a {
      color: #3182ce;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #2c5282;
    }

    .contact-form {
      flex: 2;
      min-width: 300px;
    }

    .contact-form h3 {
      font-size: 1.3rem;
      color: #4a5568;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #4a5568;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3182ce;
    }

    .submit-btn {
      background-color: #3182ce;
      color: white;
      border: none;
      padding: 12px 25px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .submit-btn:hover {
      background-color: #2c5282;
    }

    .success-message {
      background-color: #c6f6d5;
      padding: 15px;
      border-radius: 5px;
      color: #2f855a;
    }

    /* Footer Styles */
    footer {
      text-align: center;
      padding: 20px 0;
      color: #718096;
      font-size: 0.9rem;
    }

    /* Scroll to top button */
    .scroll-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background-color: #3182ce;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border: none;
    }

    .scroll-top.visible {
      opacity: 1;
    }

    .scroll-top:hover {
      background-color: #2c5282;
    }

    /* Responsive Styles */
    @media screen and (max-width: 768px) {
      nav {
        flex-wrap: wrap;
      }
      
      .about-content,
      .contact-content {
        flex-direction: column;
      }
      
      .profile-image {
        margin-bottom: 20px;
      }
      
      .certifications {
        grid-template-columns: 1fr;
      }
      
      section {
        scroll-margin-top: 180px;
      }
    }
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    function Portfolio() {
      const [activeSection, setActiveSection] = React.useState('about');
      const [showScrollTop, setShowScrollTop] = React.useState(false);
      
      // Handle scroll to update active section and scroll button visibility
      React.useEffect(() => {
        const handleScroll = () => {
          // Show/hide scroll to top button
          if (window.scrollY > 300) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
          
          // Update active section based on scroll position
          const sections = document.querySelectorAll('section');
          let current = '';
          
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 180) {
              current = section.getAttribute('id');
            }
          });
          
          if (current && current !== activeSection) {
            setActiveSection(current);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [activeSection]);
      
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      return (
        <div className="portfolio">
          <Header activeSection={activeSection} />
          
          <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="profile-image">
                <div className="image-placeholder">Profile Image</div>
              </div>
              <div className="bio">
                <p>Hello! I'm Nancy Chen, a passionate Software Engineers with 5 years of experience building modern web applications. I specialize in React.js and have a strong foundation in HTML, CSS, and JavaScript.</p>
                <p>My approach to development focuses on creating intuitive, accessible, and responsive user interfaces that deliver exceptional user experiences.</p>
                <h3>Skills</h3>
                <ul className="skills-list">
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                  <li>UI/UX Principles</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section id="experience">
            <h2>Work Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Senior Software Engineers</h3>
                  <h4>Tech Solutions Inc.</h4>
                  <p className="period">Jan 2021 - Present</p>
                  <p>Lead the front-end development team in building responsive web applications. Implemented component libraries that improved development efficiency by 40%. Collaborated with UX designers to create intuitive user interfaces.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Software Engineers</h3>
                  <h4>Digital Innovations</h4>
                  <p className="period">Mar 2018 - Dec 2020</p>
                  <p>Developed and maintained client websites using React.js. Optimized web performance resulting in a 30% improvement in load times. Mentored junior developers and conducted code reviews.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Junior Web Developer</h3>
                  <h4>WebCraft Studio</h4>
                  <p className="period">Jun 2016 - Feb 2018</p>
                  <p>Built responsive websites for various clients. Collaborated with the design team to implement pixel-perfect designs. Participated in daily stand-ups and sprint planning.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="education">
            <h2>Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <h3>Master of Science in Computer Science</h3>
                <h4>Tech University</h4>
                <p className="period">2014 - 2016</p>
                <p>Focused on web technologies and user interface design. Graduated with honors.</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Science in Information Technology</h3>
                <h4>State University</h4>
                <p className="period">2010 - 2014</p>
                <p>Coursework included programming fundamentals, data structures, and web development.</p>
              </div>
            </div>
            
            <h2>Certifications</h2>
            <div className="certifications">
              <div className="certification-item">
                <h3>Advanced React Patterns</h3>
                <p>Frontend Masters • 2022</p>
              </div>
              <div className="certification-item">
                <h3>Web Accessibility</h3>
                <p>Udacity • 2021</p>
              </div>
              <div className="certification-item">
                <h3>JavaScript - The Complete Guide</h3>
                <p>Coursera • 2020</p>
              </div>
            </div>
          </section>
          
          <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>john.doe@example.com</p>
                </div>
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
                <div className="contact-item">
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
                <div className="social-links">
                  <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>Twitter</a>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </section>
          
          <Footer />
          
          <button 
            className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      );
    }

    function Header({ activeSection }) {
      return (
        <header>
          <h1>Nancy Chen</h1>
          <p className="title">Software Engineers</p>
          <nav>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </nav>
        </header>
      );
    }

    function ContactForm() {
      const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
      });
      
      const [submitted, setSubmitted] = React.useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        // Reset submitted status after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      };

      return (
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          {submitted ? (
            <div className="success-message">
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      );
    }

    function Footer() {
      return (
        <footer>
          <p>&copy; {new Date().getFullYear()} Nancy Chen. All rights reserved.</p>
        </footer>
      );
    }

    // Render the App
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Portfolio />);
  </script>
</body>
</html>