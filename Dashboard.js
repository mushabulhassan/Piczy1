import React, { useState } from "react";

const sampleFavorites = [
  { name: "Yeezy Boost 350 V2", price: "$220", status: "Price dropped!", image: "https://images.unsplash.com/photo-1517260911205-7a3b3c7b9a31?w=400&h=400&fit=crop" },
  { name: "Fenty Glow Foundation", price: "$30", status: "New shade released!", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop" },
  { name: "Rolex Lady-Datejust", price: "$3500", status: "Restocked!", image: "https://images.unsplash.com/photo-1526178613658-3c702c0532a2?w=400&h=400&fit=crop" }
];
const sampleWishlist = [
  { name: "Supreme Hoodie", price: "$210", status: "Price increased by $10", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop" },
  { name: "Laneige Water Sleeping Mask", price: "$25", status: "Restocked", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { name: "Apple Watch Ultra", price: "$699", status: "Price dropped!", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop" }
];
const sampleNotifications = [
  "New Adidas drop on 2026-03-21!",
  "Rare Beauty just added new limited edition items.",
  "Your favorite product price decreased!",
  "Get ready for Supreme x North Face drop!",
];

function Dashboard() {
  const [notificationsOn, setNotificationsOn] = useState(true);

  return (
    <div style={{padding:"2rem"}}>
      <h2>User Dashboard</h2>
      <div style={{marginBottom:"2rem"}}>
        <h3>Favorites</h3>
        <div style={{display:"flex", gap:"1.5rem"}}>
          {sampleFavorites.map((fav, idx) => (
            <div key={idx} style={{
              width: "220px", background:"#fff", borderRadius:"10px", boxShadow:"0 2px 8px #e0c3fc", padding:"1rem"
            }}>
              <img src={fav.image} alt={fav.name} style={{width:"100%", borderRadius:"8px"}} />
              <strong>{fav.name}</strong><br/>
              <span>{fav.price}</span><br/>
              <span style={{color:"green"}}>{fav.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{marginBottom:"2rem"}}>
        <h3>Wishlist</h3>
        <div style={{display:"flex", gap:"1.5rem"}}>
          {sampleWishlist.map((wish, idx) => (
            <div key={idx} style={{
              width: "220px", background:"#fff", borderRadius:"10px", boxShadow:"0 2px 8px #e0c3fc", padding:"1rem"
            }}>
              <img src={wish.image} alt={wish.name} style={{width:"100%", borderRadius:"8px"}} />
              <strong>{wish.name}</strong><br/>
              <span>{wish.price}</span><br/>
              <span style={{color:"red"}}>{wish.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={notificationsOn}
            onChange={() => setNotificationsOn(!notificationsOn)}
            style={{marginRight:"8px"}}
          />
          Enable notifications for new items and price drops
        </label>
        <ul style={{marginTop:"1rem"}}>
          {notificationsOn && sampleNotifications.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
      <div style={{marginTop:"2rem", background:"#f7f7fb", borderRadius:"10px", padding:"1.2rem"}}>
        <h3>Feedback & Support</h3>
        <p>Send us a message to improve our website or report a problem:</p>
        <form onSubmit={e => {e.preventDefault(); window.alert("Feedback sent!");}}>
          <textarea required placeholder="Your feedback..." style={{width:"100%", height:"60px", borderRadius:"8px"}} />
          <br/>
          <button type="submit" style={{
            background:"#8ec5fc", color:"#fff", border:"none", borderRadius:"6px", padding:"8px 18px", fontWeight:"bold", marginTop:"10px"
          }}>Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;