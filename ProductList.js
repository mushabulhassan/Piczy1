import React, { useState } from "react";
import "../styles/productList.css";

const brands = [
  "Adidas", "Nike", "Yeezy", "Off-White", "Fenty", "Supreme", "Apple", "Laneige", "Rare Beauty", "Rolex", "COSRX"
];
const types = [
  "Sneakers", "Streetwear", "Beauty", "Tech", "Accessory"
];
const imageLinks = [
  "https://images.unsplash.com/photo-1517260911205-7a3b3c7b9a31", // sneakers
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", // hoodie
  "https://images.unsplash.com/photo-1526178613658-3c702c0532a2", // watch
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // makeup
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", // tech
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff", // skincare
];

function randomProduct(i) {
  return {
    id: i + 1,
    name: `${brands[i % brands.length]} ${types[i % types.length]} ${2025 + (i % 3)}`,
    brand: brands[i % brands.length],
    type: types[i % types.length],
    image: imageLinks[i % imageLinks.length] + "?w=400&h=400&fit=crop",
    price: `$${(120 + i * 10)}`,
    limited: i % 4 === 0,
    liked: false,
    comments: [],
    wishlist: false
  };
}

const sampleProducts = Array.from({ length: 30 }, (_, i) => randomProduct(i));

function ProductList() {
  const [products, setProducts] = useState(sampleProducts);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterType, setFilterType] = useState("");
  const [search, setSearch] = useState("");
  const [filterLimited, setFilterLimited] = useState("");

  let filtered = products.filter(p =>
    (!filterBrand || p.brand === filterBrand) &&
    (!filterType || p.type === filterType) &&
    (!filterLimited || (filterLimited === "Limited" ? p.limited : !p.limited)) &&
    (!search || p.name.toLowerCase().includes(search.toLowerCase()))
  );

  function handleLike(id) {
    setProducts(products.map(p =>
      p.id === id ? { ...p, liked: !p.liked } : p
    ));
  }

  function handleWishlist(id) {
    setProducts(products.map(p =>
      p.id === id ? { ...p, wishlist: !p.wishlist } : p
    ));
  }

  function handleComment(id, comment) {
    setProducts(products.map(p =>
      p.id === id ? { ...p, comments: [...p.comments, comment] } : p
    ));
  }

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="filters">
        <select onChange={e => setFilterBrand(e.target.value)}>
          <option value="">All Brands</option>
          {brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <select onChange={e => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select onChange={e => setFilterLimited(e.target.value)}>
          <option value="">All Editions</option>
          <option value="Limited">Limited Edition</option>
          <option value="Standard">Standard Edition</option>
        </select>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="products">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onLike={handleLike}
            onWishlist={handleWishlist}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, onLike, onWishlist, onComment }) {
  const [commentText, setCommentText] = useState("");
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.brand}</p>
      <p>{product.type}</p>
      <p>{product.price}</p>
      {product.limited && <span className="limited">Limited Edition</span>}
      <div className="actions">
        <button onClick={() => onLike(product.id)}>{product.liked ? "Unlike" : "Like"}</button>
        <button onClick={() => onWishlist(product.id)}>{product.wishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
        <button onClick={() => window.alert("Shared!")}>Share</button>
      </div>
      <div className="comments">
        {product.comments.map((c, idx) => (
          <div key={idx} className="comment">{c}</div>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault();
            if (commentText.trim()) {
              onComment(product.id, commentText);
              setCommentText("");
            }
          }}
        >
          <input
            type="text"
            value={commentText}
            placeholder="Add a comment..."
            onChange={e => setCommentText(e.target.value)}
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default ProductList;