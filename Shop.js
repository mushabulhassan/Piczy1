import React from "react";

const trendingKeywords = [
  "limited edition", "streetwear", "sustainable fashion", "smartwatch", "AI devices",
  "Korean skincare", "celebrity beauty", "restock", "exclusive drop", "women's sneakers",
  "luxury watches", "eco-friendly", "new arrivals", "trending now"
];

function Shop() {
  return (
    <div style={{padding: "2rem"}}>
      <h2>MODENZO Shop</h2>
      <p>
        Discover trending products, exclusive drops, and international limited editions in fashion, tech, and beauty.
      </p>
      <div style={{marginTop:"2rem"}}>
        <strong>Trending Keywords:</strong>
        <div style={{display:"flex", flexWrap:"wrap", gap:"12px", marginTop:"10px"}}>
          {trendingKeywords.map((kw, idx) => (
            <span key={idx} style={{
              background:"#e0c3fc", color:"#6a38ab", borderRadius:"8px", padding:"6px 12px", fontWeight:"bold"
            }}>{kw}</span>
          ))}
        </div>
      </div>
      <div style={{
        background:"#f7f7fb",
        border:"1px solid #e0c3fc",
        borderRadius:"8px",
        padding:"1.5rem",
        marginTop:"2rem"
      }}>
        <h3>Third-Party Cookies Notice</h3>
        <p>
          MODENZO uses third-party cookies for enhanced recommendations, product analytics, and shopping integrations. By shopping, you agree to our cookie policy.
        </p>
      </div>
      <div style={{marginTop:"2rem", color:"#6a38ab"}}>
        <strong>Shop by Category:</strong>
        <ul>
          <li>Women’s Fashion & Accessories</li>
          <li>Men’s Limited Edition Sneakers</li>
          <li>Tech & Gadgets</li>
          <li>Beauty & Skincare</li>
          <li>Streetwear & Restocks</li>
          <li>Luxury Watches</li>
        </ul>
      </div>
      <div style={{marginTop:"2rem", background:"#fff", borderRadius:"10px", padding:"1.2rem"}}>
        <h3>Featured Product Highlights</h3>
        <ul>
          <li>Adidas UltraBoost 2026 – Sustainable Drop</li>
          <li>Apple Vision Pro 2 – Next-gen AR tech</li>
          <li>Korean Beauty Snail Essence 2026</li>
          <li>Supreme Hoodie – Restocked Classic</li>
        </ul>
      </div>
    </div>
  );
}

export default Shop;