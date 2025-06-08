// src/pages/msword/ShortcutKey.js
import React from 'react';
import { Table, Container, Card } from 'react-bootstrap';

const ShortcutKey = () => {
  // Group shortcuts by category
  const groupedShortcuts = {
    'Windows Key Shortcuts': [
      { key: 'Win + R', action: 'Open Run dialog' },
      { key: 'Win + Shift + S', action: 'Snip & Sketch (Screenshot Tool)' },
    ],
    'Function Keys': [
      { key: 'F1', action: 'Open Help' },
      { key: 'F2', action: 'Move text or object' },
      { key: 'F3', action: 'Insert AutoText' },
      { key: 'F4', action: 'Repeat last action' },
      { key: 'F5', action: 'Go To' },
      { key: 'F6', action: 'Next Pane or Frame' },
      { key: 'F7', action: 'Spell and Grammar Check' },
      { key: 'F8', action: 'Extend Selection' },
      { key: 'F9', action: 'Update selected fields' },
      { key: 'F10', action: 'Activate Menu bar' },
      { key: 'F11', action: 'Go to next field' },
      { key: 'F12', action: 'Save As' },
    ],
    'Ctrl + Function Keys': [
      { key: 'Ctrl + F1', action: 'Hide/Show Ribbon' },
      { key: 'Ctrl + F2', action: 'Print Preview' },
      { key: 'Ctrl + F3', action: 'Cut to Spike' },
      { key: 'Ctrl + F4', action: 'Close document' },
      { key: 'Ctrl + F5', action: 'Restore window size' },
      { key: 'Ctrl + F6', action: 'Switch to next document' },
      { key: 'Ctrl + F7', action: 'Move window' },
      { key: 'Ctrl + F8', action: 'Resize window' },
      { key: 'Ctrl + F9', action: 'Insert field brackets' },
      { key: 'Ctrl + F10', action: 'Maximize window' },
      { key: 'Ctrl + F11', action: 'Lock field' },
      { key: 'Ctrl + F12', action: 'Open document' },
    ],
    'Ctrl + Shift + Function Keys': [
      { key: 'Ctrl + Shift + F1', action: 'Context Help' },
      { key: 'Ctrl + Shift + F3', action: 'Paste from Spike' },
      { key: 'Ctrl + Shift + F8', action: 'Select vertical block' },
      { key: 'Ctrl + Shift + F12', action: 'Print document' },
    ],
    'Ctrl + A to Z': [
      { key: 'Ctrl + A', action: 'Select All' },
      { key: 'Ctrl + B', action: 'Bold' },
      { key: 'Ctrl + C', action: 'Copy' },
      { key: 'Ctrl + D', action: 'Font settings' },
      { key: 'Ctrl + E', action: 'Center align' },
      { key: 'Ctrl + F', action: 'Find' },
      { key: 'Ctrl + G', action: 'Go To' },
      { key: 'Ctrl + H', action: 'Replace' },
      { key: 'Ctrl + I', action: 'Italic' },
      { key: 'Ctrl + J', action: 'Justify text' },
      { key: 'Ctrl + K', action: 'Insert hyperlink' },
      { key: 'Ctrl + L', action: 'Left align' },
      { key: 'Ctrl + M', action: 'Indent' },
      { key: 'Ctrl + N', action: 'New document' },
      { key: 'Ctrl + O', action: 'Open document' },
      { key: 'Ctrl + P', action: 'Print' },
      { key: 'Ctrl + Q', action: 'Clear paragraph formatting' },
      { key: 'Ctrl + R', action: 'Right align' },
      { key: 'Ctrl + S', action: 'Save' },
      { key: 'Ctrl + T', action: 'Hanging indent' },
      { key: 'Ctrl + U', action: 'Underline' },
      { key: 'Ctrl + V', action: 'Paste' },
      { key: 'Ctrl + W', action: 'Close document' },
      { key: 'Ctrl + X', action: 'Cut' },
      { key: 'Ctrl + Y', action: 'Redo' },
      { key: 'Ctrl + Z', action: 'Undo' },
    ],
    'Ctrl + Shift + A-Z': [
      { key: 'Ctrl + Shift + A', action: 'All Caps' },
      { key: 'Ctrl + Shift + D', action: 'Double Underline' },
      { key: 'Ctrl + Shift + F', action: 'Font dialog' },
      { key: 'Ctrl + Shift + L', action: 'Bullet list' },
      { key: 'Ctrl + Shift + P', action: 'Font size dialog' },
      { key: 'Ctrl + Shift + G', action: 'Word count' },
      { key: 'Ctrl + Shift + T', action: 'Decrease hanging indent' },
      { key: 'Ctrl + Shift + Home', action: 'Select from cursor to beginning' },
    ],
    'Other Useful Shortcuts': [
      { key: 'Ctrl + End', action: 'Go to end of document' },
      { key: 'Shift + Insert', action: 'Paste' },
      { key: 'Alt + Shift + D', action: 'Insert current date' },
      { key: 'Alt + Shift + T', action: 'Insert current time' },
      { key: 'Ctrl + +', action: 'Superscript' },
      { key: 'Ctrl + Shift + Z', action: 'Reset character formatting' },
      { key: 'Ctrl + 1', action: 'Single line spacing' },
      { key: 'Ctrl + 5', action: '1.5 line spacing' },
    ],
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">⌨️ MS Word Shortcut Keys (Grouped)</h2>

      {Object.entries(groupedShortcuts).map(([group, shortcuts], idx) => (
        <Card className="mb-4 shadow rounded-4 border-0" key={idx}>
          <Card.Body>
            <h4 className="mb-3 text-primary">{group}</h4>
            <Table bordered hover responsive className="align-middle text-center">
              <thead className="table-secondary">
                <tr>
                  <th className="text-uppercase">Shortcut Key</th>
                  <th className="text-uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {shortcuts.map(({ key, action }, index) => (
                  <tr key={index}>
                    <td><code>{key}</code></td>
                    <td>{action}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ShortcutKey;
