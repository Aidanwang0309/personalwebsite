import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.height = "80px";
      } else {
        document.getElementById("nav").style.height = "0px";
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <section className="nav-container">
      <div className="logo">
        <a href="/">SHUAI WANG</a>
      </div>
      <nav id="nav" className="nav">
        <Link to="/code">CODE</Link>
        <Link to="/design">DESIGN</Link>
        <Link to="/music">MUSIC</Link>
      </nav>
    </section>
  );
};

export default Header;
