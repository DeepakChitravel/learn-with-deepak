import React from 'react';

const Practice = () => {
  const labelStyle = {
    paddingRight: '10px', // like pressing Tab to space between label and colon
    fontWeight: '600',    // corresponds to Ctrl + B (Bold) in Word
    whiteSpace: 'nowrap', // no wrapping, like preventing line breaks inside label
    color: '#2c3e50',
    fontSize: '16px',
    verticalAlign: 'top',
  };

  const colonStyle = {
    paddingRight: '10px', // spacing after colon (like Tab key)
    fontWeight: '600',    // bold colon (Ctrl + B)
    color: '#2c3e50',
    fontSize: '16px',
    verticalAlign: 'top',
  };

  const valueStyle = {
    fontWeight: '400',    // normal font weight (no bold)
    fontSize: '16px',
    color: '#34495e',
  };

  const shortcutStyle = {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginTop: '4px',
  };

  const Row = ({ label, value, shortcut }) => (
    <tr>
      <td style={labelStyle}>{label}</td>
      <td style={colonStyle}>:</td>
      <td>
        <div style={valueStyle}>{value}</div>
        {shortcut && <div style={shortcutStyle}>{shortcut}</div>}
      </td>
    </tr>
  );

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
        padding: '30px',
        backgroundColor: '#f9fbfc',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #dce3e8',
      }}
    >
      <h2
        style={{
          textAlign: 'center',          // center align (Ctrl + E)
          fontWeight: '700',            // bold (Ctrl + B)
          textDecoration: 'underline double', // double underline (Ctrl + Shift + D)
          marginBottom: '40px',
          fontSize: '28px',
          color: '#1f3d7a',
          letterSpacing: '2px',
        }}
      >
        BIO-DATA
      </h2>

      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 15px' }}>
        <tbody>
          <Row label="Name" value="Deepak C" />
          <Row label="Father's Name" value="Chitravel"  />
          <Row label="Mother's Name" value="Dhanalakshmi" />
          <Row label="Date of Birth" value="13/12/2002"  />
          <Row label="Gender" value="Male"  />
          <Row label="Religion" value="Hindu" />
          <Row label="Nationality" value="Indian"  />
          <Row label="Marital Status" value="UnMarried"  />
          <Row label="Blood Group" value="O+"  />
          <Row label="Aadhar Number" value="xxxx xxxx xxxx" />
          <Row label="Mobile No" value="+91 934560XXXX"  />
          <Row label="Email ID" value="deepakchitravel@gmail.com" />
          <Row label="Languages Known" value="Tamil, English" />
        </tbody>
      </table>

      <div style={{ marginTop: '30px', fontSize: '13px', color: '#555' }}>
        <b>MS Word Shortcut Keys Used in Formatting:</b><br />
        - <b>Ctrl + B:</b> Bold text<br />
        - <b>Ctrl + I:</b> Italic text<br />
        - <b>Ctrl + Shift + D:</b> Double underline<br />
        - <b>Ctrl + E:</b> Center align (used in heading)<br />
        - <b>Ctrl + Shift + Left Arrow:</b> Select word or phrase<br />
        - <b>Tab:</b> Used for spacing<br />
        - <b>Ctrl + Shift + P:</b> Change font size<br />
      </div>
    </div>
  );
};

export default Practice;
