import React from 'react';

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Samruddhi S. K. | All Rights Reserved</p>
        <div className="social-media footer-social">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samruddhikangude12@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/samruddhi-kangude7030" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/SamruddhiKangude" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="tel:+917218380003">
            <i className="bx bx-phone"></i>
          </a>
        </div>
      </div>

      <div className="footer-iconTap">
        <a href="#home" onClick={scrollToTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
