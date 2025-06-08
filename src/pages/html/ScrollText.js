import React from 'react';

const marqueeCode = `<!DOCTYPE html>
<html>
<head>
  <title>Marquee Example</title>
</head>
<body>
  <marquee behavior="scroll" direction="left">Government of Tamil Nadu</marquee>
  <marquee behavior="scroll" direction="right">The State Council of Educational Research and Training</marquee>
</body>
</html>`;

const MarqueeScrollTag = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ marginBottom: '20px' }}>HTML Code: Marquee Tags</h2>

      {/* Code Block */}
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '14px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {marqueeCode}
      </pre>

      {/* Output Preview */}
      <h2 style={{ marginTop: '40px', marginBottom: '20px' }}>Output:</h2>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        <marquee behavior="scroll" direction="left">Government of Tamil Nadu</marquee>
        <br />
        <marquee behavior="scroll" direction="right">The State Council of Educational Research and Training</marquee>
      </div>
    </div>
  );
};

export default MarqueeScrollTag;
