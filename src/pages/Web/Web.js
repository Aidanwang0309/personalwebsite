import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Block from "../../components/Block/Block";
import "./Web.scss";
import daily from "../../assets/dailyorangebs.gif";
import park from "../../assets/park.png";
import creative from "../../assets/creative.gif";
import marvin from "../../assets/marvin.png";
import motion from "../../assets/motion.png";
import random from "../../assets/random.png";
import collage from "../../assets/collage.gif";
import tension from "../../assets/tension.png";
import vj from "../../assets/VJ.png";

const Web = () => {
  return (
    <Fragment>
      <Header />
      <section className="web-project-grid">
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

        <Block
          size="1"
          title="ASSOCIATED PRESS MOTION DATAV"
          categories="WEB / UX/UI / MOTION CAPTURE "
          img={motion}
        />

        <Block
          size="2"
          title="MARVIN BILLING SYSTEM"
          position="middle"
          categories="WEB UX/UI"
          img={marvin}
        />

        <Block
          size="2"
          title="SMALL PROJECT"
          categories="WEB UX/UI"
          img={random}
        />

        <Block
          size="1"
          position="middle"
          title="IMAGE COLLAGE"
          categories=" CREATIVE CODING"
          img={collage}
        />

        <Block
          size="1"
          title="AUDIO REACTIVE VJ"
          categories="CREATIVE CODING"
          img={vj}
        />

        <Block
          size="2"
          title="TENSION OF SELF"
          categories=" VR / MOTION CAPTURE"
          img={tension}
        />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Web;
