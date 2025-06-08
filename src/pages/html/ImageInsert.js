import React from 'react';

const imageFormatsExplanation = [
  { abbr: 'GIF', full: 'Graphics Interchange Format', desc: 'supports animation and transparency, limited to 256 colors.', color: '#FF6F61' },
  { abbr: 'JPEG (or JPG)', full: 'Joint Photographic Experts Group', desc: 'best for photos, lossy compression.', color: '#6B5B95' },
  { abbr: 'PNG', full: 'Portable Network Graphics', desc: 'supports transparency, lossless compression.', color: '#88B04B' },
  { abbr: 'SVG', full: 'Scalable Vector Graphics', desc: 'vector format, scalable without losing quality.', color: '#F7CAC9' },
  { abbr: 'BMP', full: 'Bitmap Image File', desc: 'uncompressed raster image, large file size.', color: '#92A8D1' },
  { abbr: 'WEBP', full: 'Web Picture format', desc: 'modern format with good compression and quality.', color: '#955251' },
];

const sampleCode = `
{/* Insert images in JSX */}
<img src="/images/sample.gif" alt="Sample GIF" width="120" />
<img src="/images/sample.jpg" alt="Sample JPEG" width="120" />
<img src="/images/sample.png" alt="Sample PNG" width="120" />
<img src="/images/sample.svg" alt="Sample SVG" width="120" />
`;

const ImageInsert = () => {
  return (
    <div style={{ padding: 30, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2>📷 Common Image File Formats</h2>
      
      <div style={{ maxWidth: 600, backgroundColor: '#222', padding: 20, borderRadius: 8 }}>
        {imageFormatsExplanation.map(({abbr, full, desc, color}) => (
          <p key={abbr} style={{ color: '#eee', fontSize: 16, marginBottom: 12 }}>
            <span style={{ color, fontWeight: 'bold', fontSize: 18, marginRight: 8 }}>{abbr}:</span>
            <span style={{ fontWeight: '600' }}>{full}</span> - {desc}
          </p>
        ))}
      </div>

      <h3 style={{ marginTop: 40 }}>💻 Sample JSX Code to Insert Images</h3>
      <pre
        style={{
          backgroundColor: '#272822',
          color: '#f8f8f2',
          padding: 20,
          borderRadius: 8,
          fontSize: 14,
          maxWidth: 600,
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {sampleCode}
      </pre>

      <h3 style={{ marginTop: 40 }}>🖼️ Output - Images Rendered</h3>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <figure style={{ textAlign: 'center' }}>
          <img
            src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif"
            alt="Sample GIF"
            width="120"
          />
          <figcaption>GIF</figcaption>
        </figure>

        <figure style={{ textAlign: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=120&q=80"
            alt="Sample JPEG"
            width="120"
          />
          <figcaption>JPEG</figcaption>
        </figure>

        <figure style={{ textAlign: 'center' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Png-transparent.png"
            alt="Sample PNG"
            width="120"
          />
          <figcaption>PNG</figcaption>
        </figure>

        <figure style={{ textAlign: 'center' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg"
            alt="Sample SVG"
            width="120"
          />
          <figcaption>SVG</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImageInsert;
