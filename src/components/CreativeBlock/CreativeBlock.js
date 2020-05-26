import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from './Sketch';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { thumbnailVariants } from 'shared/animation';
import Media from 'react-media';

const CreativeBlock = ({ word, width, grid }) => {
  return (
    <CreativeContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={thumbnailVariants}
      grid={grid}
    >
      <Media query={{ minWidth: 1024 }}>
        {matches =>
          matches && <P5Wrapper sketch={Sketch} word={word} width={width} />
        }
      </Media>
    </CreativeContainer>
  );
};

const CreativeContainer = styled(motion.div)`
  z-index:1;
  position: fixed;
`;

export default CreativeBlock;
