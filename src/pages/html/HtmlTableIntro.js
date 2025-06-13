import React from 'react';

const tableCode = `<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>Sl. No.</th>
      <th>Name</th>
      <th>Department</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Arun</td>
      <td>Computer Science</td>
      <td>89</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Meena</td>
      <td>Mathematics</td>
      <td>95</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Kiran</td>
      <td>Physics</td>
      <td>78</td>
    </tr>
  </tbody>
</table>`;

const HtmlTableIntro = () => {
  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        📋 Introduction to HTML Tables
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        HTML tables are used to present data in a tabular form with rows and columns.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🔧 Common Table Attributes</h3>
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li><strong>border</strong> – Sets the border width</li>
        <li><strong>cellpadding</strong> – Adds space inside cells</li>
        <li><strong>cellspacing</strong> – Adds space between cells</li>
        <li><strong>width</strong> – Sets the width of the table</li>
        <li><strong>align</strong> – Aligns the table (deprecated)</li>
      </ul>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧾 Sample Code</h3>
      <pre style={styles.codeBlock}>
        <code>{tableCode}</code>
      </pre>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>💡 Output</h3>
      <div style={styles.outputBox} dangerouslySetInnerHTML={{ __html: tableCode }} />
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '5px',
    overflowX: 'auto',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
  },
  outputBox: {
    background: '#e8f5e9',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#333',
    marginTop: '10px',
  },
};

export default HtmlTableIntro;
