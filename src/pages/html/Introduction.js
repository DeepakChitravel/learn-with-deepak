import React from 'react';
import { Container } from 'react-bootstrap';

const Introduction = () => {
  const versionLabelStyle = {
    backgroundColor: '#D9EEE1',
    color: '#000',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold',
  };

  const greenBoxStyle = {
    backgroundColor: '#D9EEE1',
    padding: '20px',
    borderRadius: '6px',
    marginBottom: '30px',
    marginTop: '10px',
  };

  const quoteStyle = {
    fontStyle: 'italic',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderLeft: '4px solid #04AA6D',
    marginTop: '30px',
  };

  const sectionStyle = {
    marginBottom: '30px',
  };

  return (
    <Container className="my-5" style={{ maxWidth: '800px', fontFamily: 'Verdana, sans-serif', lineHeight: '1.8' }}>
      <h2 style={{ color: '#04AA6D', marginBottom: '30px', fontWeight: 'bold' }}>🌐 Introduction to HTML</h2>

      <div style={sectionStyle}>
        <p><strong>Full Form:</strong> HTML stands for <em>HyperText Markup Language</em>.</p>
      </div>

      <hr />

      <div style={sectionStyle}>
        <h5 style={{ color: '#04AA6D' }}>What is HTML?</h5>
        <p>
          HTML is the standard language used to create and design documents on the World Wide Web.
          It structures the content on a webpage such as text, images, links, tables, and more.
        </p>
      </div>

      <hr />

      <div style={sectionStyle}>
        <h5 style={{ color: '#04AA6D' }}>Inventor of HTML</h5>
        <p>
          HTML was invented by <strong>Tim Berners-Lee</strong> in <strong>1991</strong>. He is also credited as the inventor of the <strong>World Wide Web</strong>.
        </p>
      </div>

      <hr />

      <div style={sectionStyle}>
        <h5 style={{ color: '#04AA6D' }}>Other Inventions by Tim Berners-Lee</h5>
        <ul style={{ paddingLeft: '20px' }}>
          <li>The World Wide Web (WWW)</li>
          <li>HTTP (Hypertext Transfer Protocol)</li>
          <li>URI (Uniform Resource Identifier)</li>
          <li>HTML itself</li>
        </ul>
      </div>

      <hr />

      <div style={greenBoxStyle}>
        <h5 style={{ color: '#04AA6D' }}>📜 Versions of HTML</h5>
        <ul style={{ paddingLeft: '20px' }}>
          <li><span style={versionLabelStyle}>HTML 1.0</span> – 1991 (First version, limited features)</li>
          <li><span style={versionLabelStyle}>HTML 2.0</span> – 1995 (Formal standard)</li>
          <li><span style={versionLabelStyle}>HTML 3.2</span> – 1997 (More formatting options)</li>
          <li><span style={versionLabelStyle}>HTML 4.01</span> – 1999 (Stable and widely adopted)</li>
          <li><span style={versionLabelStyle}>XHTML</span> – 2000 (Stricter XML-based version)</li>
          <li><span style={versionLabelStyle}>HTML5</span> – <strong>2014</strong> (Current version: audio, video, semantic tags)</li>
        </ul>
      </div>

      <hr />

      <div style={sectionStyle}>
        <h5 style={{ color: '#04AA6D' }}>Why is HTML Important?</h5>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Foundation of all web pages</li>
          <li>Used with CSS and JavaScript for modern websites</li>
          <li>Works on all browsers and devices</li>
          <li>Easy to learn and use</li>
        </ul>
      </div>

      <hr />

      <p style={quoteStyle}>
        "Without HTML, there would be no websites. It’s the building block of the web!"
      </p>
    </Container>
  );
};

export default Introduction;
