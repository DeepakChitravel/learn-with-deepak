import React from 'react';

const CShortcutKeys = () => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>⌨️ All C Programming Shortcut Keys</h2>

      <p style={{ marginBottom: '20px' }}>
        This table lists important shortcut keys used in C programming across Turbo C++, Dev C++, Code::Blocks, and VS Code.
      </p>

      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr>
            <th>Action</th>
            <th>Turbo C++</th>
            <th>Dev C++ / Code::Blocks / VS Code</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>New File</td><td>Ctrl + N</td><td>Ctrl + N</td></tr>
          <tr><td>Open File</td><td>Ctrl + O</td><td>Ctrl + O</td></tr>
          <tr><td>Save File</td><td>F2</td><td>Ctrl + S</td></tr>
          <tr><td>Save As</td><td>Alt + F + A</td><td>Ctrl + Shift + S</td></tr>
          <tr><td>Exit Editor</td><td>Alt + X</td><td>Alt + F4</td></tr>
          <tr><td>Cut</td><td>Shift + Del</td><td>Ctrl + X</td></tr>
          <tr><td>Copy</td><td>Ctrl + Ins</td><td>Ctrl + C</td></tr>
          <tr><td>Paste</td><td>Shift + Ins</td><td>Ctrl + V</td></tr>
          <tr><td>Select All</td><td>Alt + A</td><td>Ctrl + A</td></tr>
          <tr><td>Undo</td><td>Alt + Backspace</td><td>Ctrl + Z</td></tr>
          <tr><td>Redo</td><td>—</td><td>Ctrl + Y</td></tr>
          <tr><td>Find</td><td>Ctrl + Q + F</td><td>Ctrl + F</td></tr>
          <tr><td>Replace</td><td>Ctrl + Q + A</td><td>Ctrl + H</td></tr>
          <tr><td>Go to Line</td><td>—</td><td>Ctrl + G</td></tr>
          <tr><td>Comment Line</td><td>—</td><td>Ctrl + /</td></tr>
          <tr><td>Compile Code</td><td>Alt + F9</td><td>Ctrl + F9 / F9</td></tr>
          <tr><td>Run Code</td><td>Ctrl + F9</td><td>Ctrl + F10</td></tr>
          <tr><td>Compile & Run</td><td>Ctrl + F9</td><td>F9</td></tr>
          <tr><td>Stop Execution</td><td>Ctrl + Break</td><td>Ctrl + Alt + M (in debugger)</td></tr>
          <tr><td>Close File</td><td>Alt + F + C</td><td>Ctrl + W</td></tr>
          <tr><td>Print</td><td>Alt + F + P</td><td>Ctrl + P</td></tr>
          <tr><td>Full Screen</td><td>Alt + Enter</td><td>F11</td></tr>
          <tr><td>Toggle Sidebar</td><td>—</td><td>Ctrl + B (VS Code)</td></tr>
          <tr><td>Show Terminal</td><td>—</td><td>Ctrl + `</td></tr>
          <tr><td>Rename Variable</td><td>—</td><td>F2</td></tr>
          <tr><td>Auto Complete</td><td>—</td><td>Ctrl + Space</td></tr>
          <tr><td>Build Project</td><td>Alt + F9</td><td>Ctrl + Shift + B</td></tr>
          <tr><td>Debug</td><td>—</td><td>F5</td></tr>
          <tr><td>Step Over</td><td>—</td><td>F10</td></tr>
          <tr><td>Step Into</td><td>—</td><td>F11</td></tr>
          <tr><td>Step Out</td><td>—</td><td>Shift + F11</td></tr>
        </tbody>
      </table>

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        💡 Tip: Mastering shortcut keys improves your programming speed and productivity!
      </p>
    </div>
  );
};

export default CShortcutKeys;
