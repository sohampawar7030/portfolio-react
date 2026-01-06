import React from 'react';

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Savitribai Phule Pune University',
      year: '2022 - 2025',
      grade: '8.83 CGPA'
    },
    {
      degree: 'Diploma (IT)',
      institution: 'Government Polytechnic Awasari',
      year: '2019 - 2022',
      grade: '83.75 Percentage'
    },
    {
      degree: 'Secondary School',
      institution: 'Bharati Vidyapeeth School',
      year: '2018 - 2019',
      grade: '86.80 Percentage'
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Education</span>
      </h2>
      <div className="education-container">
        <table>
          <thead>
            <tr>
              <th>Degree / Course</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Percentage / Grade</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr key={index}>
                <td>{edu.degree}</td>
                <td>{edu.institution}</td>
                <td>{edu.year}</td>
                <td>{edu.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;
