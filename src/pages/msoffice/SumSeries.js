import React from 'react';

const SumSeries = () => {
  return (
    <div style={{ maxWidth: '750px', margin: '40px auto', padding: '25px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#0a5c5a' }}>Excel SUM Series & Data Validation</h2>

      {/* SUM */}
      <h3>1. SUM Function</h3>
      <p><strong>Syntax:</strong> <code>=SUM(range)</code></p>
      <p><strong>Use:</strong> Adds all numeric values in a range.</p>

      {/* SUMIF */}
      <h3>2. SUMIF Function</h3>
      <p><strong>Syntax:</strong> <code>=SUMIF(range, criteria, [sum_range])</code></p>
      <ul>
        <li><strong>range:</strong> Cells to check for the condition.</li>
        <li><strong>criteria:</strong> Condition to match.</li>
        <li><strong>sum_range:</strong> Cells to add if condition is met.</li>
      </ul>
      <p><strong>Example:</strong> <code>=SUMIF(A2:A10, "&gt;50", B2:B10)</code></p>

      {/* SUMIFS */}
      <h3>3. SUMIFS Function</h3>
      <p><strong>Syntax:</strong> <code>=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)</code></p>
      <ul>
        <li><strong>sum_range:</strong> Values to add.</li>
        <li><strong>criteria_range1:</strong> First condition range.</li>
        <li><strong>criteria1:</strong> First condition.</li>
      </ul>
      <p><strong>Example:</strong> <code>=SUMIFS(C2:C10, A2:A10, "Books", B2:B10, "&gt;=100")</code></p>

      {/* SUMPRODUCT */}
      <h3>4. SUMPRODUCT Function</h3>
      <p><strong>Syntax:</strong> <code>=SUMPRODUCT(array1, [array2], ...)</code></p>
      <p><strong>Use:</strong> Multiplies items in arrays and returns the sum of the results.</p>
      <p><strong>Example:</strong> If <code>A2:A4 = [2, 3, 4]</code> and <code>B2:B4 = [10, 20, 30]</code>, then:</p>
      <pre><code>=SUMPRODUCT(A2:A4, B2:B4)</code></pre>
      <p><strong>Result:</strong> 2×10 + 3×20 + 4×30 = <b>200</b></p>
      <p><strong>Common Use:</strong> Calculate total cost, weighted average, or conditional multiplication.</p>

      <hr style={{ margin: '40px 0' }} />

      {/* Data Validation */}
      <h2 style={{ color: '#0a5c5a' }}>5. Data Validation in Excel</h2>
      <p><strong>Purpose:</strong> Control what users can enter into a cell to prevent errors.</p>

      <h4>Features:</h4>
      <ul>
        <li>Allow only numbers, dates, or specific text</li>
        <li>Create drop-down lists for valid inputs</li>
        <li>Use custom formulas for complex rules</li>
        <li>Display helpful messages or warnings</li>
      </ul>

      <h4>Steps to Apply:</h4>
      <ol>
        <li>Select cells</li>
        <li>Go to <strong>Data</strong> → <strong>Data Validation</strong></li>
        <li>Set rule (e.g., List, Whole Number)</li>
        <li>Add input and error messages if needed</li>
      </ol>

      <h4>Why It’s Important:</h4>
      <ul>
        <li>✅ Improves data quality</li>
        <li>✅ Prevents wrong input</li>
        <li>✅ Saves time in corrections</li>
        <li>✅ Increases accuracy of calculations</li>
      </ul>
    </div>
  );
};

export default SumSeries;
