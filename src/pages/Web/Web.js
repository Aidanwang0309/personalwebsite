import React, { Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
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

const Web = ({ match }) => {
  return (
    <Fragment>
      <Header />
      <section className="web-project-grid">
        <Block size="1" title="I CODE" className="web-project-grid-block1" />
        <Block
          className="web-project-grid-block2"
          size="2"
          position="middle"
          title="DAILY ORANGE BASKET BALL"
          categories="WEB UX/UI"
          img={daily}
          link="code/daily-orange-basketball"
        />

        <Block
          className="web-project-grid-block3"
          size="2"
          title="NYC PARK CRIME DATAV"
          categories="WEB / UX/UI / DATA"
          img={park}
          link="code/nyc-park-crime-datav"
        />

        <Block
          className="web-project-grid-block4"
          size="1"
          title="CREATIVE CODING"
          categories="WEB / UX/UI "
          img={creative}
          link="code/creative-coding"
        />

        <Block
          className="web-project-grid-block5"
          size="1"
          title="ASSOCIATED PRESS MOTION DATAV"
          categories="WEB / UX/UI / MOTION CAPTURE "
          img={motion}
          link="code/ap-motion-capture"
        />

        <Block
          className="web-project-grid-block6"
          size="2"
          title="MARVIN BILLING SYSTEM"
          position="middle"
          categories="WEB UX/UI"
          img={marvin}
          link="code/marvin-billing-system"
        />

        <Block
          className="web-project-grid-block7"
          size="2"
          title="SMALL PROJECT"
          categories="WEB UX/UI"
          img={random}
          link="code/small-project"
        />

        <Block
          className="web-project-grid-block8"
          size="1"
          position="middle"
          title="IMAGE COLLAGE"
          categories=" CREATIVE CODING"
          img={collage}
          link="code/image-collage"
        />

        <Block
          className="web-project-grid-block9"
          size="1"
          title="AUDIO REACTIVE VJ"
          categories="CREATIVE CODING"
          img={vj}
          link="code/vj"
        />

        <Block
          className="web-project-grid-block10"
          size="2"
          title="TENSION OF SELF"
          categories=" VR / MOTION CAPTURE"
          img={tension}
          link="code/tension-of-self"
        />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Web;
