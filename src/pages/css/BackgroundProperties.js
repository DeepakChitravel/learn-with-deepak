import React from 'react';

const bgBoxStyle = {
  width: '250px',
  height: '150px',
  border: '2px solid #333',
  margin: '20px',
  backgroundImage: 'url(https://via.placeholder.com/100)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100px 100px',
};

const codeBoxStyle = {
  backgroundColor: '#f9f9f9',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontFamily: 'Courier New',
  whiteSpace: 'pre-wrap',
  marginBottom: '10px',
};

const positions = [
  'left top', 'left center', 'left bottom',
  'center top', 'center center', 'center bottom',
  'right top', 'right center', 'right bottom',
];

const BackgroundProperties = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI' }}>
      <h2>🌄 CSS Background Position</h2>
      <p>
        The <code>background-position</code> property sets the starting position of a background image within an element. It accepts horizontal and vertical values like <strong>left</strong>, <strong>center</strong>, <strong>right</strong> and <strong>top</strong>, <strong>bottom</strong>.
      </p>

      {positions.map((position, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h4>Position: {position}</h4>
          <div style={codeBoxStyle}>
            {`div {
  background-image: url("image.jpg");
  background-repeat: no-repeat;
  background-position: ${position};
}`}
          </div>
          <div
            style={{
              ...bgBoxStyle,
              backgroundPosition: position,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#333',
            }}
          >
            {position}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundProperties;
