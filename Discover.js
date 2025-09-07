import React from "react";

const discoverItems = [
  {
    title: "Best Seller: Nike Air Max 2026",
    image: "https://images.unsplash.com/photo-1517260911205-7a3b3c7b9a31?w=400&h=400&fit=crop",
    desc: "The most popular sneaker of the season, now available in new colors."
  },
  {
    title: "Trend: Korean Beauty",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    desc: "Laneige, COSRX, and more: discover the latest K-beauty arrivals."
  },
  {
    title: "Tech Spotlight: Apple Vision Pro",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop",
    desc: "Experience AR like never before with Apple’s new Vision Pro headset."
  },
  {
    title: "Women’s Exclusive: Rare Beauty Spring",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
    desc: "Clean beauty, vegan formulas, and eco-friendly packaging."
  },
];

function Discover() {
  return (
    <div style={{padding: "2rem"}}>
      <h2>Discover MODENZO Trends & Best Sellers</h2>
      <div style={{display:"flex", flexWrap:"wrap", gap:"2rem"}}>
        {discoverItems.map((item, idx) => (
          <div key={idx} style={{width:"280px", background:"#fff", borderRadius:"12px", boxShadow:"0 2px 8px #e0c3fc", padding:"1rem"}}>
            <img src={item.image} alt={item.title} style={{width:"100%", borderRadius:"8px"}} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;