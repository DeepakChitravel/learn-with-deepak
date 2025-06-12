import React, { useState } from 'react';

const EBBill = () => {
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState(null);

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
  `.trim();

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
        💡 Electricity Bill Calculator in C & React
      </h2>

      {/* C Code Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginBottom: '10px' }}>📄 C Program Code</h3>
      <pre style={{
        background: '#1e1e1e',
        color: '#f8f8f2',
        padding: '15px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontSize: '14px'
      }}>
        <code>{cCode}</code>
      </pre>

      {/* React Form Section */}
      <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '30px', marginBottom: '10px' }}>⚙️ Try It Yourself</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label htmlFor="units" style={{ display: 'block', marginBottom: '8px' }}>
          Enter Units Consumed:
        </label>
        <input
          type="number"
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="e.g., 150"
          required
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            width: '100%',
            fontFamily: 'monospace'
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: 'monospace'
        }}>
          Calculate Bill
        </button>
      </form>

      {/* Output */}
      {bill !== null && (
        <div>
          <h3 style={{ color: '#1a237e', fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>📤 Output</h3>
          <pre style={{
            backgroundColor: '#e8f5e9',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '14px'
          }}>
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
