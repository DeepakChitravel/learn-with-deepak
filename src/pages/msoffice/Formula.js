import React from 'react';

const Formula = () => {
  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '750px',
      margin: '40px auto'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '25px',
        color: '#0d47a1',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        📝 MS Word Formula & Shortcuts
      </h2>

      {/* RAND() Function */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>📌 RAND() Function</h3>
      <p>
        The <code>=RAND()</code> function in MS Word generates placeholder text paragraphs.
        By default, it creates several paragraphs of sample text.
      </p>
      <p>
        You can also control the number of paragraphs and sentences per paragraph:
      </p>
      <pre style={{
        background: '#f4f4f4',
        padding: '10px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>=RAND(paragraphs, sentences)</code>
      </pre>
      <p>Example: <code>=RAND(3,4)</code> will generate 3 paragraphs with 4 sentences each.</p>

      {/* Text Selection Shortcut */}
      <h3 style={{ color: '#1b5e20', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>🎯 Text Selection Shortcuts</h3>
      <p>Use <strong>Ctrl + Shift + Arrow Keys</strong> to select text quickly:</p>
      <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
        <li><code>Ctrl + Shift + Right/Left Arrow</code> — Select word by word horizontally</li>
        <li><code>Ctrl + Shift + Up/Down Arrow</code> — Select paragraph by paragraph vertically</li>
      </ul>

      {/* Text Alignment */}
      <h3 style={{ color: '#ff6f00', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>📐 Text Alignment Shortcuts</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Left Align</strong> (<code>Ctrl + L</code>) — Aligns text to the left (ragged right)</li>
        <li><strong>Right Align</strong> (<code>Ctrl + R</code>) — Aligns text to the right (ragged left)</li>
        <li><strong>Center Align</strong> (<code>Ctrl + E</code>) — Centers text between margins</li>
        <li><strong>Justify Align</strong> (<code>Ctrl + J</code>) — Aligns text evenly on both sides</li>
      </ul>
    </div>
  );
};

export default Formula;
