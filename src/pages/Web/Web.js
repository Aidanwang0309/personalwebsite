import React from "react";
import Header from "../../components/Header/Header";
import Block from "../../components/Block/Block";
import "./Web.scss";
import daily from "../../assets/dailyorangebs.gif";
import park from "../../assets/park.png";
import creative from "../../assets/creative.gif";
import marvin from "../../assets/marvin.png";

const Web = () => {
  return (
    <div>
      <Header />
      {/* <section className="web-hero">
        <h1>
          <span>I</span>
          <span>CODE</span>
        </h1>
      </section> */}

      <Block size="1" title="I CODE" />

      <Block
        size="2"
        position="middle"
        title="DAILY ORANGE BASKET BALL"
        categories="WEB UX/UI"
        img={daily}
      />

      <Block
        size="2"
        title="NYC PARK CRIME DATAV"
        categories="WEB / UX/UI / DATA"
        img={park}
      />

      <Block
        size="1"
        title="CREATIVE CODING"
        categories="WEB / UX/UI "
        img={creative}
      />

      <Block size="1" title="I CODE" />

      <Block
        size="2"
        title="MARVIN BILLING SYSTEM"
        categories="WEB UX/UI"
        img={marvin}
      />
    </div>
  );
};

export default Web;
