import React from 'react';

const htmlCode = `<!DOCTYPE html>
<html>
<head>
  <title>Video and Audio Demo</title>
</head>
<body>

  <h2>🎬 Video and Audio Tag Demo</h2>

  <!-- Video -->
  <h3>Sample Video</h3>
  <video width="480" height="270" controls style="border-radius:8px; box-shadow:0 0 8px rgba(0,0,0,0.2);">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- Audio -->
  <h3>Sample Audio</h3>
  <audio controls style="width:300px;">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

</body>
</html>`;

const MediaTag = () => {
  return (
    <div style={{ padding: 30, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2>🎬 Video and Audio Tag Demo</h2>

      {/* Display HTML code as text */}
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '14px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          marginBottom: '40px',
        }}
      >
        {htmlCode}
      </pre>

      {/* Render the actual video and audio */}
      <div>
        <h3>Sample Video</h3>
        <video
          width="480"
          height="270"
          controls
          style={{ borderRadius: 8, boxShadow: '0 0 8px rgba(0,0,0,0.2)', marginBottom: 20 }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <h3>Sample Audio</h3>
        <audio controls style={{ width: '300px' }}>
          <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MediaTag;
