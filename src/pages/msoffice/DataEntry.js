import React from 'react';

const DataEntry = () => {
  const sectionStyle = {
    marginTop: '24px',
    padding: '16px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    borderLeft: '5px solid #28a745',
  };

  const headingStyle = {
    color: '#1e5631',
    fontWeight: '700',
    fontSize: '22px',
    marginBottom: '10px',
  };

  const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
    color: '#333',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#1e5631', textAlign: 'center', marginBottom: '30px' }}>🧾 Excel Data Entry Form</h2>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>📌 Why Use Data Entry Form?</h3>
        <ul style={listStyle}>
          <li>Faster and easier data entry in large tables.</li>
          <li>No need to scroll up/down or left/right constantly.</li>
          <li>Reduces typing errors and mistakes.</li>
          <li>More user-friendly than typing directly into cells.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>❌ Problems Without Form</h3>
        <ul style={listStyle}>
          <li>⏳ Time-consuming for large datasets.</li>
          <li>⚠️ Higher chances of error.</li>
          <li>📄 Hard to keep track of column headers when scrolling.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>✅ Steps to Enable Data Entry Form</h3>
        <ul style={listStyle}>
          <li>Press <b>Windows + R</b>, type <b>excel</b>, and hit <b>OK</b>.</li>
          <li>Open a new or existing Excel workbook.</li>
          <li>Click on <b>File</b> → <b>Options</b>.</li>
          <li>Go to <b>Quick Access Toolbar</b>.</li>
          <li>Under <b>Choose commands from</b>, select <b>All Commands</b>.</li>
          <li>Scroll and find <b>Form</b>.</li>
          <li>Click <b>Add »</b> to add Form to your toolbar.</li>
          <li>Click <b>OK</b>.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>🧮 How to Use the Data Entry Form</h3>
        <ul style={listStyle}>
          <li>Create a table with column headers (Name, Age, Email, etc.).</li>
          <li>Select any cell inside the table.</li>
          <li>Click the new <b>Form</b> button from the Quick Access Toolbar.</li>
          <li>A form window will open. You can now enter data easily.</li>
          <li>Use <b>New</b> to add entries, <b>Find</b> to search, or <b>Delete</b> to remove records.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>⭐ Benefits</h3>
        <ul style={listStyle}>
          <li>Saves time for long spreadsheets.</li>
          <li>Accurate and consistent data entry.</li>
          <li>No need to scroll or click each cell manually.</li>
          <li>Perfect for data entry operators and form-based inputs.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataEntry;
