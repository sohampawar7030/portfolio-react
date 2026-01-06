import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Samruddhi Kangude</h1>
        <br /><br />
        <h3>
          And I'm a{' '}
          <span className="multiple-text">
            <TypeAnimation
              sequence={[
                'Java Developer',
                1000,
                'Cloud Engineer',
                1000,
                'Database Administrator',
                1000,
                'Software Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p>
          <b>
            <i>
              <p>Welcome To My Portfolio......</p>
            </i>
          </b>
        </p>
        <p>
          <br />
          I am a developer with skills in Java, software development, databases, and cloud technologies. I enjoy building
          useful and scalable applications. I like learning new tools and working with teams to create good solutions.
          Thank you for visiting my portfolio—I look forward to working together.
        </p>
        <div className="social-media">
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
        <a href="/assets/Portfolio_Resume.pdf" className="btn" download>
          Download My Resume
        </a>
      </div>

      <div className="home-img">
        <img src="/images/profile.png" alt="Samruddhi Kangude Profile Picture" />
      </div>
    </section>
  );
}

export default Home;
