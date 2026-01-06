import React from 'react';

function Certificates() {
  const certificates = [
    {
      image: '/images/cert1.jpeg',
      title: 'Data Structure and Algorithm',
      issuer: 'Infosys Springboard'
    },
    {
      image: '/images/cert2.jpeg',
      title: 'Cloud Computing',
      issuer: 'IBM Coursera'
    },
    {
      image: '/images/cert3.jpeg',
      title: 'HTML, CSS, JS',
      issuer: 'IBM Coursera'
    },
    {
      image: '/images/cert4.jpeg',
      title: 'SQL Introduction',
      issuer: 'Skillup Certificate'
    },
    {
      image: '/images/cert5.jpeg',
      title: 'Java Advanced',
      issuer: 'Project & Certification'
    },
    {
      image: '/images/cert6.jpeg',
      title: 'Database Management',
      issuer: 'SQL & MySQL Certification'
    }
  ];

  const milestones = [
    {
      image: '/images/mile1.jpeg',
      title: 'First prize winner (Project)',
      description: 'Final year project engineering (B.E.)'
    },
    {
      image: '/images/mile2.jpeg',
      title: '1st Rank in A.C.E.M College',
      description: 'Alard college T.Y. Topper'
    },
    {
      image: '/images/mile3.jpeg',
      title: '1st Rank in AIML',
      description: 'AIML Topper'
    },
    {
      image: '/images/mile4.jpeg',
      title: 'Prize Winner',
      description: ''
    },
    {
      image: '/images/mile5.jpeg',
      title: 'Infosys Springboard Internship 4.0',
      description: 'Completed Training'
    },
    {
      image: '/images/mile6.jpeg',
      title: '1st Rank in SY',
      description: 'AIML Department'
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <h2 className="heading">
        My <span>Certificates</span>
      </h2>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div className="certificate-box" key={index}>
            <img src={cert.image} alt={cert.title} />
            <div className="certificate-layer">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones Section */}
      <h2 className="heading milestones-heading">
        My <span>Milestones</span>
      </h2>

      <div className="certificates-container">
        {milestones.map((milestone, index) => (
          <div className="certificate-box" key={index}>
            <img src={milestone.image} alt={milestone.title} />
            <div className="certificate-layer">
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
