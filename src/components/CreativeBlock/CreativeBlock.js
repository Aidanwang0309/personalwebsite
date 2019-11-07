import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from './Sketch';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { thumbnailVariants } from 'shared/animation';
import { device } from 'shared/theme';
import Media from 'react-media';

const CreativeBlock = ({ word, width }) => {
  return (
    <CreativeContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={thumbnailVariants}
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
  display: flex;
  justify-content: start;
  position: fixed;
`;

export default CreativeBlock;
