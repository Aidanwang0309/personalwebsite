import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import daily1 from 'assets/daily1.png';
import daily2 from 'assets/daily2.png';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import { TextBlock } from 'components/TextBlock';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { opacity: 0, scale: 0.5, transition },
  enter: {
    opacity: 1,
    scale: 1,
    transition
  }
};

const imageVariants2 = {
  exit: { opacity: 0, scale: 0.5, transition },
  enter: {
    opacity: 1,
    scale: 1,
    transition
  }
};

const descDetail = (
  <p>
    As a front-end developer, my responsible includes.
    <br />
    <ul>
      <li>
        Locating user based on their geo and show the list of available restaurants
      </li>
      <li>
        Creating a fast loading Google Map interface, which can enable users to move around the map and calculate to show all the restaurants within the radius of current map view.
      </li>
      <li>
        Enable user to create and share the link with location info.
      </li>
      <li>
        Enable users to search their location through input and then auto locating them on map and return a sorted list of available restaurants by distance
      </li>
    </ul>
  </p>
);

const HelpMainStreet = () => {
  return (
    <DailyContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.2 } } }}
    >
      <DescriptionBlock
        title="Help Main Street"
        brief="This project is to help local business in all 50 states by ordering online, buying gift cards, or donating directly to provide critical cash support during the COVID-19 crisis.
        I'm the front-end developer helping to create a fast loading and UX friendly interface"
        stack="React | Nodejs"
        platform=" Web/Mobile"
        category="Web"
        creator="Team Help Main Street"
        plink="https://www.helpmainstreet.com/"
      />
      <TextBlock title="Description and Technology" description={descDetail} />
      <Container>
        <div style={{ gridColumnStart: 2 }}>
          <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="700px"
            src="https://www.helpmainstreet.com/">
          </iframe>
        </div>
      </Container>
    </DailyContainer>
  );
};

const DailyContainer = styled(motion.div)`
  position: relative;

  @media ${device.mobileS} {
    ${'' /* background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px; */}
  }
  @media ${device.tablet} {
    margin-left:100px;
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 25% 100px;
  }
  @media ${device.laptop} {
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 16.7% 100px;
  }
`;

const Container = styled(motion.div)`
  position: relative;
  display: grid;
  margin-top:5rem;
  padding-bottom:20rem;

  @media ${device.mobileS} {
    grid-template-columns: 0fr 10fr;
    top: 150px;
  }
  @media ${device.tablet} {
    top: 0px;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 10fr 1fr;
  }

`;

const Image = styled(motion.img)`

  @media ${device.mobileS} {
    width: 100%;

  }
  @media ${device.tablet} {
    width: 100%;

  }
  @media ${device.laptop} {
    width: 100%;

  }
`;

const Image2 = styled(motion.img)`
  position: relative;
  width: 100%;

  @media ${device.mobileS} {
    margin-bottom:10vh;
  }
  @media ${device.tablet} {

  }

  @media ${device.laptop} {
    bottom: 0;
    width: 100%;
  }
`;

export default HelpMainStreet;
