import React from 'react';

const htmlCodeHighlighted = `
<span style="color:#999">&lt;!DOCTYPE html&gt;</span><br/>
<span style="color:#1E90FF">&lt;html&gt;</span><br/>
&nbsp;&nbsp;<span style="color:#1E90FF">&lt;head&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;title&gt;</span><span style="color:#000">HTML Formatting Example</span><span style="color:#1E90FF">&lt;/title&gt;</span><br/>
&nbsp;&nbsp;<span style="color:#1E90FF">&lt;/head&gt;</span><br/>
&nbsp;&nbsp;<span style="color:#1E90FF">&lt;body&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;h1&gt;</span><span style="color:#000">This is an &lt;h1&gt; tag</span><span style="color:#1E90FF">&lt;/h1&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><b>This text is bold using &lt;b&gt; tag</b><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><i>This text is italic using &lt;i&gt; tag</i><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><u>This text is underlined using &lt;u&gt; tag</u><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><strong>This is strong using &lt;strong&gt; tag</strong><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><em>This is emphasized using &lt;em&gt; tag</em><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><mark>This is highlighted using &lt;mark&gt; tag</mark><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span>This is normal text with a <sub>subscript</sub> and <sup>superscript</sup><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span><marquee>This text is moving using the &lt;marquee&gt; tag</marquee><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span>This is <ins>inserted</ins> and <del>deleted</del><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#1E90FF">&lt;p&gt;</span>Visit <a href="#">Example.com</a> using &lt;a&gt; tag<span style="color:#1E90FF">&lt;/p&gt;</span><br/>
&nbsp;&nbsp;<span style="color:#1E90FF">&lt;/body&gt;</span><br/>
<span style="color:#1E90FF">&lt;/html&gt;</span>
`;

const TagExample = () => {
  return (
    <div style={{
      padding: '30px',
      background: '#ffffff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      lineHeight: '1.7',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🏷️ HTML Tag Formatting Example
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px', color: '#333' }}>
        Below is an example showing how various HTML formatting tags like <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, 
        <code>&lt;mark&gt;</code>, and more are used in an HTML page.
      </p>

      {/* Code Snippet */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>💻 Code Snippet</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '20px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontSize: '15px',
        border: '1px solid #ddd'
      }}>
        <code dangerouslySetInnerHTML={{ __html: htmlCodeHighlighted }} />
      </pre>

      {/* Output Preview */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', margin: '30px 0 10px' }}>🖥️ Output</h3>
      <div style={{
        background: '#f9fbe7',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #cddc39',
        fontSize: '16px',
        lineHeight: '1.8'
      }}>
        <h1>This is an &lt;h1&gt; tag</h1>
        <p><b>This text is bold using &lt;b&gt; tag</b></p>
        <p><i>This text is italic using &lt;i&gt; tag</i></p>
        <p><u>This text is underlined using &lt;u&gt; tag</u></p>
        <p><strong>This is strong using &lt;strong&gt; tag</strong></p>
        <p><em>This is emphasized using &lt;em&gt; tag</em></p>
        <p><mark>This is highlighted using &lt;mark&gt; tag</mark></p>
        <p>This is normal text with a <sub>subscript</sub> and <sup>superscript</sup></p>
        <p><marquee>This text is moving using the &lt;marquee&gt; tag</marquee></p>
        <p>This is <ins>inserted</ins> and <del>deleted</del></p>
        <p>Visit <a href="#">Example.com</a> using &lt;a&gt; tag</p>
      </div>
    </div>
  );
};

export default TagExample;
