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
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px 20px', backgroundColor: '#f5f7fa' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#04AA6D', marginBottom: '20px' }}>🏷️ HTML Tag Formatting Examples</h2>

        <p style={{ fontSize: '16px', marginBottom: '25px', color: '#4A5568' }}>
          Below is an example of basic HTML tags like <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;mark&gt;</code>, etc., and how they appear in code.
        </p>

        <h4 style={{ marginBottom: '10px', color: '#2D3748' }}>💻 Code Example (Colored)</h4>
        <pre
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: '20px',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '15px',
            lineHeight: '1.6',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.05)',
          }}
          dangerouslySetInnerHTML={{ __html: htmlCodeHighlighted }}
        />
      </div>
    </div>
  );
};

export default TagExample;
