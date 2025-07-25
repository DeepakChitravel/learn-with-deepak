// src/pages/fundamentals/HTMLIntroduction.js
import React from 'react';

const HTMLIntroduction = () => {
  const versions = [
    ['HTML 1.0', '1991 – First version, limited features'],
    ['HTML 2.0', '1995 – Formal standard'],
    ['HTML 3.2', '1997 – More formatting options'],
    ['HTML 4.01', '1999 – Stable and widely adopted'],
    ['XHTML', '2000 – Stricter XML-based version'],
    ['HTML5', '2014 – Current version: audio, video, semantic tags']
  ];

  const inventions = [
    'The World Wide Web (WWW)',
    'HTTP (Hypertext Transfer Protocol)',
    'URI (Uniform Resource Identifier)',
    'HTML itself'
  ];

  const importance = [
    'Foundation of all web pages',
    'Used with CSS and JavaScript for modern websites',
    'Works on all browsers and devices',
    'Easy to learn and use'
  ];

  return (
    <div style={styles.container}>
      {/* Title */}
      <h2 style={styles.title}>🌐 Introduction to HTML</h2>

      {/* Full Form */}
      <p><strong>Full Form:</strong> HTML stands for <em>HyperText Markup Language</em>.</p>

      {/* What is HTML? */}
      <h3 style={styles.heading}>What is HTML?</h3>
      <p>
        HTML is the standard markup language used to create and design documents on the web.
        It structures content such as text, images, links, tables, and more.
      </p>

      {/* Inventor */}
      <h3 style={styles.heading}>Inventor of HTML</h3>
      <p>
        HTML was invented by <strong>Tim Berners-Lee</strong> in <strong>1991</strong>.
        He also created the <strong>World Wide Web</strong>.
      </p>

      {/* Other Inventions */}
      <h3 style={styles.heading}>Other Inventions by Tim Berners-Lee</h3>
      <ul style={styles.list}>
        {inventions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* HTML Versions */}
      <h3 style={styles.heading}>📜 Versions of HTML</h3>
      <ul style={styles.list}>
        {versions.map(([version, desc], index) => (
          <li key={index}><code>{version}</code> – {desc}</li>
        ))}
      </ul>

      {/* Importance */}
      <h3 style={styles.heading}>Why is HTML Important?</h3>
      <ul style={styles.list}>
        {importance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Quote */}
      <blockquote style={styles.quote}>
        "Without HTML, there would be no websites. It’s the building block of the web!"
      </blockquote>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.7',
    fontSize: '1rem',
    wordBreak: 'break-word',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#003366',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  },
  heading: {
    color: '#1a237e',
    fontSize: '20px',
    marginTop: '25px',
    marginBottom: '10px'
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '20px'
  },
  quote: {
    fontStyle: 'italic',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderLeft: '5px solid #04AA6D',
    borderRadius: '5px',
    color: '#333',
    marginTop: '30px'
  }
};

export default HTMLIntroduction;
