import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './NoiseSketch';
import star from './StarSketch';
const CreativeCoding = () => {
  return (
    <motion.div
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
      <CanvaContainer>
        <P5Wrapper sketch={sketch} />
      </CanvaContainer>
      <CanvaContainer>
        <P5Wrapper sketch={star} />
      </CanvaContainer>
    </motion.div>
  );
};

const CanvaContainer = styled.div`
  transform: translateY(30%);
`;

export default CreativeCoding;
