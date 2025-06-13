import React from 'react';

const ConditionalFormatting = () => {
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
        🎨 Conditional Formatting
      </h2>

      {/* Description */}
      <p>
        Conditional formatting in Excel is a feature that allows you to apply formatting—such as colors, icons, or data bars—automatically to cells that meet certain criteria. This helps you quickly spot patterns and trends.
      </p>

      {/* Key Points */}
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li>Highlights cells based on rules and conditions.</li>
        <li>Useful for visualizing trends, comparisons, and outliers in data.</li>
        <li>
          <strong>Examples:</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li>Highlight sales over a target amount.</li>
            <li>Color-code scores: <span style={{ color: 'red' }}>red</span> for fail, <span style={{ color: 'green' }}>green</span> for pass.</li>
            <li>Use visual tools like data bars, color scales, and icon sets.</li>
          </ul>
        </li>
        <li>
          <strong>Steps to Apply:</strong> 
          Select the desired cells → Go to <b>Home &gt; Conditional Formatting</b> → Choose a rule → Customize and apply.
        </li>
      </ul>
    </div>
  );
};

export default ConditionalFormatting;
