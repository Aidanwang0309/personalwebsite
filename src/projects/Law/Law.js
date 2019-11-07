import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import law from 'assets/lawmanager.png';

const Law = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Law Manager"
        brief="This is a web console designing project cooperation with State Island to fix the problem that the criminal attorneys do not always know what collateral consequences their clients will face for their criminal charges"
        platform="Figma"
        category="UX"
        creator="Shuai Wang"
      />
      <ImageContainer>
        <img src={law} alt="" />
      </ImageContainer>
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

export default Law;
