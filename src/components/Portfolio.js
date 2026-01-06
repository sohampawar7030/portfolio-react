import React from 'react';

function Portfolio() {
  const projects = [
    {
      image: '/images/port1.jpg',
      title: 'Wedner Event Management',
      description: 'Wedner Event Decoration Booking website.',
      link: 'https://wednereventsandproduction.vercel.app/'
    },
    {
      image: '/images/port2.jpg',
      title: 'Brain Tumor Detection Using Machine Learning',
      description: 'Using Machine Learning Algorithms and Computer vision.',
      link: 'https://github.com/SamruddhiKangude/B.E_AIML_Brain_Tumor_Detection_System_Using_Image_Processing'
    },
    {
      image: '/images/port3.jpg',
      title: 'Samruddhi Kangude Portfolio',
      description: 'My Own Portfolio Website',
      link: 'https://portfolio-website-2nli.vercel.app/'
    },
    {
      image: '/images/port4.jpg',
      title: 'Spendwise Application',
      description: 'In Java and springBoot framework.',
      link: 'https://github.com/SamruddhiKangude/Spendwise-Smart-Expense-Management'
    },
    {
      image: '/images/port5.jpg',
      title: 'Pending..',
      description: 'Under Development',
      link: '#'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;