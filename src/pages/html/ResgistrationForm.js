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
`.trim();

const RegistrationFormDemo = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      {/* Heading */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        📋 Registration Form in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This form uses various input types including text, email, number, radio buttons, textarea, select dropdown, file upload, and action buttons.
      </p>

      {/* Code Example */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧾 HTML Code:</h3>
      <div style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        overflowX: 'auto',
        border: '1px solid #e0e0e0',
        marginBottom: '30px'
      }}>
        <SyntaxHighlighter language="html" style={oneLight} customStyle={{ margin: 0, padding: '20px', fontSize: '14px' }}>
          {formCode}
        </SyntaxHighlighter>
      </div>

      {/* Form Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '15px' }}>🖥️ Form Output:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        onReset={() => setSubmitted(false)}
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '25px',
          borderRadius: '10px',
          maxWidth: '600px',
          marginBottom: '20px'
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label><strong>Name:</strong></label><br />
          <input type="text" name="name" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Email ID:</strong></label><br />
          <input type="email" name="email" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Age:</strong></label><br />
          <input type="number" name="age" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Gender:</strong></label><br />
          <label><input type="radio" name="gender" value="male" /> Male</label>{' '}
          <label><input type="radio" name="gender" value="female" /> Female</label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Address:</strong></label><br />
          <textarea name="address" rows="4" cols="40" required style={{ ...inputStyle, resize: 'none' }}></textarea>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Course:</strong></label><br />
          <select name="course" required style={inputStyle}>
            <option value="">-- Select Course --</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label><strong>Upload Resume:</strong></label><br />
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
        </div>

        <div>
          <input type="submit" value="Submit" style={buttonStyle} />
          <input type="reset" value="Reset" style={{ ...buttonStyle, backgroundColor: '#e0e0e0', marginLeft: 10 }} />
        </div>
      </form>

      {/* Success Message */}
      {submitted && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          ✅ Registration submitted successfully!
        </p>
      )}
    </div>
  );
};

// Input field style
const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '14px',
  marginTop: '4px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

// Button style
const buttonStyle = {
  padding: '8px 16px',
  fontSize: '14px',
  backgroundColor: '#1e88e5',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default RegistrationFormDemo;
