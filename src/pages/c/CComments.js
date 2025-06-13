import React from 'react';

const ConditionalFormatting = () => {
  const points = [
    { type: 'Purpose', detail: 'Highlights cells based on specific rules or conditions.' },
    { type: 'Benefits', detail: 'Helps visualize patterns, trends, and outliers in data.' },
    { type: 'Examples', detail: 'Highlight sales over a target, color-code exam results.' },
    { type: 'Visual Cues', detail: 'Uses colors, icons, or bars to represent data meaningfully.' },
    { type: 'Steps to Use', detail: 'Select cells → Go to Home > Conditional Formatting → Choose rule.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'Segoe UI, sans-serif',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '700px',
      margin: '40px auto'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#0d47a1',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🎨 Conditional Formatting in MS Excel
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Conditional Formatting in Excel lets you automatically format cells based on the values they contain.
        It enhances the readability and visual appeal of your spreadsheet by highlighting important information.
      </p>

      {/* Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Example Output */}
      <h3 style={{ color: '#1b5e20', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
        ✅ Example Use Cases
      </h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{`
- Mark students scoring below 35 in red.
- Highlight sales over ₹50,000 in green.
- Use icon sets to display trends visually.
        `.trim()}</code>
      </pre>
    </div>
  );
};

export default ConditionalFormatting;
