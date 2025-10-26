import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const nameRef = useRef();
  const priceRef = useRef();

  // Add item to cart
  const addItem = () => {
    const name = nameRef.current.value.trim();
    const price = Number(priceRef.current.value);
    if (!name || isNaN(price) || price <= 0) {
      alert("Enter valid name and price");
      return;
    }
    setCart([...cart, { name, price }]);
    nameRef.current.value = '';
    priceRef.current.value = '';
  };

  // Cart Page
  const CartPage = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
      <div style={{ marginTop: "20px" }}>
        <h2>🛍️ Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items added yet!</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item, index) => (
                <li key={index} style={{ background: "#f5f5f5", margin: "5px 0", padding: "8px", borderRadius: "6px" }}>
                  {item.name} — ₹{item.price}
                </li>
              ))}
            </ul>
            <h3>Total: ₹{total}</h3>
          </>
        )}
      </div>
    );
  };

  // Main page
  const HomePage = () => (
    <div style={{ marginTop: "20px" }}>
      <h2>Add Item</h2>
      <input type="text" placeholder="Item Name" ref={nameRef} style={inputStyle} />
      <input type="number" placeholder="Price" ref={priceRef} style={inputStyle} />
      <button onClick={addItem} style={btnStyle}>Add</button>

      <h3>🧾 Items Added</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li key={index} style={{ background: "#eef", margin: "5px 0", padding: "8px", borderRadius: "6px" }}>
            {item.name} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );

  // CSS styles
  const headerStyle = { background: "#007bff", color: "white", padding: "10px", textAlign: "center", borderRadius: "5px" };
  const footerStyle = { background: "#222", color: "white", padding: "8px", textAlign: "center", marginTop: "30px", borderRadius: "5px" };
  const linkStyle = { color: "white", textDecoration: "none", margin: "0 10px" };
  const btnStyle = { background: "#007bff", color: "white", border: "none", padding: "6px 12px", marginLeft: "8px", borderRadius: "5px" };
  const inputStyle = { padding: "5px", marginRight: "5px", borderRadius: "4px", border: "1px solid #ccc" };

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: "500px", margin: "auto" }}>
        
        {/* Header */}
        <header style={headerStyle}>
          <h1>🎵 Happy Mini Shop</h1>
          <nav>
            <Link to="/" style={linkStyle}>Home</Link> | 
            <Link to="/cart" style={linkStyle}>Cart ({cart.length})</Link>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>

        {/* Footer */}
        <footer style={footerStyle}>
          <p>© 2025  Happy Shop — Built with ❤️ using React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
