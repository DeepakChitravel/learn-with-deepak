import React from 'react';

const StructureC = () => {
  const code = `
#include <stdio.h>
#include <string.h>

// Defining a structure
struct Student {
    int id;
    char name[50];
    float marks;
};

int main() {
    struct Student s1;

    // Assigning values
    s1.id = 101;
    strcpy(s1.name, "Rahul");
    s1.marks = 87.5;

    // Displaying values
    printf("Student ID: %d\\n", s1.id);
    printf("Student Name: %s\\n", s1.name);
    printf("Student Marks: %.2f\\n", s1.marks);

    return 0;
}
  `.trim();

  const output = `
Student ID: 101
Student Name: Rahul
Student Marks: 87.50
  `.trim();

  const points = [
    { type: 'What is a Structure?', detail: 'A structure is a user-defined data type that groups related variables.' },
    { type: 'Keyword', detail: 'The keyword `struct` is used to define a structure.' },
    { type: 'Access Members', detail: 'Dot operator (.) is used to access structure members.' },
    { type: 'String Assignment', detail: 'Use `strcpy` to assign string to character arrays in structures.' },
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
      {/* Title */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '26px',
        marginBottom: '20px',
        color: '#003366',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        🧩 Structure in C
      </h2>

      {/* Description */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        This program demonstrates how to define and use a structure in C to group student data.
      </p>

      {/* Key Points */}
      <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <strong>{point.type}:</strong> {point.detail}
          </li>
        ))}
      </ul>

      {/* Code */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>💻 Example Code</h3>
      <pre style={{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px',
        whiteSpace: 'pre-wrap'
      }}>
        <code>{code}</code>
      </pre>

      {/* Output */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
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

export default StructureC;
