import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const htmlCode = `
<!DOCTYPE html>
<html>
<head>
  <title>Video and Audio Demo</title>
</head>
<body>

  <h2>🎬 Video and Audio Tag Demo</h2>

  <!-- Video -->
  <h3>Sample Video</h3>
  <video width="480" height="270" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- Audio -->
  <h3>Sample Audio</h3>
  <audio controls>
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

</body>
</html>
`.trim();

const MediaTag = () => {
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
        🎬 Video and Audio Tags in HTML
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        HTML5 introduced native support for media playback through the <code>&lt;video&gt;</code> and 
        <code> &lt;audio&gt;</code> tags. These allow embedding multimedia content directly into web pages.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        <li><strong>&lt;video&gt; Tag:</strong> Used to embed video files. Requires at least one <code>&lt;source&gt;</code> tag.</li>
        <li><strong>&lt;audio&gt; Tag:</strong> Embeds audio clips. Also supports multiple formats via <code>&lt;source&gt;</code> tags.</li>
        <li><strong>Controls:</strong> The <code>controls</code> attribute adds play/pause and volume options.</li>
        <li><strong>Browser Support:</strong> Always provide fallback text for unsupported browsers.</li>
      </ul>

      {/* Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Code Example</h3>
      <div style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        overflowX: 'auto',
        border: '1px solid #e0e0e0'
      }}>
        <SyntaxHighlighter language="html" style={oneLight} customStyle={{
          margin: 0,
          padding: '20px',
          fontSize: '14px',
        }}>
          {htmlCode}
        </SyntaxHighlighter>
      </div>

      {/* Output Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>Rendered Output</h3>

      {/* Video Output */}
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '10px' }}>🎥 Sample Video</h4>
        <video
          width="480"
          height="270"
          controls
          style={{
            borderRadius: '8px',
            boxShadow: '0 0 8px rgba(0,0,0,0.2)'
          }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Audio Output */}
      <div>
        <h4 style={{ marginBottom: '10px' }}>🔊 Sample Audio</h4>
        <audio controls style={{
          width: '300px',
          boxShadow: '0 0 6px rgba(0,0,0,0.1)',
          borderRadius: '4px'
        }}>
          <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MediaTag;
