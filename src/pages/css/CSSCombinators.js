// src/pages/fundamentals/CSSCombinators.js
import React from 'react';

const CSSCombinators = () => {
  const code = `
/* 1. Descendant (space) */
.container p {
  color: green;
}

/* 2. Child (>) */
.container > p {
  font-weight: bold;
}

/* 3. Adjacent sibling (+) */
h2 + p {
  background-color: yellow;
}

/* 4. General sibling (~) */
h3 ~ p {
  font-style: italic;
}
`.trim();

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2>CSS Combinators</h2>

      <h4>CSS Code</h4>
      <pre
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}
      >
        <code>{code}</code>
      </pre>

      <h4 style={{ marginTop: '30px' }}>Output</h4>

      <div className="container" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
        <p>This is a direct child of .container</p>
        <div>
          <p>This is a descendant inside a div</p>
        </div>
      </div>

      <h2>Heading h2</h2>
      <p>This paragraph is adjacent to h2</p>
      <p>This paragraph is not adjacent to h2</p>

      <h3>Heading h3</h3>
      <p>General sibling of h3 (italic)</p>
      <p>Another general sibling</p>
    </div>
  );
};

export default CSSCombinators;
