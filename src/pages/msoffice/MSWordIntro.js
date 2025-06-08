import React from 'react';

const MSWordIntro = () => {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '30px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#e9f7fe',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        color: '#333',
        lineHeight: 1.8,
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#0d47a1', fontWeight: 'bold', marginBottom: '25px' }}>
        📘 MS Word - Easy Introduction
      </h2>

      <p>
        <strong>Microsoft Office</strong> is a group of computer programs made by Microsoft. It was first shown to people by <strong>Bill Gates</strong> on <strong>August 18, 1988</strong>, in <strong>Las Vegas</strong>.
      </p>

      <p>
        <strong>MS Word</strong> is one of those programs. It helps us type and create documents like letters, homework, resumes, and stories. It started on <strong>October 25, 1983</strong>.
      </p>

      <p>
        In MS Word, we can:
      </p>
      <ul>
        <li>Type and format text (make it bold, colored, or big)</li>
        <li>Add pictures, tables, and designs</li>
        <li>Save the file with <code>.doc</code> or <code>.docx</code> format</li>
      </ul>

      <h3 style={{ color: '#1b5e20', marginTop: '30px' }}>💾 How to Save Your Work?</h3>

      <p>You can save your document in two simple ways:</p>
      <ul>
        <li><strong>Shortcut:</strong> Press <b>Ctrl + S</b> on your keyboard</li>
        <li><strong>Manual:</strong> Click <em>File &gt; Save</em>, choose where to keep it (like Local Disk E or a folder), and give it a name</li>
      </ul>

      <p>📌 Tip: Always save your work often so you don’t lose it.</p>
    </div>
  );
};

export default MSWordIntro;
