import React from 'react';

const MarqueeScrollTag = () => {
  const code = `
<!DOCTYPE html>
<html>
<head>
  <title>Marquee Example</title>
</head>
<body>
  <marquee behavior="scroll" direction="left">Government of Tamil Nadu</marquee>
  <marquee behavior="scroll" direction="right">The State Council of Educational Research and Training</marquee>
</body>
</html>
  `.trim();

  const outputNote = `
Scrolling text effect using the <marquee> tag.
`.trim();

  const points = [
    { type: '<marquee> Tag', detail: 'Used to create scrolling text horizontally or vertically.' },
    { type: 'behavior Attribute', detail: 'Defines the scrolling behavior (scroll, slide, alternate).' },
    { type: 'direction Attribute', detail: 'Specifies the direction of scroll (left, right, up, down).' },
    { type: 'Deprecated Element', detail: 'It is deprecated in HTML5 and not recommended for modern web development.' },
    { type: 'Legacy Use', detail: 'Still used in legacy systems or for simple animations in specific contexts.' },
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
        &lt;marquee&gt; Tag in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        The <code>&lt;marquee&gt;</code> tag is used to scroll text or images across a web page. Though visually appealing,
        it's obsolete and not recommended in modern HTML.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <div style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px'
      }}>
        <marquee behavior="scroll" direction="left">Government of Tamil Nadu</marquee>
        <br />
        <marquee behavior="scroll" direction="right">The State Council of Educational Research and Training</marquee>
      </div>
    </div>
  );
};

export default MarqueeScrollTag;
