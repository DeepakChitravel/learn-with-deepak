import React from 'react';

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

const Sidebar = () => {
  return (
    <div style={{
      width: 220,
      backgroundColor: '#222',
      color: '#fff',
      height: '100vh',
      padding: 20,
      boxSizing: 'border-box',
      position: 'sticky',
      top: 0,
    }}>
      <h2 style={{ marginTop: 0, marginBottom: 20, fontWeight: 'bold' }}>Sidebar</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: 15, cursor: 'pointer' }}>Home</li>
        <li style={{ marginBottom: 15, cursor: 'pointer' }}>Colors</li>
        <li style={{ marginBottom: 15, cursor: 'pointer' }}>About</li>
        <li style={{ marginBottom: 15, cursor: 'pointer' }}>Contact</li>
      </ul>
    </div>
  );
};

const HexadecimalColor = () => {
  return (
    <div style={{
      flex: 1,
      padding: 20,
      
      fontFamily: 'Arial, sans-serif',
      overflowY: 'auto',
      height: '100vh',
      backgroundColor: '#f9f9f9',
    }}>
      <h1 style={{ marginTop: 0 }}>Hexadecimal Colors</h1>
      
      {/* Use CSS Grid here */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: 15,
          marginTop: 20,
         
        }}
      >
        {Object.entries(HexadecimalColors).map(([name, hex]) => (
          <div
            key={name}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 10,
              boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              userSelect: 'none',
               
            }}
          >
            <div
              style={{
                backgroundColor: hex,
                height: 60,
                borderRadius: 6,
                marginBottom: 10,
                boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)',
              }}
            />
            <div style={{ fontWeight: 'bold', fontSize: 14, textTransform: 'capitalize', color: '#333' }}>
              {name}
            </div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: '#555' }}>
              {hex}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PageWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <HexadecimalColor />
    </div>
  );
};

export default HexadecimalColor;
