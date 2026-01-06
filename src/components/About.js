import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/about.png" alt="About Samruddhi Kangude" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Java Developer | Database Administrator | Software Developer | Cloud Engineer</h3>
        <p>
          I am a dedicated and adaptable developer with strong skills in Java, software development, database management,
          and cloud technologies. I focus on building reliable and scalable applications, working on both front-end and
          back-end development. I enjoy solving real-world problems and delivering clean, efficient solutions that improve
          user experience.
        </p>
      </div>
    </section>
  );
}

export default About;
