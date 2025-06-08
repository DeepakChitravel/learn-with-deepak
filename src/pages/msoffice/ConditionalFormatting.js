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
export const ConditionalFormatting = () => (
  <div style={styles.container}>
    <h2>🎨 Conditional Formatting</h2>
    <ul>
      <li>Highlights cells based on rules and conditions.</li>
      <li>Useful for visualizing trends and outliers.</li>
      <li><b>Examples:</b></li>
      <ul>
        <li>Highlight sales over a target amount.</li>
        <li>Color code scores: red for fail, green for pass.</li>
        <li>Use data bars, color scales, icon sets.</li>
      </ul>
      <li><b>Steps:</b> Select cells → Go to <b>Home &gt; Conditional Formatting</b> → Choose rule.</li>
    </ul>
  </div>
);
