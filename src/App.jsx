import React, { useState } from "react";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop shop for beautiful
            houseplants that bring nature, freshness, and peace into your home.
          </p>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <div className="product-page">
          <h2>Our Plants</h2>
          <p>Browse our collection of beautiful indoor plants.</p>
        </div>
      )}
    </div>
  );
}

export default App;
