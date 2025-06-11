// src/pages/fundamentals/Datatypes.js
import React from 'react';

const Datatypes = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Data Types in C</h2>

      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 What is a Data Type?</h4>
        <p>
          A data type in C specifies the type of data that a variable can hold, such as integer, float, character, etc.
          It defines the size and type of values that can be stored.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h4>🔹 Types of Data Types in C</h4>
        <ul>
          <li><strong>1. Basic (Primary) Data Types</strong></li>
          <li><strong>2. Derived Data Types</strong></li>
          <li><strong>3. Enumeration Data Type</strong></li>
          <li><strong>4. User-defined Data Types</strong></li>
        </ul>
      </section>

      {/* Basic Data Types */}
      <section style={{ marginBottom: '20px' }}>
        <h4>1️⃣ Basic (Primary) Data Types</h4>
        <ul>
          <li><code>int</code> – Integer numbers (e.g., 1, -4, 50)</li>
          <li><code>float</code> – Floating-point numbers (e.g., 3.14, -0.01)</li>
          <li><code>char</code> – Single characters (e.g., 'a', 'Z')</li>
          <li><code>double</code> – Double-precision floating-point numbers</li>
          <li><code>void</code> – Represents no value (used for functions returning nothing)</li>
        </ul>
      </section>

      {/* Derived Data Types */}
      <section style={{ marginBottom: '20px' }}>
        <h4>2️⃣ Derived Data Types</h4>
        <ul>
          <li><code>array</code> – Collection of similar data types</li>
          <li><code>pointer</code> – Stores address of another variable</li>
          <li><code>function</code> – Function return types and parameters</li>
        </ul>
      </section>

      {/* Enumeration Data Type */}
      <section style={{ marginBottom: '20px' }}>
        <h4>3️⃣ Enumeration Data Type</h4>
        <ul>
          <li><code>enum</code> – Used to assign names to integral constants</li>
        </ul>
        <p><strong>Example:</strong> <code>enum week  Mon, Tue, Wed ;</code></p>
      </section>

      {/* User-defined Data Types */}
      <section style={{ marginBottom: '20px' }}>
        <h4>4️⃣ User-defined Data Types</h4>
        <ul>
          <li><code>struct</code> – Used to group different data types</li>
          <li><code>union</code> – Shares the same memory space for all members</li>
          <li><code>typedef</code> – Used to define a new name for an existing type</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h4>📝 Note on Size (Depends on Compiler)</h4>
        <ul>
          <li><code>int</code> – 2 or 4 bytes</li>
          <li><code>char</code> – 1 byte</li>
          <li><code>float</code> – 4 bytes</li>
          <li><code>double</code> – 8 bytes</li>
        </ul>
      </section>

      {/* Symbol Operators */}
      <section>
        <h4>🔣 Symbol Operators in C</h4>
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>Operator</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arithmetic</td>
              <td>+ - * / %</td>
              <td>Basic math operations</td>
              <td>a + b, a % b</td>
            </tr>
            <tr>
              <td>Relational</td>
              <td>&gt;, &lt;, &gt;=, &lt;=, ==, !=</td>
              <td>Compare two values</td>
              <td>a != b</td>
            </tr>
            <tr>
              <td>Logical</td>
              <td>&& (AND), || (OR), ! (NOT)</td>
              <td>Combine conditions</td>
              <td>a &gt; 5 && b &lt; 10</td>
            </tr>
            <tr>
              <td>Bitwise</td>
              <td>&, |, ^, ~, &lt;&lt;, &gt;&gt;</td>
              <td>Operate on bits</td>
              <td>a & b, a &lt;&lt; 1</td>
            </tr>
            <tr>
              <td>Assignment</td>
              <td>=, +=, -=, *=, /=, %=</td>
              <td>Assign values to variables</td>
              <td>a += 5</td>
            </tr>
            <tr>
              <td>Increment/Decrement</td>
              <td>++ --</td>
              <td>Increase or decrease by 1</td>
              <td>a++, --b</td>
            </tr>
            <tr>
              <td>Conditional</td>
              <td>?:</td>
              <td>Short-hand if-else</td>
              <td>(a &gt; b) ? a : b</td>
            </tr>
            <tr>
              <td>Sizeof</td>
              <td>sizeof()</td>
              <td>Returns size in bytes</td>
              <td>sizeof(int)</td>
            </tr>
            <tr>
              <td>Comma</td>
              <td>,</td>
              <td>Separates expressions</td>
              <td>a = (x = 3, x + 2)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Datatypes;
