// src/pages/fundamentals/CIntroduction.js
import React from 'react';

const CIntroduction = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  const headingStyle = {
    color: '#1a237e',
    borderBottom: '2px solid #ccc',
    paddingBottom: '5px',
    marginTop: '30px',
  };

  const sectionStyle = {
    marginBottom: '25px',
  };

  return (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#0d47a1' }}>
        Introduction to C Language
      </h2>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>What is C?</h3>
        <p>
          C is a powerful general-purpose programming language developed for system and application software.
          It offers low-level memory access, is compiled, and supports structured programming. It is often referred
          to as the "mother of all modern programming languages."
        </p>
      </section>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>History of C Language</h3>
        <table style={tableStyle}>
          <thead>
            <tr style={headerStyle}>
              <th style={thTdStyle}>Language Name</th>
              <th style={thTdStyle}>Year</th>
              <th style={thTdStyle}>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={thTdStyle}>ALGOL</td><td style={thTdStyle}>1958</td><td style={thTdStyle}>International Committee</td></tr>
            <tr><td style={thTdStyle}>BCPL</td><td style={thTdStyle}>1966</td><td style={thTdStyle}>Martin Richards</td></tr>
            <tr><td style={thTdStyle}>B</td><td style={thTdStyle}>1969</td><td style={thTdStyle}>Ken Thompson</td></tr>
            <tr><td style={thTdStyle}>Traditional C</td><td style={thTdStyle}>1972</td><td style={thTdStyle}>Dennis Ritchie</td></tr>
            <tr><td style={thTdStyle}>K&R C</td><td style={thTdStyle}>1978</td><td style={thTdStyle}>Brian Kernighan & Dennis Ritchie</td></tr>
            <tr><td style={thTdStyle}>ANSI C</td><td style={thTdStyle}>1989</td><td style={thTdStyle}>ANSI Committee</td></tr>
            <tr><td style={thTdStyle}>ANSI/ISO C</td><td style={thTdStyle}>1990</td><td style={thTdStyle}>ISO Committee</td></tr>
            <tr><td style={thTdStyle}>C99</td><td style={thTdStyle}>1999</td><td style={thTdStyle}>ISO Committee</td></tr>
          </tbody>
        </table>
      </section>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>Platforms & Compilers</h3>
        <ul>
          <li><strong>Run Platforms:</strong> Windows, Linux, Mac</li>
          <li><strong>Popular Compilers:</strong> Turbo C++, Dev C++, GCC (GNU Compiler Collection)</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3 style={headingStyle}>Common Header Files</h3>
        <ul>
          <li><code>#include &lt;stdio.h&gt;</code> – Standard input/output functions</li>
          <li><code>#include &lt;conio.h&gt;</code> – Console input/output (used in Turbo C/C++)</li>
          <li><code>#include &lt;math.h&gt;</code> – Mathematical functions like <code>sqrt</code>, <code>pow</code>, etc.</li>
        </ul>
      </section>

      <section>
        <h3 style={headingStyle}>Characteristics of C Language</h3>
        <ul>
          <li><strong>Mother of All Languages:</strong> Influenced languages like C++, Java, Python</li>
          <li><strong>System Programming Language:</strong> Used to build OS, compilers, drivers</li>
          <li><strong>Procedure Oriented:</strong> Follows a step-by-step procedural approach</li>
          <li><strong>Structured Programming:</strong> Code is broken into functions and blocks</li>
          <li><strong>Mid-Level Language:</strong> Combines low-level and high-level features</li>
        </ul>
      </section>
    </div>
  );
};

export default CIntroduction;
