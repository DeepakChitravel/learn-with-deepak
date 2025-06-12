// src/pages/fundamentals/CIntroduction.js
import React from 'react';

const CIntroduction = () => {
  const points = [
    { type: 'What is C?', detail: 'A general-purpose programming language developed for system and application development. It provides low-level memory access and is highly efficient.' },
    { type: 'Mother of Languages', detail: 'C influenced many modern languages like C++, Java, and Python.' },
    { type: 'System Programming', detail: 'It is widely used in operating systems, compilers, and embedded systems.' },
    { type: 'Mid-Level Language', detail: 'Combines the power of low-level programming with high-level syntax.' },
    { type: 'Structured & Procedural', detail: 'Supports modular programming using functions and follows a step-by-step approach.' },
  ];

  const historyTable = `
| Language Name | Year | Author                          |
|---------------|------|----------------------------------|
| ALGOL         | 1958 | International Committee          |
| BCPL          | 1966 | Martin Richards                 |
| B             | 1969 | Ken Thompson                    |
| Traditional C | 1972 | Dennis Ritchie                  |
| K&R C         | 1978 | Brian Kernighan & Dennis Ritchie |
| ANSI C        | 1989 | ANSI Committee                  |
| ANSI/ISO C    | 1990 | ISO Committee                   |
| C99           | 1999 | ISO Committee                   |
`.trim();

  const compilers = [
    'Turbo C++',
    'Dev C++',
    'GCC (GNU Compiler Collection)',
  ];

  const platforms = [
    'Windows',
    'Linux',
    'Mac',
  ];

  const headers = [
    { file: '<stdio.h>', use: 'Standard input/output functions' },
    { file: '<conio.h>', use: 'Console input/output (mainly in Turbo C)' },
    { file: '<math.h>', use: 'Mathematical functions like sqrt, pow, etc.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Introduction to C Language
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        C is a powerful and efficient programming language that forms the base of many modern software systems. 
        It was developed in the 1970s and is still widely used today in areas such as operating systems, embedded devices, and performance-critical applications.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* History Table */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>History of C Language</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{historyTable}</code>
      </pre>

      {/* Platforms & Compilers */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Platforms & Compilers</h3>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><strong>Run Platforms:</strong> {platforms.join(', ')}</li>
        <li><strong>Popular Compilers:</strong> {compilers.join(', ')}</li>
      </ul>

      {/* Header Files */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Common Header Files</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {headers.map((h, index) => (
          <li key={index}><code>#include {h.file}</code> – {h.use}</li>
        ))}
      </ul>
    </div>
  );
};

export default CIntroduction;
