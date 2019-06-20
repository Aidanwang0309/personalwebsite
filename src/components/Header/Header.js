import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="nav-container">
      <div className="logo">
        <a href="/">SHUAI WANG</a>
      </div>
      <nav className="nav">
        <Link to="/web">WEB</Link>
        <Link to="/ux">UX/UI</Link>
        <Link to="/art">MEDIA</Link>
        <Link to="/music">MUSIC</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </section>
  );
};

export default Header;
