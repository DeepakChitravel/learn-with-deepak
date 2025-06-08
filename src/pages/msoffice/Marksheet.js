import React from 'react';

const Marksheet = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fffefc',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        color: '#333',
        lineHeight: 1.8,
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#004d40', fontWeight: 'bold', marginBottom: '20px' }}>
        📝 Marksheet Calculation in Excel (Explained Simply)
      </h2>

      <h3 style={{ color: '#1a237e' }}>📊 1. Average Marks</h3>
      <p>
        To find the average of marks in Excel (Example: marks in cells <b>B2 to F2</b>):<br />
        👉 Formula: <code>=AVERAGE(B2:F2)</code><br />
        🔍 This adds all the marks and divides by the number of subjects.
      </p>

      <h3 style={{ color: '#1a237e' }}>🔁 2. Rounded Average</h3>
      <p>
        To round the average to the nearest whole number:<br />
        👉 Formula: <code>=ROUND(AVERAGE(B2:F2), 0)</code><br />
        🔍 This gives clean numbers like 75 instead of 74.6.
      </p>

      <h3 style={{ color: '#1a237e' }}>✅ 3. Pass or Fail</h3>
      <p>
        To check if a student passed (each subject should be ≥ 35):<br />
        👉 Formula: <code>=IF(MIN(B2:F2)&gt;=35, "Pass", "Fail")</code><br />
        🔍 If any mark is below 35, it shows "Fail", else "Pass".
      </p>

      <h3 style={{ color: '#1a237e' }}>🏆 4. Grade</h3>
      <p>
        Based on average marks:<br />
        👉 Formula:
        <pre>
=IF(AVERAGE(B2:F2)&gt;=90, "A+", 
 IF(AVERAGE(B2:F2)&gt;=75, "A", 
 IF(AVERAGE(B2:F2)&gt;=60, "B", 
 IF(AVERAGE(B2:F2)&gt;=50, "C", 
 "D"))))
        </pre>
        🔍 This gives grade based on score: A+, A, B, C, D.
      </p>

      <h3 style={{ color: '#1a237e' }}>🥇 5. Rank</h3>
      <p>
        To rank students by total marks:<br />
        👉 Formula: <code>=RANK(G2, G$2:G$10)</code><br />
        🔍 G2 is the total mark, and G2 to G10 is the range of all totals.
      </p>

      <h3 style={{ color: '#1a237e' }}>📜 6. Final Result</h3>
      <p>
        To show "Passed with A Grade" or "Failed":<br />
        👉 Formula:
        <pre>
=IF(MIN(B2:F2)&lt;35, "Fail", 
 "Pass with " & 
 IF(AVERAGE(B2:F2)&gt;=90, "A+", 
 IF(AVERAGE(B2:F2)&gt;=75, "A", 
 IF(AVERAGE(B2:F2)&gt;=60, "B", 
 IF(AVERAGE(B2:F2)&gt;=50, "C", "D")))))
        </pre>
        🔍 Combines pass/fail check with grade for a clear result.
      </p>
    </div>
  );
};

export default Marksheet;
