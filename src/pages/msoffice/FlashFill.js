import React from 'react';
const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  }
};
export const FlashFill = () => (
  <div style={styles.container}>
    <h2>⚡ Flash Fill</h2>
    <ul>
      <li>Recognizes patterns in data and fills them automatically.</li>
      <li>Useful for splitting or combining text (e.g., first & last name).</li>
      <li><b>Shortcut Key:</b> CTRL + E</li>
      <li><b>How to use:</b></li>
      <ul>
        <li>Type the desired pattern in the first cell.</li>
        <li>Go to <b>Data &gt; Flash Fill</b> or press CTRL + E.</li>
      </ul>
    </ul>
  </div>
);