import React from 'react';

const EnumDatatype = () => {
  const code = `
#include <stdio.h>

enum Weekday {
    Sunday,     // 0
    Monday,     // 1
    Tuesday,    // 2
    Wednesday,  // 3
    Thursday,   // 4
    Friday,     // 5
    Saturday    // 6
};

int main() {
    enum Weekday today;

    today = Wednesday;

    printf("Day index of Wednesday is: %d\\n", today);

    // Loop through all days
    printf("All weekdays:\\n");
    for (int i = Sunday; i <= Saturday; i++) {
        printf("%d ", i);
    }

    return 0;
}
`.trim();

  const output = `
Day index of Wednesday is: 3
All weekdays:
0 1 2 3 4 5 6
`.trim();

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Enumeration Data Type in C</h2>

      <section style={{ marginBottom: '30px' }}>
        <h4>🔹 Sample Code</h4>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}>
          <code>{code}</code>
        </pre>
      </section>

      <section>
        <h4>🔹 Output</h4>
        <pre style={{
          backgroundColor: '#f4f4f4',
          color: '#000',
          padding: '15px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '14px',
        }}>
          <code>{output}</code>
        </pre>
      </section>
    </div>
  );
};

export default EnumDatatype;
