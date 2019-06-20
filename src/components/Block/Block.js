import React from "react";
import "./Block.scss";

const Block = props => {
  const { size, title, categories, img, position } = props;

  const sizestyles = size == 1 ? { width: "33.3vw" } : { width: "66.6vw" };

  const positionstyle =
    position == "middle"
      ? { width: "auto", height: "calc(33vw - 10.4rem)" }
      : null;

  return (
    <div className="grid grid-box project" style={sizestyles}>
      <a className="grid-box-link project-link" href="/">
        <div className="project-link-wrap">
          <img src={img} style={positionstyle} />
        </div>
        <div className="hover">
          <div className="hover-color" />

          <div className="hover-text">
            <h1> {title} </h1>
            <p> {categories} </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Block;
