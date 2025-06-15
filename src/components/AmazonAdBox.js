import React, { useEffect, useState } from 'react';
import '../css/AmazonAdBox.css';

const products = [
  {
    name: "Fire-Boltt Ninja Call Pro Plus Smartwatch",
    img: "https://m.media-amazon.com/images/I/71qU9mvL0kL._SX679_.jpg",
    url: "https://www.amazon.in/dp/B0C5Y3QG2N?tag=yourtag-21",
    originalPrice: "₹4,999",
    offerPrice: "₹1,499",
    mode: "Online Only",
    specs: [
      "1.83\" HD Display",
      "Bluetooth Calling",
      "100+ Sports Modes",
      "SpO2 & Heart Rate Monitoring"
    ]
  },
  {
    name: "HP 15s Laptop - AMD Ryzen 3",
    img: "https://m.media-amazon.com/images/I/71Wmb+eDxaL._SX679_.jpg",
    url: "https://www.amazon.in/dp/B0CJLKY5KZ?tag=yourtag-21",
    originalPrice: "₹39,999",
    offerPrice: "₹32,490",
    mode: "Prime Eligible",
    specs: [
      "8 GB RAM, 512 GB SSD",
      "Windows 11 Home",
      "15.6\" FHD Display",
      "AMD Radeon Graphics"
    ]
  },
  {
    name: "boAt Airdopes 141 Bluetooth TWS Earbuds",
    img: "https://m.media-amazon.com/images/I/51HBom8xz7L._SX679_.jpg",
    url: "https://www.amazon.in/dp/B09DFTB2T2?tag=yourtag-21",
    originalPrice: "₹4,490",
    offerPrice: "₹1,199",
    mode: "Prime Eligible",
    specs: [
      "42H Playtime with Case",
      "ENx Tech for Clear Calls",
      "IPX4 Water Resistant",
      "Type-C Fast Charging"
    ]
  }
];

const AmazonAdBox = ({ productIndex }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productIndex >= 0 && productIndex < products.length) {
      setProduct(products[productIndex]);
    } else {
      const random = Math.floor(Math.random() * products.length);
      setProduct(products[random]);
    }
  }, [productIndex]);

  if (!product) return null;

  return (
    <div className="amazon-ad-box">
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <img src={product.img} alt={product.name} className="product-img" />
        <div className="product-info">
          <h4>{product.name}</h4>
          <p className="price">
            <span className="original-price">{product.originalPrice}</span>
            <span className="offer-price">{product.offerPrice}</span>
          </p>
          <p className="mode">Mode: <strong>{product.mode}</strong></p>
          <ul className="spec-list">
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default AmazonAdBox;
