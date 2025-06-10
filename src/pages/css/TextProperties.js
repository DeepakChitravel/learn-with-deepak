import React from 'react';

const textExamples = [
  {
    property: 'color',
    code: 'color: red;',
    style: { color: 'red' },
    output: 'This text is red.',
  },
  {
    property: 'text-align',
    code: 'text-align: center;',
    style: { textAlign: 'center', border: '1px solid #ccc', padding: '10px' },
    output: 'This text is center-aligned.',
  },
  {
    property: 'text-decoration',
    code: 'text-decoration: underline;',
    style: { textDecoration: 'underline' },
    output: 'This text is underlined.',
  },
  {
    property: 'text-transform',
    code: 'text-transform: uppercase;',
    style: { textTransform: 'uppercase' },
    output: 'This text is uppercase.',
  },
  {
    property: 'letter-spacing',
    code: 'letter-spacing: 3px;',
    style: { letterSpacing: '3px' },
    output: 'Spaced text',
  },
  {
    property: 'word-spacing',
    code: 'word-spacing: 10px;',
    style: { wordSpacing: '10px' },
    output: 'This is spaced text.',
  },
  {
    property: 'line-height',
    code: 'line-height: 2;',
    style: { lineHeight: '2' },
    output: 'Line 1\nLine 2\nLine 3',
  },
  {
    property: 'text-shadow',
    code: 'text-shadow: 2px 2px 5px gray;',
    style: { textShadow: '2px 2px 5px gray' },
    output: 'Text with shadow',
  },
  {
    property: 'direction',
    code: 'direction: rtl;',
    style: { direction: 'rtl', border: '1px solid #ccc', padding: '10px' },
    output: 'Right to left',
  },
];

const TextProperties = () => {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>📝 CSS Text Properties</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th style={cellStyle}>Property</th>
            <th style={cellStyle}>Code</th>
            <th style={cellStyle}>Output</th>
          </tr>
        </thead>
        <tbody>
          {textExamples.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.property}</td>
              <td style={cellStyle}>
                <pre style={{ margin: 0 }}>{item.code}</pre>
              </td>
              <td style={cellStyle}>
                <div style={{ ...item.style, whiteSpace: 'pre-wrap' }}>{item.output}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
};

export default TextProperties;
