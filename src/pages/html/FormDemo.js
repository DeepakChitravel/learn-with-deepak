import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const formAttributeCode = `
<form method="POST" action="/submit">
  <!-- form elements here -->
</form>
`;

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
`;

const FormDemo = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.6 }}>
      <h1>🌐 HTML Forms Learning Module</h1>

      {/* Section: Form Attributes */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🧾 Form Tag Attributes</h2>
        <p><strong>method:</strong> Specifies how to send form-data (e.g., GET or POST)</p>
        <p><strong>action:</strong> URL where the form submits data</p>

        <h4>🔧 Example:</h4>
        <SyntaxHighlighter language="html" style={oneLight}>
          {formAttributeCode}
        </SyntaxHighlighter>
      </section>

      {/* Section: Form Controls */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🔘 Form Controls</h2>
        <ul>
          <li><strong>Text Box:</strong> &lt;input type="text" /&gt;</li>
          <li><strong>Password:</strong> &lt;input type="password" /&gt;</li>
          <li><strong>Radio Buttons:</strong> &lt;input type="radio" /&gt;</li>
          <li><strong>Checkbox:</strong> &lt;input type="checkbox" /&gt;</li>
          <li><strong>Select Box:</strong> &lt;select&gt;&lt;/select&gt;</li>
          <li><strong>Textarea:</strong> &lt;textarea&gt;&lt;/textarea&gt;</li>
          <li><strong>Submit Button:</strong> &lt;input type="submit" /&gt;</li>
        </ul>

        <h4>💡 Code Example:</h4>
        <SyntaxHighlighter language="html" style={oneLight}>
          {formControlsCode}
        </SyntaxHighlighter>
      </section>

      {/* Section: Output Preview */}
      <section>
        <h2>⚙️ Live Output</h2>
        <div style={{
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '500px'
        }}>
          <form>
            <label>Full Name:</label><br />
            <input type="text" placeholder="Enter your name" /><br /><br />

            <label>Password:</label><br />
            <input type="password" placeholder="Enter password" /><br /><br />

            <label>Gender:</label><br />
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female<br /><br />

            <label>Skills:</label><br />
            <input type="checkbox" name="skill" value="html" /> HTML
            <input type="checkbox" name="skill" value="css" /> CSS<br /><br />

            <label>Department:</label><br />
            <select>
              <option value="cs">Computer Science</option>
              <option value="math">Mathematics</option>
            </select><br /><br />

            <label>Address:</label><br />
            <textarea rows="4" cols="30" placeholder="Enter your address"></textarea><br /><br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormDemo;
