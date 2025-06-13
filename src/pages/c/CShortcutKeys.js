// src/pages/c/CShortcutKeys.js

import React from 'react';

const CShortcutKeys = () => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'monospace',
      lineHeight: '1.7'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '25px',
        color: '#003366',
        fontSize: '26px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '10px'
      }}>
        All C Programming Shortcut Keys
      </h2>

      <p style={{ marginBottom: '20px', fontSize: '16px' }}>
        This table lists important shortcut keys used in C programming across <strong>Turbo C++</strong>, <strong>Dev C++</strong>, <strong>Code::Blocks</strong>, and <strong>VS Code</strong>.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          fontSize: '14px'
        }}>
          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th style={styles.th}>Action</th>
              <th style={styles.th}>Turbo C++</th>
              <th style={styles.th}>Dev C++ / Code::Blocks / VS Code</th>
            </tr>
          </thead>
          <tbody>
            {shortcutData.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={styles.td}>{row.action}</td>
                <td style={styles.td}>{row.turbo}</td>
                <td style={styles.td}>{row.modern}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{
        marginTop: '25px',
        fontStyle: 'italic',
        background: '#f9f9f9',
        padding: '10px',
        borderRadius: '6px',
        color: '#2e7d32'
      }}>
        💡 Tip: Mastering shortcut keys improves your programming speed and productivity!
      </p>
    </div>
  );
};

const styles = {
  th: {
    padding: '12px',
    borderBottom: '2px solid #ccc',
    fontWeight: 'bold'
  },
  td: {
    padding: '10px',
    verticalAlign: 'top'
  }
};

const shortcutData = [
  { action: 'New File', turbo: 'Ctrl + N', modern: 'Ctrl + N' },
  { action: 'Open File', turbo: 'Ctrl + O', modern: 'Ctrl + O' },
  { action: 'Save File', turbo: 'F2', modern: 'Ctrl + S' },
  { action: 'Save As', turbo: 'Alt + F + A', modern: 'Ctrl + Shift + S' },
  { action: 'Exit Editor', turbo: 'Alt + X', modern: 'Alt + F4' },
  { action: 'Cut', turbo: 'Shift + Del', modern: 'Ctrl + X' },
  { action: 'Copy', turbo: 'Ctrl + Ins', modern: 'Ctrl + C' },
  { action: 'Paste', turbo: 'Shift + Ins', modern: 'Ctrl + V' },
  { action: 'Select All', turbo: 'Alt + A', modern: 'Ctrl + A' },
  { action: 'Undo', turbo: 'Alt + Backspace', modern: 'Ctrl + Z' },
  { action: 'Redo', turbo: '—', modern: 'Ctrl + Y' },
  { action: 'Find', turbo: 'Ctrl + Q + F', modern: 'Ctrl + F' },
  { action: 'Replace', turbo: 'Ctrl + Q + A', modern: 'Ctrl + H' },
  { action: 'Go to Line', turbo: '—', modern: 'Ctrl + G' },
  { action: 'Comment Line', turbo: '—', modern: 'Ctrl + /' },
  { action: 'Compile Code', turbo: 'Alt + F9', modern: 'Ctrl + F9 / F9' },
  { action: 'Run Code', turbo: 'Ctrl + F9', modern: 'Ctrl + F10' },
  { action: 'Compile & Run', turbo: 'Ctrl + F9', modern: 'F9' },
  { action: 'Stop Execution', turbo: 'Ctrl + Break', modern: 'Ctrl + Alt + M (in debugger)' },
  { action: 'Close File', turbo: 'Alt + F + C', modern: 'Ctrl + W' },
  { action: 'Print', turbo: 'Alt + F + P', modern: 'Ctrl + P' },
  { action: 'Full Screen', turbo: 'Alt + Enter', modern: 'F11' },
  { action: 'Toggle Sidebar', turbo: '—', modern: 'Ctrl + B (VS Code)' },
  { action: 'Show Terminal', turbo: '—', modern: 'Ctrl + `' },
  { action: 'Rename Variable', turbo: '—', modern: 'F2' },
  { action: 'Auto Complete', turbo: '—', modern: 'Ctrl + Space' },
  { action: 'Build Project', turbo: 'Alt + F9', modern: 'Ctrl + Shift + B' },
  { action: 'Debug', turbo: '—', modern: 'F5' },
  { action: 'Step Over', turbo: '—', modern: 'F10' },
  { action: 'Step Into', turbo: '—', modern: 'F11' },
  { action: 'Step Out', turbo: '—', modern: 'Shift + F11' }
];

export default CShortcutKeys;
