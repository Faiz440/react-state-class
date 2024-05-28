// src/HomePage.js

import "./webpage.css";
import image from "./images.jpeg";
const WebPage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <img src={image} alt="Logo" className="logo" />
        <div className="nav-container">
          <div className="nav-left">
            <ul className="nav-list">
              <li><a href="#"></a>Home</li>
              <li><a href="#"></a>Home</li>
              <li><a href="#"></a>Home</li>
              <li><a href="#"></a>Home</li>
              <li>About</li>
              <li>Product</li>
              <li>Price</li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              <li>
                <button className="button button-login">Login</button>
              </li>
              <li>
                <button className="button button-signup">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main-content"></main>

      <footer className="footer">
        <p>© 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WebPage;
