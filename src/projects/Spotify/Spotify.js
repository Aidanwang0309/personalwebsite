import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import spotify from 'assets/spotify.png';
import { device } from 'shared/theme';

const Spotify = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Spotify Library Redesign"
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
    
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  width: 90%;
  margin: 20vh auto 0rem auto;
  img {
    width: 100%;
  }
`;

export default Spotify;
