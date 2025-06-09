import React from 'react';

const CSSLinkTag = () => {
  const inlineStyle = {
    color: 'blue',
    fontSize: '18px',
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🎨 CSS Styling Types: Inline, Internal, and External</h2>

      {/* ---------- Inline CSS ---------- */}
      <section style={{ marginBottom: '40px' }}>
        <h4>1️⃣ Inline CSS</h4>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
{`<p style={{ color: 'blue', fontSize: '18px' }}>
  This is inline styled text.
</p>`}
        </pre>
        <div style={inlineStyle}>This is inline styled text.</div>
      </section>

      {/* ---------- Internal CSS ---------- */}
      <section style={{ marginBottom: '40px' }}>
        <h4>2️⃣ Internal CSS</h4>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
{`<style>
  { \`
    .internal-style {
      color: darkgreen;
      font-weight: bold;
      font-size: 20px;
    }
  \` }
</style>

<p className="internal-style">
  This is internal styled text.
</p>`}
        </pre>
        <style>
          {`
            .internal-style {
              color: darkgreen;
              font-weight: bold;
              font-size: 20px;
            }
          `}
        </style>
        <p className="internal-style">This is internal styled text.</p>
      </section>

      {/* ---------- External CSS (Simulated) ---------- */}
      <section>
        <h4>3️⃣ External CSS (Simulated)</h4>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
{`/* styles.css */
.external-style {
  color: purple;
  background-color: #f3e5f5;
  padding: 10px;
  border-left: 5px solid purple;
  font-size: 18px;
}

/* Used in component */
<p className="external-style">
  This is external styled text.
</p>`}
        </pre>
        <style>
          {`
            .external-style {
              color: purple;
              background-color: #f3e5f5;
              padding: 10px;
              border-left: 5px solid purple;
              font-size: 18px;
            }
          `}
        </style>
        <p className="external-style">This is external styled text.</p>
      </section>
    </div>
  );
};

export default CSSLinkTag;
