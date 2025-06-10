import React from 'react';

const DisplayExample = ({ label, code, style, note }) => (
  <div style={{ marginBottom: '30px' }}>
    <h4>{label}</h4>
    <div
      style={{
        backgroundColor: '#f8f8f8',
        border: '1px solid #ccc',
        padding: '10px',
        fontFamily: 'Courier New',
        whiteSpace: 'pre-wrap',
        marginBottom: '10px',
      }}
    >
      {code}
    </div>
    <div style={{ backgroundColor: '#eef', padding: '10px', border: '1px solid #444' }}>
      <span style={{ ...style, backgroundColor: '#cce', padding: '5px' }}>
        Element 1
      </span>
      <span style={{ ...style, backgroundColor: '#cce', padding: '5px' }}>
        Element 2
      </span>
    </div>
    {note && <p style={{ fontStyle: 'italic', marginTop: '5px' }}>{note}</p>}
  </div>
);

const Display = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>📐 CSS Display Properties</h2>
      <p>
        The <code>display</code> property defines how an element is displayed on the page.
      </p>

      <DisplayExample
        label="Block"
        code={`span {\n  display: block;\n}`}
        style={{ display: 'block' }}
        note="Each element starts on a new line and takes full width."
      />

      <DisplayExample
        label="Inline"
        code={`span {\n  display: inline;\n}`}
        style={{ display: 'inline' }}
        note="Elements appear next to each other without forcing a line break."
      />

      <DisplayExample
        label="Inline-Block"
        code={`span {\n  display: inline-block;\n}`}
        style={{ display: 'inline-block' }}
        note="Like inline, but allows padding, width, and height."
      />

      <DisplayExample
        label="None"
        code={`span {\n  display: none;\n}`}
        style={{ display: 'none' }}
        note="Element will not be rendered at all."
      />

    </div>
  );
};

export default Display;
