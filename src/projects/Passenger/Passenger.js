import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { Slides } from 'components/Slides';
import { TextBlock } from 'components/TextBlock';
import s1 from 'assets/s1.png';
import s2 from 'assets/s2.png';
import s3 from 'assets/s3.png';
import s4 from 'assets/s4.png';
import p1 from 'assets/p1.png';
import p2 from 'assets/p2.png';
import p3 from 'assets/p3.png';
import p4 from 'assets/p4.png';
import p5 from 'assets/p5.png';
import { device } from 'shared/theme';

const imageSet = [
  { src: s1, des: 'des' },
  { src: s2, des: 'des' },
  { src: s3, des: 'des' },
  { src: s4, des: 'des' }
];

const imageSet2 = [
  { src: p1, des: 'des' },
  { src: p2, des: 'des' },
  { src: p3, des: 'des' },
  { src: p4, des: 'des' }
];

const description = (
  <p>
    It is a hypothetical UX prototype of the future online second-hand garment
    system constructed on a developed blockchain system. The goal of this
    prototype is to examine what will the next fashion industry offer and how
    will consuming pattern change when we successfully get through the barriers
    between each process. The prototype will cover interactions, and user flows
    including register, scanning, reading, posting, and reselling. We will test
    whether the prototype can change consumers' viewpoint and optimize their
    experience of thrift shopping.
    <br /> The functions includes:
    <ul>
      <li>
        Highly customized product feeds based on user’s body type data, fashion
        preference, and social interactions
      </li>
      <li>
        Utilizing blockchain to realize the easily 3-step posting process,
        provide the trustworth product information, and fix the size limiting
        issue
      </li>
      <li>
        Peer-to-peer Payment Option to minimize the commission fee, shorten the
        transaction processing time, and instantly record the history
      </li>
      <li>
        Generating reports and data visualizations of customer’s purchasing
        behavior. Enable sharing and ranking functions for consumer’s
        satisfaction and loyalty
      </li>
    </ul>
  </p>
);

const Passenger = () => {
  return (
    <PassengerContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="PASSENGER - FUTURE ONLINE SECOND-HAND GARMENT SYSTEM"
        brief="This UI/UX Project is part of the thesis project - Utilizing Smart Tag Powered by Blockchain to Build A Sustainable Fashion Industry."
        platform="Figma"
        category="UX"
        creator="Shuai Wang"
      />
      <TextBlock title="Description and Technology" description={description} />
      <SlidesContainer>
        <div style={{ gridColumnStart: 2 }}>
          <Slides images={imageSet} />
        </div>
      </SlidesContainer>
      <SlidesContainer2>
        <div style={{ gridColumnStart: 2 }}>
          <Slides images={imageSet2} />
        </div>
      </SlidesContainer2>
    </PassengerContainer>
  );
};

const PassengerContainer = styled.div`
@media ${device.mobileS} {
  ${'' /* margin-left:0px;
  background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
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
`

const Container = styled(motion.div)`
  position: relative;
  height: auto;
`;

const SlidesContainer = styled.div`
  position: relative;
  margin: 0 auto;
  ${'' /* display: grid; */}

  @media ${device.mobileS} {
    top: 150px;

  }
  @media ${device.tablet} {
    top: 0px;

  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

const SlidesContainer2 = styled.div`
  position: relative;
  ${'' /* width: 80%; */}
  margin: 0 auto;
  ${'' /* display: grid; */}

  @media ${device.mobileS} {
    top: 150px;

  }
  @media ${device.tablet} {
    top: 0px;

  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export default Passenger;
