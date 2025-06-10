import React from 'react';

const fontExamples = [
  {
    property: 'font-family',
    code: 'font-family: Arial, sans-serif;',
    style: { fontFamily: 'Arial, sans-serif' },
    output: 'This text uses Arial font.',
  },
  {
    property: 'font-size',
    code: 'font-size: 24px;',
    style: { fontSize: '24px' },
    output: 'This is 24px font size.',
  },
  {
    property: 'font-style',
    code: 'font-style: italic;',
    style: { fontStyle: 'italic' },
    output: 'This text is italic.',
  },
  {
    property: 'font-weight',
    code: 'font-weight: bold;',
    style: { fontWeight: 'bold' },
    output: 'This text is bold.',
  },
  {
    property: 'color',
    code: 'color: blue;',
    style: { color: 'blue' },
    output: 'This text is blue.',
  },
];

const FontStyle = () => {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🎨 CSS Font Styles</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 40 }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={cellStyle}>Property</th>
            <th style={cellStyle}>Code</th>
            <th style={cellStyle}>Output</th>
          </tr>
        </thead>
        <tbody>
          {fontExamples.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.property}</td>
              <td style={cellStyle}>
                <pre style={{ margin: 0 }}>{item.code}</pre>
              </td>
              <td style={cellStyle}>
                <div style={{ ...item.style, textAlign: 'center', padding: '10px' }}>{item.output}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>🔤 Font Style Shortcut</h3>
      <p>
        Use the shortcut <strong><code>FSCW</code></strong> to remember font properties:
      </p>
      <ul>
        <li><strong>F</strong> - <code>font-family</code></li>
        <li><strong>S</strong> - <code>font-size</code></li>
        <li><strong>C</strong> - <code>color</code></li>
        <li><strong>W</strong> - <code>font-weight</code></li>
      </ul>

      <h4>🧪 FSCW Example</h4>
      <pre
        style={{
          background: '#f9f9f9',
          padding: '15px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
        }}
      >{`style={{
  fontFamily: 'Georgia, serif',
  fontSize: '22px',
  color: 'darkgreen',
  fontWeight: 'bold'
}}`}</pre>

      <h4>🎯 Output</h4>
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '22px',
          color: 'darkgreen',
          fontWeight: 'bold',
          padding: '10px',
        }}
      >
        FSCW: Georgia font, 22px, darkgreen, bold
      </div>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
};

export default FontStyle;
