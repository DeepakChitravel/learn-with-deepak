import React from 'react';

const SelectorExample = ({ title, code, children }) => (
  <div style={{ marginBottom: '30px' }}>
    <h4>{title}</h4>
    <div
      style={{
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        padding: '10px',
        fontFamily: 'Courier New',
        whiteSpace: 'pre-wrap',
        marginBottom: '10px',
      }}
    >
      {code}
    </div>
    <div style={{ padding: '10px', border: '1px dashed #888' }}>{children}</div>
  </div>
);

const Selector = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🎯 CSS Selectors Introduction</h2>
      <p>
        CSS Selectors are used to "select" the HTML elements you want to style.
        Selectors target elements by tag name, class, ID, attribute, or even more complex logic.
      </p>

      {/* Element Selector */}
      <SelectorExample
        title="1️⃣ Element Selector"
        code={`p {\n  color: green;\n}`}
      >
        <p style={{ color: 'green' }}>This is a paragraph styled using the element selector.</p>
      </SelectorExample>

      {/* ID Selector */}
      <SelectorExample
        title="2️⃣ ID Selector"
        code={`#myHeading {\n  color: blue;\n  font-weight: bold;\n}`}
      >
        <h3 id="myHeading" style={{ color: 'blue', fontWeight: 'bold' }}>
          This heading uses an ID selector.
        </h3>
      </SelectorExample>

      {/* Class Selector */}
      <SelectorExample
        title="3️⃣ Class Selector"
        code={`.highlight {\n  background-color: yellow;\n}`}
      >
        <p className="highlight" style={{ backgroundColor: 'yellow' }}>
          This paragraph uses a class selector.
        </p>
      </SelectorExample>

      {/* Universal Selector */}
      <SelectorExample
        title="4️⃣ Universal Selector"
        code={`* {\n  font-family: Arial;\n}`}
      >
        <p style={{ fontFamily: 'Arial' }}>This is affected by the universal selector (*).</p>
      </SelectorExample>

      {/* Group Selector */}
      <SelectorExample
        title="5️⃣ Group Selector"
        code={`h1, p {\n  color: darkred;\n}`}
      >
        <h1 style={{ color: 'darkred' }}>Heading styled with group selector</h1>
        <p style={{ color: 'darkred' }}>Paragraph also styled with group selector</p>
      </SelectorExample>
    </div>
  );
};

export default Selector;
