import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer-nav">
        <Link to="/code">CODE</Link>
        <Link to="/design">DESIGN</Link>
        <Link to="/music">MUSIC</Link>
      </nav>

      <div className="footer-social">
        <div className="footer-social-copyright">
          <p> DESIGN & COPYRIGHT TO SHUAI WANG</p>
        </div>
        <div className="footer-social-icon">
          <a href="/">
            {" "}
            <i className="fa fa-instagram" />
          </a>

          <a href="/">
            {" "}
            <i className="fa fa-github" />
          </a>
          <a href="/">
            <i className="fa fa-soundcloud" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
