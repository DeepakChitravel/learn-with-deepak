import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const formAttributeCode = `
<form method="POST" action="/submit">
  <!-- form elements here -->
</form>
`.trim();

const formControlsCode = `
<input type="text" placeholder="Enter your name" />
<input type="password" placeholder="Enter password" />
<input type="radio" name="gender" value="male" /> Male
<input type="checkbox" name="skill" value="html" /> HTML
<select>
  <option value="cs">Computer Science</option>
</select>
<textarea rows="4" cols="30"></textarea>
<input type="submit" value="Submit" />
`.trim();

const FormDemo = () => {
  return (
    <div style={{
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      lineHeight: 1.7,
      maxWidth: '900px',
      margin: '0 auto',
      color: '#333'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '30px', color: '#003366' }}>
        🌐 HTML Forms Learning Module
      </h1>

      {/* Section: Form Tag Attributes */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#1a237e' }}>🧾 Form Tag Attributes</h2>
        <p><strong>method:</strong> Specifies how to send form-data (e.g., <code>GET</code> or <code>POST</code>).</p>
        <p><strong>action:</strong> Defines the URL where the form data is sent after submission.</p>

        <h4 style={{ marginTop: '20px', color: '#37474f' }}>🔧 Example:</h4>
        <SyntaxHighlighter language="html" style={oneLight}>
          {formAttributeCode}
        </SyntaxHighlighter>
      </section>

      {/* Section: Form Controls */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#1a237e' }}>🔘 Form Controls</h2>
        <ul>
          <li><strong>Text Box:</strong> <code>&lt;input type="text" /&gt;</code></li>
          <li><strong>Password:</strong> <code>&lt;input type="password" /&gt;</code></li>
          <li><strong>Radio Button:</strong> <code>&lt;input type="radio" /&gt;</code></li>
          <li><strong>Checkbox:</strong> <code>&lt;input type="checkbox" /&gt;</code></li>
          <li><strong>Select Box:</strong> <code>&lt;select&gt;&lt;/select&gt;</code></li>
          <li><strong>Textarea:</strong> <code>&lt;textarea&gt;&lt;/textarea&gt;</code></li>
          <li><strong>Submit Button:</strong> <code>&lt;input type="submit" /&gt;</code></li>
        </ul>

        <h4 style={{ marginTop: '20px', color: '#37474f' }}>💡 Code Example:</h4>
        <SyntaxHighlighter language="html" style={oneLight}>
          {formControlsCode}
        </SyntaxHighlighter>
      </section>

      {/* Section: Output */}
      <section>
        <h2 style={{ color: '#1a237e' }}>⚙️ Live Output</h2>
        <div style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '25px',
          borderRadius: '10px',
          maxWidth: '500px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <form>
            <label><strong>Full Name:</strong></label><br />
            <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '8px', margin: '8px 0' }} /><br />

            <label><strong>Password:</strong></label><br />
            <input type="password" placeholder="Enter password" style={{ width: '100%', padding: '8px', margin: '8px 0' }} /><br />

            <label><strong>Gender:</strong></label><br />
            <input type="radio" name="gender" value="male" /> Male{' '}
            <input type="radio" name="gender" value="female" /> Female<br /><br />

            <label><strong>Skills:</strong></label><br />
            <input type="checkbox" name="skill" value="html" /> HTML{' '}
            <input type="checkbox" name="skill" value="css" /> CSS<br /><br />

            <label><strong>Department:</strong></label><br />
            <select style={{ width: '100%', padding: '8px', margin: '8px 0' }}>
              <option value="cs">Computer Science</option>
              <option value="math">Mathematics</option>
            </select><br />

            <label><strong>Address:</strong></label><br />
            <textarea rows="4" cols="30" placeholder="Enter your address" style={{ width: '100%', padding: '8px' }}></textarea><br /><br />

            <input type="submit" value="Submit" style={{
              padding: '10px 20px',
              backgroundColor: '#1a237e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }} />
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormDemo;
