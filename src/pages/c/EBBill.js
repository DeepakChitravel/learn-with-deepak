import React, { useState } from 'react';

const EBBill = () => {
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState(null);

  // C Code as a string
  const cCode = `
#include <stdio.h>

int main() {
    int units;
    float amount;

    printf("Enter electricity units consumed: ");
    scanf("%d", &units);

    if(units <= 100)
        amount = units * 1.5;
    else if(units <= 200)
        amount = 100 * 1.5 + (units - 100) * 2.5;
    else
        amount = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4.0;

    printf("Electricity Bill = ₹%.2f\\n", amount);

    return 0;
}
  `;

  const calculateBill = (units) => {
    let amount = 0;
    if (units <= 100) {
      amount = units * 1.5;
    } else if (units <= 200) {
      amount = 100 * 1.5 + (units - 100) * 2.5;
    } else {
      amount = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
    }
    return amount.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBill = calculateBill(Number(units));
    setBill(calculatedBill);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>💡 Electricity Bill Calculator</h2>

      <h3>📄 C Program Code:</h3>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto' }}>
        <code>{cCode}</code>
      </pre>

      <h3>⚙️ Try It Yourself (React Version):</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="units">Enter Units Consumed:</label>
        <input
          type="number"
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="e.g., 150"
          required
        />
        <br /><br />
        <button type="submit">Calculate Bill</button>
      </form>

      {bill !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>🖥️ Output</h3>
          <pre style={{ backgroundColor: '#e8f4ff', padding: '1rem', borderRadius: '5px' }}>
            <code>
              Enter electricity units consumed: {units}{"\n"}
              Electricity Bill = ₹{bill}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default EBBill;
