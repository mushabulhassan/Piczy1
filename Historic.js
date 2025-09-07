import React from "react";

const stories = [
  {
    title: "The Battle of Hastings",
    description: "Fought in 1066, changed English history.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
  },
  {
    title: "Mona Lisa",
    description: "Leonardo da Vinci's masterpiece.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop",
  },
  {
    title: "Pyramids of Giza",
    description: "Ancient engineering marvel.",
    image: "https://images.unsplash.com/photo-1526178613658-3c702c0532a2?w=400&h=400&fit=crop",
  },
  {
    title: "Marie Curie",
    description: "First woman to win Nobel Prize.",
    image: "https://images.unsplash.com/photo-1517260911205-7a3b3c7b9a31?w=400&h=400&fit=crop"
  },
  {
    title: "Great Wall of China",
    description: "Iconic ancient Chinese structure.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop"
  },
  {
    title: "Frida Kahlo",
    description: "Mexican painter and icon.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    title: "Joan of Arc",
    description: "French heroine and saint.",
    image: "https://images.unsplash.com/photo-1526178613658-3c702c0532a2?w=400&h=400&fit=crop"
  },
];

function Historic() {
  return (
    <div style={{padding: "2rem"}}>
      <h2>Historic Stories, Famous Paintings & Unique Places</h2>
      <div style={{display:"flex", flexWrap:"wrap", gap:"2rem"}}>
        {stories.map((story, idx) => (
          <div key={idx} style={{width:"280px", background:"#fff", borderRadius:"12px", boxShadow:"0 2px 8px #e0c3fc", padding:"1rem"}}>
            <img src={story.image} alt={story.title} style={{width:"100%", borderRadius:"8px"}} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:"2rem", background:"#f7f7fb", borderRadius:"10px", padding:"1.2rem"}}>
        <h3>Women & Historic Moments</h3>
        <ul>
          <li><strong>Marie Curie</strong>: First female Nobel laureate in Physics and Chemistry.</li>
          <li><strong>Frida Kahlo</strong>: Revolutionized art and women's role in culture.</li>
          <li><strong>Joan of Arc</strong>: Symbol of courage and leadership.</li>
        </ul>
      </div>
    </div>
  );
}

export default Historic;