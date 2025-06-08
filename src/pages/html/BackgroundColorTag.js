import React from 'react';

const code = `<!DOCTYPE html>
<html>
<head>
  <title>Background Color Example</title>
</head>
<body style="background-color: lightyellow;">
  <h2>This page has a light yellow background using <code>style</code></h2>

  <hr>

  <!-- Deprecated example using bgcolor -->
  <table bgcolor="lightblue" width="100%" cellspacing="0" cellpadding="10">
    <tr>
      <td>This section uses the <code>bgcolor</code> attribute (deprecated)</td>
    </tr>
  </table>
</body>
</html>`;

const BackgroundColorTag = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', backgroundColor: '#f8f8f8' }}>
      <h2>&lt;body&gt; Background Color Example</h2>

      {/* Code Display */}
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
        {code}
      </pre>

      {/* Output Preview */}
      <h2 style={{ marginTop: '30px' }}>Output:</h2>
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginTop: '10px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default BackgroundColorTag;
