import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import spotify from 'assets/spotify.png';

const Spotify = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Law Manager"
        brief="This is a UX redesign project based on the current Spotify Music Player. It's mainly focus on the interaction on the library page and main page to show more information and give more customizability to use"
        platform="Figma"
        category="UX"
        creator="Shuai Wang"
      />
      <ImageContainer>
        <img src={spotify} alt="" />
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

export default Spotify;
