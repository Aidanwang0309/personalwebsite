import React from "react";
import "./Block.scss";
import { Link, Route, Switch } from "react-router-dom";
import Web from "../../pages/Web/Web";

const Block = props => {
  const { size, title, categories, img, position, className, link } = props;

  const sizestyles = size === "1" ? { width: "33.3vw" } : { width: "66.6vw" };

  const positionstyle =
    position === "middle" ? { width: "auto", height: "80%" } : null;
  return (
    <div className={`grid grid-box project ${className}`} style={sizestyles}>
      <Link className="grid-box-link project-link" to={link}>
        <div className="project-link-wrap">
          <img src={img} style={positionstyle} alt="project avatar" />
        </div>
        <div className="hover">
          <div className="hover-color" />

          <div className="hover-text">
            <h1> {title} </h1>
            <p> {categories} </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Block;
