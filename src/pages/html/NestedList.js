import React from 'react';

const nestedListCode = `<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Tomato</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>`;

const NestedList = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f9f9f9' }}>
      <h2>🌿 Nested List Example</h2>
      <p>A nested list is a list within another list. Below is an example of a nested unordered list:</p>

      {/* HTML Code */}
      <pre style={styles.codeBlock}>{nestedListCode}</pre>

      {/* Rendered Output */}
      <div style={styles.outputBox}>
        <ul>
          <li>Fruits
            <ul>
              <li>Apple</li>
              <li>Banana</li>
              <li>Mango</li>
            </ul>
          </li>
          <li>Vegetables
            <ul>
              <li>Carrot</li>
              <li>Tomato</li>
              <li>Spinach</li>
            </ul>
          </li>
        </ul>
      </div>
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
    marginTop: '20px',
  },
  outputBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    marginTop: '15px',
  },
};

export default NestedList;
