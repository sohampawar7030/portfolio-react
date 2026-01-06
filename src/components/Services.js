import React from 'react';

function Services() {
  const services = [
    {
      icon: 'bx-code-alt',
      title: 'Web Developer',
      description: 'I have developed a website called Wedner Event Management for booking event decorations.'
    },
    {
      icon: 'bx-server',
      title: 'Database Administrator',
      description: 'I have designed multiple databases for personal websites and database-driven applications.'
    },
    {
      icon: 'bxl-java',
      title: 'Java Developer',
      description: 'I have built several projects using Java.'
    }
  ];

  const skillSections = [
    {
      title: 'Frontend',
      skills: [
        { icon: 'bxl-html5', name: 'HTML' },
        { icon: 'bxl-css3', name: 'CSS' },
        { icon: 'bxl-javascript', name: 'JavaScript' },
        { icon: 'bxl-react', name: 'React.js' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { icon: 'bx-server', name: 'Spring Boot' },
        { icon: 'bx-cog', name: 'Spring Framework' },
        { icon: 'bx-code-curly', name: 'JSP' },
        { icon: 'bx-code', name: 'Servlets' }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { icon: 'bx-code', name: 'C' },
        { icon: 'bxl-c-plus-plus', name: 'C++' },
        { icon: 'bxl-java', name: 'Java' },
        { icon: 'bxl-python', name: 'Python' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { icon: 'bx-data', name: 'SQL' },
        { icon: 'bx-server', name: 'Oracle' },
        { icon: 'bxs-cloud', name: 'DynamoDB' },
        { icon: 'bx-server', name: 'Amazon RDS' }
      ]
    },
    {
      title: 'DevOps',
      skills: [
        { icon: 'bxl-git', name: 'Git' },
        { icon: 'bxl-github', name: 'GitHub' },
        { icon: 'bxl-docker', name: 'Docker' },
        { icon: 'bx-git-merge', name: 'CI/CD' }
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { icon: 'bxl-windows', name: 'Windows' },
        { icon: 'bx-server', name: 'Linux' },
        { icon: 'bx-terminal', name: 'Bash/Shell' }
      ]
    },
    {
      title: 'AWS & Cloud',
      skills: [
        { icon: 'bxl-aws', name: 'AWS' },
        { icon: 'bxl-amazon', name: 'EC2' },
        { icon: 'bx-cloud-upload', name: 'S3' },
        { icon: 'bx-cloud', name: 'Lambda' },
        { icon: 'bx-shield', name: 'IAM' }
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      {/* Services Boxes */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="services-box" key={index}>
            <i className={`bx ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-icons">
        {skillSections.map((section, index) => (
          <div className="skills-section" key={index}>
            <h3 className="section-title">{section.title}</h3>
            <div className="skills-section-icons">
              {section.skills.map((skill, idx) => (
                <i className={`bx ${skill.icon}`} title={skill.name} key={idx}></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
