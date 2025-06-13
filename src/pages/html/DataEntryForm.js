import React, { useState } from 'react';

const DataEntryForm = () => {
  const formCode = `
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br><br>

  <label for="course">Course:</label>
  <select id="course" name="course">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select><br><br>

  <input type="submit" value="Submit">
  <input type="reset" value="Cancel">
</form>`.trim();

  const [submitted, setSubmitted] = useState(false);

  const points = [
    "HTML forms are used to collect user input.",
    "`<input>` is used for fields like text, email, radio, etc.",
    "`<select>` creates a dropdown menu for multiple choices.",
    "`<form>` can have `submit` and `reset` buttons.",
    "`onSubmit` event can be used in React to handle form submission."
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      fontFamily: 'monospace',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.7'
    }}>
      {/* Heading */}
      <h2 style={{
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        HTML Data Entry Form
      </h2>

      {/* Info Points */}
      <ul style={{ fontSize: '16px', marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      {/* Code Block */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Form Code</h3>
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '15px',
        borderRadius: '6px',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <code>{formCode}</code>
      </pre>

      {/* Output Form */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>Rendered Output</h3>
      <form
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '500px'
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        onReset={() => setSubmitted(false)}
      >
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female<br /><br />

        <label htmlFor="course">Course:</label><br />
        <select id="course" name="course" required>
          <option value="">-- Select Course --</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select><br /><br />

        <input type="submit" value="Submit" />
        <input type="reset" value="Cancel" style={{ marginLeft: '10px' }} />
      </form>

      {submitted && (
        <p style={{ marginTop: '20px', color: 'green' }}>✅ Form submitted successfully!</p>
      )}
    </div>
  );
};

export default DataEntryForm;
