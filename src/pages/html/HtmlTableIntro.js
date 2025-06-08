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
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2>📋 Introduction to HTML Tables</h2>
      <p>HTML tables are used to display data in rows and columns format.</p>

      <h3>🔧 Common Table Attributes</h3>
      <ul>
        <li><strong>border</strong> – sets the border width</li>
        <li><strong>cellpadding</strong> – sets space inside the cell</li>
        <li><strong>cellspacing</strong> – sets space between cells</li>
        <li><strong>width</strong> – sets the width of the table</li>
        <li><strong>align</strong> – aligns the table (deprecated)</li>
      </ul>

      <h3>🧾 Sample Code</h3>
      <pre style={styles.codeBlock}>{tableCode}</pre>

      <h3>💡 Output:</h3>
      <div style={styles.outputBox} dangerouslySetInnerHTML={{ __html: tableCode }} />
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#272822',
    color: '#f8f8f2',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    marginTop: '10px',
  },
  outputBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    marginTop: '15px',
    overflowX: 'auto',
  },
};

export default HtmlTableIntro;
