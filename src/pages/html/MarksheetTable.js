import React from 'react';

const marksheetCode = `<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
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
</table>`;

const MarksheetTable = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px' }}>
      <h2>📋 HTML Table with Rowspan, Colspan, Height, Width & Colors</h2>
      <p>This sample shows a student marksheet using rowspan and colspan with styling.</p>

      <h3>💻 HTML Code:</h3>
      <pre style={styles.codeBlock}>{marksheetCode}</pre>

      <h3>🔍 Output:</h3>
      <div
        style={styles.outputBox}
        dangerouslySetInnerHTML={{ __html: marksheetCode }}
      />
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#272822',
    color: '#f8f8f2',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
  },
  outputBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    marginTop: '20px',
  },
};

export default MarksheetTable;
