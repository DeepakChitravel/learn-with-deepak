import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
</form>
`;

const DataEntryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.6 }}>
      <h2>🧾 Data Entry Form Example</h2>

      <h4>📌 HTML Code:</h4>
      <SyntaxHighlighter language="html" style={oneLight}>
        {formCode}
      </SyntaxHighlighter>

      <h4>⚙️ Output:</h4>
      <form
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '500px',
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
