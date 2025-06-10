import React from 'react';

const borderExamples = [
  {
    type: 'border',
    code: 'border: 2px solid red;',
    style: { border: '2px solid red' },
    output: 'Solid red border on all sides',
  },
  {
    type: 'border-width',
    code: 'border: 5px solid black;',
    style: { border: '5px solid black' },
    output: '5px wide black border',
  },
  {
    type: 'border-color',
    code: 'border: 3px solid green;',
    style: { border: '3px solid green' },
    output: 'Green solid border',
  },
  {
    type: 'border-radius',
    code: 'border: 2px solid purple; border-radius: 10px;',
    style: { border: '2px solid purple', borderRadius: '10px' },
    output: 'Rounded corners with purple border',
  },
  {
    type: 'border-left',
    code: 'border-left: 4px solid orange;',
    style: { borderLeft: '4px solid orange' },
    output: 'Only left side has orange border',
  },
  {
    type: 'border-right',
    code: 'border-right: 4px solid blue;',
    style: { borderRight: '4px solid blue' },
    output: 'Only right side has blue border',
  },
  {
    type: 'border-top',
    code: 'border-top: 4px solid green;',
    style: { borderTop: '4px solid green' },
    output: 'Only top side has green border',
  },
  {
    type: 'border-bottom',
    code: 'border-bottom: 4px solid red;',
    style: { borderBottom: '4px solid red' },
    output: 'Only bottom side has red border',
  },
];

const borderStyles = [
  { style: 'solid', code: 'border: 3px solid blue;' },
  { style: 'dashed', code: 'border: 3px dashed green;' },
  { style: 'dotted', code: 'border: 3px dotted red;' },
  { style: 'double', code: 'border: 5px double purple;' },
  { style: 'groove', code: 'border: 6px groove gray;' },
  { style: 'ridge', code: 'border: 6px ridge brown;' },
  { style: 'inset', code: 'border: 4px inset darkorange;' },
  { style: 'outset', code: 'border: 4px outset teal;' },
];

const Border = () => {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🎯 CSS Border Properties</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '50px' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Code</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Output</th>
          </tr>
        </thead>
        <tbody>
          {borderExamples.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.type}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <pre style={{ margin: 0 }}>{item.code}</pre>
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <div style={{ ...item.style, padding: '10px', textAlign: 'center' }}>
                  {item.output}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>🎨 Border Style Types</h3>
      <p>Below are various <code>border-style</code> values with examples:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ border: '1px solid #aaa', padding: '8px' }}>Style</th>
            <th style={{ border: '1px solid #aaa', padding: '8px' }}>Code</th>
            <th style={{ border: '1px solid #aaa', padding: '8px' }}>Output</th>
          </tr>
        </thead>
        <tbody>
          {borderStyles.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #aaa', padding: '8px' }}>{item.style}</td>
              <td style={{ border: '1px solid #aaa', padding: '8px' }}>
                <pre style={{ margin: 0 }}>{item.code}</pre>
              </td>
              <td style={{ border: '1px solid #aaa', padding: '8px' }}>
                <div
                  style={{
                    border: item.code.replace('border: ', ''),
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {item.style} border
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            <h4 style={{ marginTop: '30px' }}>📘 Sample Code for TRBC</h4>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          padding: '15px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          marginBottom: '20px',
        }}
      >
{`style={{
  borderTop: '3px solid red',
  borderRight: '3px dashed green',
  borderBottom: '3px dotted blue',
  borderLeft: '3px double purple'
}}`}
      </div>

      <h4>🖥️ Output</h4>
      <div
        style={{
          borderTop: '3px solid red',
          borderRight: '3px dashed green',
          borderBottom: '3px dotted blue',
          borderLeft: '3px double purple',
          padding: '10px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <strong>This box uses TRBC borders</strong>
        <br />
        Top: solid red
        <br />
        Right: dashed green
        <br />
        Bottom: dotted blue
        <br />
        Left: double purple
      </div>

    </div>
  );
};

export default Border;
