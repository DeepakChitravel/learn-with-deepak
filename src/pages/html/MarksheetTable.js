import React from 'react';

const MarksheetTable = () => {
  const code = `
<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
  <thead>
    <tr style="background-color: #f4b400;">
      <th rowspan="2" style="width: 100px;">Roll No</th>
      <th rowspan="2" style="width: 150px;">Name</th>
      <th colspan="3" style="height: 50px;">Marks</th>
      <th rowspan="2" style="width: 100px;">Total</th>
    </tr>
    <tr style="background-color: #ffe082;">
      <th>Math</th>
      <th>Science</th>
      <th>English</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>Aarav</td>
      <td>87</td>
      <td>90</td>
      <td>85</td>
      <td>262</td>
    </tr>
    <tr style="background-color: #f1f8e9;">
      <td>102</td>
      <td>Bhuvana</td>
      <td>78</td>
      <td>88</td>
      <td>82</td>
      <td>248</td>
    </tr>
    <tr>
      <td>103</td>
      <td>Charan</td>
      <td>92</td>
      <td>89</td>
      <td>95</td>
      <td>276</td>
    </tr>
  </tbody>
</table>
  `.trim();

  const points = [
    { type: 'Rowspan', detail: 'Used to merge cells vertically across rows using the `rowspan` attribute.' },
    { type: 'Colspan', detail: 'Used to merge cells horizontally across columns using the `colspan` attribute.' },
    { type: 'Styling Tables', detail: 'Inline styles add colors, spacing, and borders for visual enhancement.' },
    { type: 'Border Collapse', detail: '`border-collapse: collapse;` merges table borders cleanly into single lines.' },
    { type: 'Cell Alignment', detail: 'The `text-align: center;` aligns content in cells centrally.' },
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7'
    }}>
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        📋 HTML Table: Rowspan, Colspan, Styling
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This example demonstrates how to use <code>rowspan</code>, <code>colspan</code>, and inline styles in an HTML table to display a marksheet.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* HTML Code */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>HTML Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Output</h3>
      <div style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px'
      }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
};

export default MarksheetTable;
