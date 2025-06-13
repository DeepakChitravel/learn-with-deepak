import React from 'react';

// Color Palette
const HexadecimalColors = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
  yellow: "#FFFF00",
  black: "#000000",
  white: "#FFFFFF",
  lime: "#00FF00",
  purple: "#800080",
  silver: "#C0C0C0",
  gold: "#FFD700",
  bronze: "#CD7F32",
  copper: "#B87333",
  brightGreen: "#66FF00",
  brightBlue: "#00BFFF",
  brightPurple: "#AA00FF",
  postalOrange: "#FF6600",
  postalBlue: "#003399",
  postalPurple: "#660099",
  olive: "#808000",
  maroon: "#800000",
  gray: "#808080",
  aqua: "#00FFFF",
  brown: "#A52A2A",
  indigo: "#4B0082",
  skyBlue: "#87CEEB",
  violet: "#EE82EE",
  pink: "#FFC0CB",
  darkPink: "#E75480",
  forestGreen: "#228B22",
  magenta: "#FF00FF",
  deepBlue: "#00008B",
  lawnGreen: "#7CFC00",
};

// Sidebar Component
const Sidebar = () => {
  return (
    <aside
      style={{
        width: 240,
        backgroundColor: '#1e1e2f',
        color: '#ffffff',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
      }}
    >
      <h2 style={{ fontSize: '20px', marginBottom: '25px' }}>🎨 Color Menu</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: 2 }}>
          <li style={{ cursor: 'pointer', transition: '0.3s' }}>🏠 Home</li>
          <li style={{ cursor: 'pointer' }}>🧾 Colors</li>
          <li style={{ cursor: 'pointer' }}>ℹ️ About</li>
          <li style={{ cursor: 'pointer' }}>📞 Contact</li>
        </ul>
      </nav>
    </aside>
  );
};

// Main Display Component
const HexadecimalColor = () => {
  return (
    <main
      style={{
        flex: 1,
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#f5f6fa',
        overflowY: 'auto',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '28px', color: '#222', marginBottom: '20px' }}>✨ Hexadecimal Colors</h1>
      <p style={{ color: '#555', maxWidth: '600px' }}>
        Explore a collection of named colors and their hexadecimal values. These are widely used in web development and UI design.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {Object.entries(HexadecimalColors).map(([name, hex]) => (
          <div
            key={name}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              padding: '10px',
              textAlign: 'center',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              style={{
                backgroundColor: hex,
                height: '60px',
                borderRadius: '8px',
                marginBottom: '10px',
                border: '1px solid #ddd',
              }}
            />
            <div style={{ fontWeight: '600', textTransform: 'capitalize', fontSize: '14px', color: '#333' }}>
              {name}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#777' }}>{hex}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

// Full Page Layout with Sidebar
const PageWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <HexadecimalColor />
    </div>
  );
};

export default HexadecimalColor;
