import React from 'react';

const code = `
<span style="color:#999">&lt;!DOCTYPE html&gt;</span><br/>
<span style="color:#1E90FF">&lt;html&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&lt;head&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</span><span style="color:#000">Basic HTML Tags Example</span><span style="color:#1E90FF">&lt;/title&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&lt;/head&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&lt;body&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span><b>This is bold text using &lt;b&gt;</b><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span><strong>This is strong text using &lt;strong&gt;</strong><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span><i>This is italic text using &lt;i&gt;</i><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span><em>This is emphasized text using &lt;em&gt;</em><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span><u>This is underlined text using &lt;u&gt;</u><span style="color:#1E90FF">&lt;/p&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&nbsp;&nbsp;&lt;center&gt;</span>This text is centered using &lt;center&gt;<span style="color:#1E90FF">&lt;/center&gt;</span><br/>
<span style="color:#1E90FF">&nbsp;&nbsp;&lt;/body&gt;</span><br/>
<span style="color:#1E90FF">&lt;/html&gt;</span>
`;

const renderedHTML = `
  <p><b>This is bold text using &lt;b&gt;</b></p>
  <p><strong>This is strong text using &lt;strong&gt;</strong></p>
  <p><i>This is italic text using &lt;i&gt;</i></p>
  <p><em>This is emphasized text using &lt;em&gt;</em></p>
  <p><u>This is underlined text using &lt;u&gt;</u></p>
  <div style="text-align: center;">This text is centered using &lt;center&gt;</div>
`;

const BasicTags = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px 20px', backgroundColor: '#f5f7fa' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#04AA6D', marginBottom: '20px' }}>🖋️ HTML Basic Formatting Tags</h2>

        <p style={{ fontSize: '16px', marginBottom: '25px', color: '#4A5568' }}>
          This example shows how to use basic HTML formatting tags such as <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;u&gt;</code>, and more.
        </p>

        {/* Code View */}
        <h4 style={{ marginBottom: '10px', color: '#2D3748' }}>💻 Code Example</h4>
        <pre
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: '20px',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '15px',
            
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.05)',
          }}
          dangerouslySetInnerHTML={{ __html: code }}
        />

        {/* Output View */}
        <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2D3748' }}>🔍 Rendered Output</h4>
        <div
          style={{
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: '25px',
            backgroundColor: '#ffffff',
            fontSize: '16px',
            lineHeight: '1',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.05)',
          }}
          dangerouslySetInnerHTML={{ __html: renderedHTML }}
        />
      </div>
    </div>
  );
};

export default BasicTags;
