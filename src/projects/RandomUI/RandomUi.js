import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { Slides } from 'components/Slides';
import UI1 from 'assets/UI1.png';
import UI2 from 'assets/UI2.png';
import UI4 from 'assets/UI4.png';
import { device } from 'shared/theme';

const imageSet = [
  { src: UI1, des: 'des' },
  { src: UI2, des: 'des' },
  { src: UI4, des: 'des' }
];

const RandomUI = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Random UI Collection"
        brief="This is a collection of Random UI/UX Design"
        platform="Figma"
        category="UX"
        creator="Shuai Wang"
      />
      <SlidesContainer>
        <Slides images={imageSet} />
      </SlidesContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  height: auto;
  margin-left:100px;
  @media ${device.mobileS} {
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px;
  }
  @media ${device.tablet} {
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

const SlidesContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: grid;

  @media ${device.mobileS} {

  }
  @media ${device.tablet} {

  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export default RandomUI;
