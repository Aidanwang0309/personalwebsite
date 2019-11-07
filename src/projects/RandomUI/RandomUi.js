import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { Slides } from 'components/Slides';
import UI1 from 'assets/UI1.png';
import UI2 from 'assets/UI2.png';
import UI4 from 'assets/UI4.png';

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
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  width: 90%;
  margin: 7rem auto 3rem auto;
  img {
    width: 100%;
  }
`;

const SlidesContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

export default RandomUI;
