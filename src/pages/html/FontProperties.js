import React from 'react';

const FontProperties = () => {
  const code = `
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
  `.trim();

  const fonts = [
    {
      name: 'Times New Roman',
      style: { fontFamily: 'Times New Roman, serif' },
      text: 'The Old Man and the Sea — Times New Roman'
    },
    {
      name: 'Verdana',
      style: { fontFamily: 'Verdana, sans-serif' },
      text: 'The Old Man and the Sea — Verdana'
    },
    {
      name: 'Verdana Black (Bold)',
      style: { fontFamily: 'Verdana, sans-serif', fontWeight: '900' },
      text: 'The Old Man and the Sea — Verdana Black'
    },
    {
      name: 'Classic Book Style (Georgia)',
      style: { fontFamily: 'Georgia, serif', fontStyle: 'italic' },
      text: 'The Old Man and the Sea — Classic Book Style (Georgia)'
    }
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
        🅰️ Font Properties in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This example demonstrates how different font properties like <code>font-family</code>, <code>font-style</code>,
        and <code>font-weight</code> can change the appearance of a text.
      </p>

      {/* Key Concepts */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li><strong>Font Family:</strong> Specifies the typeface for text (e.g., Times, Verdana).</li>
        <li><strong>Font Weight:</strong> Controls the boldness (e.g., normal, bold, 900).</li>
        <li><strong>Font Style:</strong> Changes the style to italic, oblique, etc.</li>
      </ul>

      {/* Code */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Rendered Output</h3>
      {fonts.map((item, idx) => (
        <div key={idx} style={{
          background: '#f9f9f9',
          padding: '15px 20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '15px'
        }}>
          <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#111' }}>
            {idx + 1}. {item.name}
          </h4>
          <p style={{ ...item.style, fontSize: '18px', color: '#000' }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FontProperties;
