import React from 'react';

const Marksheet = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        lineHeight: 1.7,
        color: '#333',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '26px',
          marginBottom: '25px',
          color: '#0d47a1',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
        }}
      >
        Marksheet Calculation in Excel
      </h2>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>1. Average Marks</h3>
      <p>
        To calculate the average of marks from cells <strong>B2 to F2</strong>:<br />
        <code>=AVERAGE(B2:F2)</code><br />
        This adds all the marks and divides by the number of subjects.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>2. Rounded Average</h3>
      <p>
        To round the average to the nearest whole number:<br />
        <code>=ROUND(AVERAGE(B2:F2), 0)</code><br />
        This gives clean whole numbers like 75 instead of 74.6.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>3. Pass or Fail</h3>
      <p>
        To check if the student passed (all subjects must be ≥ 35):<br />
        <code>=IF(MIN(B2:F2)&gt;=35, "Pass", "Fail")</code><br />
        If any mark is below 35, it shows "Fail"; otherwise, "Pass".
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>4. Grade</h3>
      <p>To assign grades based on average marks:</p>
      <pre
        style={{
          background: '#f4f4f4',
          padding: '10px',
          borderRadius: '5px',
          overflowX: 'auto',
        }}
      >
        <code>
          {`=IF(AVERAGE(B2:F2)>=90, "A+", 
 IF(AVERAGE(B2:F2)>=75, "A", 
 IF(AVERAGE(B2:F2)>=60, "B", 
 IF(AVERAGE(B2:F2)>=50, "C", "D"))))`}
        </code>
      </pre>
      <p>Grades will be assigned like A+, A, B, etc.</p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>5. Rank</h3>
      <p>
        To rank students based on their total marks:<br />
        <code>=RANK(G2, G$2:G$10)</code><br />
        G2 contains the student’s total marks; G2 to G10 is the range.
      </p>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>6. Final Result</h3>
      <p>
        To show “Passed with A Grade” or “Fail” in a single formula:
      </p>
      <pre
        style={{
          background: '#f4f4f4',
          padding: '10px',
          borderRadius: '5px',
          overflowX: 'auto',
        }}
      >
        <code>
          {`=IF(MIN(B2:F2)<35, "Fail", 
 "Pass with " & 
 IF(AVERAGE(B2:F2)>=90, "A+", 
 IF(AVERAGE(B2:F2)>=75, "A", 
 IF(AVERAGE(B2:F2)>=60, "B", 
 IF(AVERAGE(B2:F2)>=50, "C", "D")))))`}
        </code>
      </pre>
      <p>This combines both pass/fail logic and grading in one formula.</p>
    </div>
  );
};

export default Marksheet;
