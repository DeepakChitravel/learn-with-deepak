import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const formCode = `
<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email ID" />
  <input type="number" placeholder="Age" />
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female
  <textarea placeholder="Address"></textarea>
  <select>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </select>
  <input type="file" />
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
</form>
`;

const RegistrationFormDemo = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>📋 Registration Form Example</h2>

      <h4>📌 HTML Code:</h4>
      <SyntaxHighlighter language="html" style={oneLight}>
        {formCode}
      </SyntaxHighlighter>

      <h4>⚙️ Output:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        onReset={() => setSubmitted(false)}
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '600px',
        }}
      >
        <label>Name:</label><br />
        <input type="text" name="name" required /><br /><br />

        <label>Email ID:</label><br />
        <input type="email" name="email" required /><br /><br />

        <label>Age:</label><br />
        <input type="number" name="age" required /><br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female<br /><br />

        <label>Address:</label><br />
        <textarea name="address" rows="4" cols="40" required></textarea><br /><br />

        <label>Course:</label><br />
        <select name="course" required>
          <option value="">-- Select Course --</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select><br /><br />

        <label>Upload Resume:</label><br />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" required /><br /><br />

        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" style={{ marginLeft: 10 }} />
      </form>

      {submitted && (
        <p style={{ color: 'green', marginTop: 20 }}>
          ✅ Registration submitted successfully!
        </p>
      )}
    </div>
  );
};

export default RegistrationFormDemo;
