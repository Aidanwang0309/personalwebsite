import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './NoiseSketch';
import star from './StarSketch';
import { device } from 'shared/theme';


const CreativeCoding = () => {
  return (
    <CreativeContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Creative Coding"
        brief="This project is some small projects i build with P5.js about some interactive canvas"
        stack=" p5.js "
        platform=" Web"
        category="Web/Design"
        creator="Shuai Wang "
        plink="HTTPS://MARVIN.MONOMICHAEL.COM"
      />
      {/* <Image variants={imageVariants} src={daily1} /> */}
      <Container>
        <CanvasContainer>
          <P5Wrapper sketch={sketch} />
        </CanvasContainer>
        <CanvasContainer>
          <P5Wrapper sketch={star} />
        </CanvasContainer>
      </Container>
    </CreativeContainer>
  );
};

const CanvasContainer = styled.div`
  @media ${device.mobileS} {
    margin-top:100px;

  }
  @media ${device.tablet} {
    margin-left:-100px;
  }

`;

const Container = styled.div`

`

const CreativeContainer = styled.div`

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
`

export default CreativeCoding;
