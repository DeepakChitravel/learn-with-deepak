import React from 'react';

const MultiDArray = () => {
  const code = `
#include <stdio.h>

int main() {
    int cube[2][2][2] = {
        {{1, 2}, {3, 4}},
        {{5, 6}, {7, 8}}
    };

    printf("3D Array Elements:\\n");
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            for(int k = 0; k < 2; k++) {
                printf("cube[%d][%d][%d] = %d\\n", i, j, k, cube[i][j][k]);
            }
        }
    }

    return 0;
}
  `.trim();

  const output = `
3D Array Elements:
cube[0][0][0] = 1
cube[0][0][1] = 2
cube[0][1][0] = 3
cube[0][1][1] = 4
cube[1][0][0] = 5
cube[1][0][1] = 6
cube[1][1][0] = 7
cube[1][1][1] = 8
  `.trim();

  const points = [
    { type: 'Declaration', detail: 'int cube[2][2][2] declares a 3D array with 2x2x2 size.' },
    { type: 'Access', detail: 'cube[i][j][k] accesses elements in 3D space.' }
  ];

  return (
    <div style={{
      padding: '30px',
      background: '#fff',
      borderRadius: '10px',
      fontFamily: 'monospace',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: 'auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🧊 Multi-Dimensional Array in C
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        A multi-dimensional array allows data to be stored in more than two levels, such as in 3D matrices.
      </p>

      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>🧾 Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px'
      }}>
        <code>{code}</code>
      </pre>

      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px' }}>🔍 Output</h3>
      <pre style={{
        background: '#e8f5e9',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default MultiDArray;
