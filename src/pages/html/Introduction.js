import React from 'react';
import { Container } from 'react-bootstrap';

const Introduction = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: '#0d6efd' }}>
        Introduction to HTML
      </h2>

      <p><strong>Full Form:</strong> HTML stands for <em>HyperText Markup Language</em>.</p>

      <p>
        <strong>What is HTML?</strong><br />
        HTML is the standard language used to create and design documents on the World Wide Web.
        It structures the content on a webpage such as text, images, links, tables, and more.
      </p>

      <p>
        <strong>Inventor of HTML:</strong><br />
        HTML was invented by <strong>Tim Berners-Lee</strong> in <strong>1991</strong>. He is also credited as the inventor of the <strong>World Wide Web</strong>.
      </p>

      <p>
        <strong>Other Inventions by Tim Berners-Lee:</strong>
        <ul>
          <li>The World Wide Web (WWW)</li>
          <li>HTTP (Hypertext Transfer Protocol)</li>
          <li>URI (Uniform Resource Identifier)</li>
          <li>HTML itself</li>
        </ul>
      </p>

      <p>
        <strong>Versions of HTML:</strong>
        <ul>
          <li>HTML 1.0 – 1991 (First version, limited features)</li>
          <li>HTML 2.0 – 1995 (Formal standard)</li>
          <li>HTML 3.2 – 1997 (More formatting options)</li>
          <li>HTML 4.01 – 1999 (Stable and widely adopted)</li>
          <li>XHTML – 2000 (Stricter XML-based version)</li>
          <li><strong>HTML5 – 2014</strong> (Current version: audio, video, semantic tags)</li>
        </ul>
      </p>

      <p>
        <strong>Importance of HTML:</strong>
        <ul>
          <li>Foundation of all web pages</li>
          <li>Used with CSS and JavaScript for modern websites</li>
          <li>Works on all browsers and devices</li>
          <li>Easy to learn and use</li>
        </ul>
      </p>

      <p className="mt-4"><em>"Without HTML, there would be no websites. It’s the building block of the web!"</em></p>
    </Container>
  );
};

export default Introduction;
