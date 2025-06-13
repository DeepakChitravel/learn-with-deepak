import React from 'react';

const MSWordIntro = () => {
  return (
    <div
      style={{
        padding: '30px',
        background: '#ffffff',
        borderRadius: '10px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        lineHeight: '1.7',
        color: '#333',
        maxWidth: '800px',
        margin: '40px auto',
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '26px',
          color: '#003366',
          marginBottom: '20px',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
        }}
      >
        📘 MS Word - Easy Introduction
      </h2>

      {/* Description */}
      <p>
        <strong>Microsoft Office</strong> is a suite of productivity applications made by Microsoft. It was introduced by <strong>Bill Gates</strong> on <strong>August 18, 1988</strong>, in <strong>Las Vegas</strong>.
      </p>

      <p>
        <strong>MS Word</strong> is one of the key programs in this suite. It is used to create, edit, and format documents like letters, resumes, and assignments. MS Word was first released on <strong>October 25, 1983</strong>.
      </p>

      <p><strong>In MS Word, you can:</strong></p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li>Type and format text (bold, colored, resized)</li>
        <li>Insert pictures, tables, and design elements</li>
        <li>Save files in <code>.doc</code> or <code>.docx</code> format</li>
      </ul>

      {/* Subheading */}
      <h3
        style={{
          color: '#1a237e',
          fontSize: '20px',
          marginTop: '30px',
          marginBottom: '10px',
        }}
      >
        💾 How to Save Your Work?
      </h3>

      <p>Here are two ways to save your document:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <strong>Shortcut:</strong> Press <b>Ctrl + S</b> on your keyboard.
        </li>
        <li>
          <strong>Manual:</strong> Click <em>File &gt; Save</em>, then choose the location (like Local Disk E) and give your file a name.
        </li>
      </ul>

      <p style={{ marginTop: '20px' }}>📌 <strong>Tip:</strong> Save your work often to avoid losing progress.</p>
    </div>
  );
};

export default MSWordIntro;
