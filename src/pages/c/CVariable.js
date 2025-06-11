// CVariable.js

import React from 'react';

const CVariable = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Understanding Variables in C</h1>

      {/* Variable Introduction */}
      <section>
        <h2>1. Variable Introduction</h2>
        <p>
          In C, a variable is a container used to store data values. It has a name, a type, and may have an initial value.
          Variables must be declared before use.
        </p>
      </section>

      {/* Variable Types */}
      <section>
        <h2>2. Variable Types</h2>
        <p>C supports the following basic types of variables:</p>
        <ul>
          <li><code>int</code> - stores integers (e.g., 10, -5)</li>
          <li><code>float</code> - stores decimal numbers (e.g., 3.14)</li>
          <li><code>double</code> - stores larger and more precise decimal numbers</li>
          <li><code>char</code> - stores single characters (e.g., 'A')</li>
        </ul>
        <p>
          Type modifiers like <code>signed</code>, <code>unsigned</code>, <code>long</code>, and <code>short</code> can also be used.
        </p>
      </section>

      {/* Variable Naming Rules */}
      <section>
        <h2>3. Variable Naming Rules</h2>
        <ul>
          <li>Must start with a letter (A-Z or a-z) or an underscore (_)</li>
          <li>Can contain letters, digits, and underscores</li>
          <li>Case-sensitive (e.g., <code>Age</code> and <code>age</code> are different)</li>
          <li>Cannot use reserved keywords (e.g., <code>int</code>, <code>return</code>)</li>
        </ul>
      </section>

      {/* Variable Components */}
      <section>
        <h2>4. Variable Components</h2>
        <p>A variable in C has three main components:</p>
        <ul>
          <li><strong>Data Type</strong>: e.g., <code>int</code>, <code>float</code>, <code>char</code></li>
          <li><strong>Variable Name</strong>: A unique identifier for the variable</li>
          <li><strong>Value</strong>: The data stored in the variable</li>
        </ul>
      </section>

      {/* Variable Declaration */}
      <section>
        <h2>5. Variable Declaration</h2>
        <p>
          In C, variables must be declared before they are used. The syntax for declaring a variable is:
        </p>
        <pre>
          <code>
            data_type variable_name;
          </code>
        </pre>
        <p>Examples:</p>
        <pre>
          <code>
            int age;
            float price;
            char grade;
          </code>
        </pre>
        <p>
          You can also initialize a variable at the time of declaration:
        </p>
        <pre>
          <code>
            int age = 25;
            float price = 99.99;
            char grade = 'A';
          </code>
        </pre>
        <p>
          Multiple variables of the same type can be declared together:
        </p>
        <pre>
          <code>
            int x = 5, y = 10, z = 15;
          </code>
        </pre>
      </section>
    </div>
  );
};

export default CVariable;
