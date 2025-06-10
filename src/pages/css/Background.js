import React from 'react';

const boxStyle = {
  padding: '10px',
  marginBottom: '30px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontFamily: 'Segoe UI',
};

const codeStyle = {
  background: '#f8f9fa',
  padding: '10px',
  borderRadius: '5px',
  fontFamily: 'Courier New',
  whiteSpace: 'pre-wrap',
  marginTop: '10px',
};

const Background = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: '20px' }}>🎨 CSS Background Properties</h2>

      {/* Background Color */}
      <div style={boxStyle}>
        <h4>1️⃣ Background Color</h4>
        <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
          This box has a <strong>background-color</strong>.
        </div>
        <div style={codeStyle}>
          {`div {
  background-color: lightblue;
}`}
        </div>
      </div>

      {/* Background Color with Hex/RGB */}
      <div style={boxStyle}>
        <h4>2️⃣ Background Color: Hex, RGB</h4>
        <div style={{ backgroundColor: '#FFDD99', padding: '30px' }}>
          Background using HEX color
        </div>
        <div style={codeStyle}>
          {`div {
  background-color: #FFDD99;
}

div {
  background-color: rgb(200, 240, 150);
}`}
        </div>
      </div>

      {/* Background Image */}
      <div style={boxStyle}>
        <h4>3️⃣ Background Image</h4>
        <div
          style={{
            backgroundImage: 'url(https://picsum.photos/300/100)',
            height: '100px',
            backgroundSize: 'cover',
          }}
        />
        <div style={codeStyle}>
          {`div {
  background-image: url("image.jpg");
}`}
        </div>
      </div>

      {/* Background Repeat */}
      <div style={boxStyle}>
        <h4>4️⃣ Background Repeat</h4>
        <div
          style={{
            backgroundImage: 'url(https://picsum.photos/50)',
            height: '100px',
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div style={codeStyle}>
          {`div {
  background-repeat: repeat-x; /* or repeat-y, no-repeat */
}`}
        </div>
      </div>

      {/* Background Attachment */}
      <div style={boxStyle}>
        <h4>5️⃣ Background Attachment</h4>
        <div
          style={{
            backgroundImage: 'url(https://picsum.photos/300/150)',
            height: '200px',
            overflowY: 'scroll',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
        >
          Scroll inside this box to see background stay fixed.
          <div style={{ height: '300px' }}></div>
        </div>
        <div style={codeStyle}>
          {`div {
  background-attachment: fixed;
}`}
        </div>
      </div>

      {/* Background Position */}
      <div style={boxStyle}>
        <h4>6️⃣ Background Position</h4>
        <div
          style={{
            backgroundImage: 'url(https://picsum.photos/200)',
            height: '100px',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
        <div style={codeStyle}>
          {`div {
  background-position: right top;
}`}
        </div>
      </div>
    </div>
  );
};

export default Background;
