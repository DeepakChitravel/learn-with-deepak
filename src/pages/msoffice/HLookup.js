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
export const HLOOKUP = () => (
  <div style={styles.container}>
    <h2>🔎 HLOOKUP Function</h2>
    <ul>
      <li>Searches for a value in the first row of a table.</li>
      <li>Returns value from the specified row below.</li>
      <li>Best for horizontally organized data.</li>
      <li><b>Syntax:</b> <code>HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])</code></li>
      <li><b>Arguments:</b></li>
      <ul>
        <li><b>lookup_value</b>: Value to search.</li>
        <li><b>table_array</b>: Horizontal data range.</li>
        <li><b>row_index_num</b>: Row number to return value from.</li>
        <li><b>range_lookup</b>: TRUE for approximate, FALSE for exact.</li>
      </ul>
    </ul>
  </div>
);
