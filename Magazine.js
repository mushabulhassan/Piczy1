import React from "react";

const futureItems = [
  {
    brand: "Adidas",
    item: "Adidas UltraBoost 2026 Edition",
    release: "2026-03-21",
    details: "Sustainable materials. Limited Europe release.",
    image: "https://images.unsplash.com/photo-1517260911205-7a3b3c7b9a31?w=400&h=400&fit=crop"
  },
  {
    brand: "Apple",
    item: "Apple Vision Pro 2",
    release: "2026-05-10",
    details: "Second gen AR headset with advanced AI features.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop"
  },
  {
    brand: "Fenty",
    item: "Fenty Glow Foundation",
    release: "2026-01-15",
    details: "New shades, vegan formula. Celebrity campaign.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop"
  },
  {
    brand: "Supreme",
    item: "Supreme x The North Face Collection",
    release: "2026-02-12",
    details: "Streetwear collab with exclusive designs.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop"
  },
  {
    brand: "Rare Beauty",
    item: "Rare Beauty Spring 2026 Line",
    release: "2026-04-05",
    details: "Clean beauty, new eco-packaging. Focused on women.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    brand: "Yeezy",
    item: "Yeezy Foam Runner 2026",
    release: "2026-06-01",
    details: "Innovative materials, limited edition.",
    image: "https://images.unsplash.com/photo-1526178613658-3c702c0532a2?w=400&h=400&fit=crop"
  },
  {
    brand: "COSRX",
    item: "Korean Beauty Snail Essence 2026",
    release: "2026-02-19",
    details: "Latest K-beauty innovation, eco-friendly packaging.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
];

function Magazine() {
  return (
    <div style={{padding: "2rem"}}>
      <h2>Magazine: Upcoming Brand Releases & Editorials</h2>
      <div style={{display: "flex", flexWrap: "wrap", gap: "2rem"}}>
        {futureItems.map((item, idx) => (
          <div key={idx} style={{
            width: "280px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px #e0c3fc",
            padding: "1rem"
          }}>
            <img src={item.image} alt={item.item} style={{width:"100%", borderRadius:"8px", marginBottom:"0.7rem"}} />
            <h3>{item.brand}</h3>
            <strong>{item.item}</strong>
            <p><em>Release:</em> {item.release}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:"2rem", background:"#f7f7fb", borderRadius:"10px", padding:"1.2rem"}}>
        <h3>Editorial Highlights</h3>
        <ul>
          <li>How AI is changing fashion and tech shopping</li>
          <li>Spotlight: Women in beauty leadership (Fenty, Rare Beauty)</li>
          <li>Streetwear culture: Supreme, Off-White, and beyond</li>
          <li>Korean skincare trends for 2026</li>
        </ul>
      </div>
    </div>
  );
}

export default Magazine;