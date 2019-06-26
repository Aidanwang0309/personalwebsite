import React from "react";
import "./DescriptionBlock.scss";

const DescriptionBlock = props => {
  const { size, company, date, website, img, position, className } = props;

  const sizestyles = size === "1" ? { width: "33.3vw" } : { width: "66.6vw" };

  const positionstyle =
    position === "middle"
      ? { width: "auto", height: "calc(33vw - 10.4rem)" }
      : null;

  return (
    <div
      className={`grid grid-box project-description ${className}`}
      style={sizestyles}
    >
      {img == null ? (
        <div className="project-description-text">
          <h1>{company}</h1>
          <h1>{date}</h1>
          <a href={website}>{website}</a>
        </div>
      ) : (
        <img src={img} style={positionstyle} alt="project avatar" />
      )}
    </div>
  );
};

export default DescriptionBlock;
