import React from 'react';

const sampleCode = `
<p style={{ fontFamily: 'Times New Roman, serif' }}>
  The Old Man and the Sea — Times New Roman
</p>

<p style={{ fontFamily: 'Verdana, sans-serif' }}>
  The Old Man and the Sea — Verdana
</p>

<p style={{ fontFamily: 'Verdana, sans-serif', fontWeight: '900' }}>
  The Old Man and the Sea — Verdana Black
</p>

<p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
  The Old Man and the Sea — Classic Book Style (Georgia)
</p>
`;

const FontProperties = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🅰️ Font Properties Demo</h2>
      <p>Example text: <strong>"The Old Man and the Sea"</strong></p>

      {/* Code Block */}
      <h4 style={{ marginTop: '30px' }}>💻 Sample Code:</h4>
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: '20px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        {sampleCode}
      </pre>

      {/* Output */}
      <h4 style={{ marginTop: '30px' }}>🖥️ Output:</h4>
      <div style={styles.section}>
        <h4 style={styles.label}>1. Times New Roman</h4>
        <p style={{ fontFamily: 'Times New Roman, serif', fontSize: '18px' }}>
          The Old Man and the Sea — Times New Roman
        </p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.label}>2. Verdana</h4>
        <p style={{ fontFamily: 'Verdana, sans-serif', fontSize: '18px' }}>
          The Old Man and the Sea — Verdana
        </p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.label}>3. Verdana Black (Bold)</h4>
        <p style={{ fontFamily: 'Verdana, sans-serif', fontWeight: '900', fontSize: '18px' }}>
          The Old Man and the Sea — Verdana Black
        </p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.label}>4. Classic Book Style (Georgia)</h4>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontStyle: 'italic' }}>
          The Old Man and the Sea — Classic Book Style (Georgia)
        </p>
      </div>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: '25px',
    padding: '10px 20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  label: {
    marginBottom: '8px',
    color: '#333',
  },
};

export default FontProperties;
