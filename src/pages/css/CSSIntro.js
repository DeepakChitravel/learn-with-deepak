import React from 'react';

const CSSIntro = () => {
  const syntaxExample = `h1 { color: red; }`;

  const textProps = [
    { type: 'Color', value: 'Predefined Color Name', example: `h1 { color: red; }` },
    { type: 'Text Align', value: 'left | right | center | justify', example: `h1 { text-align: justify; }` },
    { type: 'Font Family', value: 'Font Name', example: `h1 { font-family: 'Times New Roman'; }` },
    { type: 'Font Style', value: 'normal | italic', example: `p { font-style: italic; }` },
    { type: 'Font Weight', value: 'normal | bold', example: `p { font-weight: bold; }` },
    { type: 'Font Size', value: 'Size in pixels', example: `h1 { font-size: 14px; }` },
  ];

  const bgBorderProps = [
    { type: 'Background Color', value: 'Color Name', example: `body { background-color: blue; }` },
    { type: 'Border', value: '10px solid red', example: `h1 { border: 10px solid red; }` },
    { type: 'Background Image', value: 'URL', example: `body { background-image: url('image.jpg'); }` },
    { type: 'Background Position', value: 'left | right | center', example: `body { background-position: left; }` },
  ];

  const marginProps = [
    { type: 'Margin Top', value: 'Size in pixels', example: `h1 { margin-top: 50px; }` },
    { type: 'Margin Bottom', value: 'Size in pixels', example: `h1 { margin-bottom: 50px; }` },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
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
        CSS Introduction
      </h2>

      {/* Intro Paragraphs */}
      <p style={{ fontSize: '16px' }}>
        CSS, or <strong>Cascading Style Sheet</strong>, was invented by <strong>Håkon Wium Lie</strong> in <strong>1994</strong> at <strong>CERN</strong>. It was developed to separate content (HTML) from design (CSS), improving flexibility and maintainability.
      </p>
      <p style={{ fontSize: '16px' }}>
        Before CSS, formatting was done directly in HTML using limited tags. CSS now lets us control layout, color, fonts, spacing, and more — even across multiple pages with a single stylesheet.
      </p>

      <hr />

      {/* CSS Facts */}
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Full Form:</strong> Cascading Style Sheet</li>
        <li><strong>Developer:</strong> Håkon Wium Lie</li>
        <li><strong>Released Date:</strong> October 10, 1994</li>
      </ul>

      {/* Syntax */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>CSS Syntax</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{syntaxExample}</code>
      </pre>

      {/* Text Properties */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>
        CSS Text Formatting Properties
      </h3>
      <ul style={{ paddingLeft: '20px' }}>
        {textProps.map((prop, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{prop.type}</strong> — {prop.value}<br />
            <code>{prop.example}</code>
          </li>
        ))}
      </ul>

      {/* Background & Border */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>
        Background & Border Properties
      </h3>
      <ul style={{ paddingLeft: '20px' }}>
        {bgBorderProps.map((prop, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{prop.type}</strong> — {prop.value}<br />
            <code>{prop.example}</code>
          </li>
        ))}
      </ul>

      {/* Margin Properties */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '25px', marginBottom: '10px' }}>
        Margin Properties
      </h3>
      <ul style={{ paddingLeft: '20px' }}>
        {marginProps.map((prop, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{prop.type}</strong> — {prop.value}<br />
            <code>{prop.example}</code>
          </li>
        ))}
      </ul>

      <p className="text-center mt-4" style={{ fontStyle: 'italic', color: '#777' }}>
        Thank you for learning CSS!
      </p>
    </div>
  );
};

export default CSSIntro;
