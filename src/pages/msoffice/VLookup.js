// VLOOKUP.js
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

export const VLOOKUP = () => (
  <div style={styles.container}>
    <h2>🔍 VLOOKUP Function</h2>
    <ul>
      <li>Used to search for a value in the first column of a table.</li>
      <li>Returns a value from the same row in another column.</li>
      <li>Useful for transferring data across tables.</li>
      <li><b>Syntax:</b> <code>VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code></li>
      <li><b>Arguments:</b></li>
      <ul>
        <li><b>lookup_value</b>: Value to search.</li>
        <li><b>table_array</b>: Range containing the data.</li>
        <li><b>col_index_num</b>: Column number to return value from.</li>
        <li><b>range_lookup</b>: TRUE for approximate, FALSE for exact match.</li>
      </ul>
    </ul>
  </div>
);