import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer-nav">
        <Link to="/web">WEB</Link>
        <Link to="/ux">UX/UI</Link>
        <Link to="/art">MEDIA</Link>
        <Link to="/music">MUSIC</Link>
        <Link to="/about">ABOUT</Link>
      </nav>

      <div className="footer-social">
        <div>
          <p> Design & Copyright to Shuai Wang</p>
        </div>
        <div>
          <a href="/"> intsgram</a>
          <a href="/"> github</a>
          <a href="/"> soundcloud</a>
          <a href="/"> soundcloud</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
