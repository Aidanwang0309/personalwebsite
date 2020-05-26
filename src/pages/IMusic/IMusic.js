import React from 'react';
import styled from 'styled-components';
import { CreativeBlock } from 'components/CreativeBlock';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';

const IMusic = ({ match }) => {
  return (
    <ProjectContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.01 } } }}
    >
      <Container>
        <iframe
          title="Obsession"
          width="100%"
          height="100%"
          scrolling="yes"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1058645758&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </Container>
      {/* <CreativeBlock word="Music" width={2} /> */}
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  position: relative;
  height: auto;
  width: calc(100%-100px);
  height:100vh;
  z-index:999;

  @media ${device.mobileS} {
    top:20vw;
  }

  @media ${device.tablet} {
    top:0;  
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
`;

const Container = styled.div`

@media ${device.mobileS} {
    height:50%;
    width:90vw;
    padding:5vh 0;
    margin:0 auto;
  }

  @media ${device.laptop} {
    height:70%;
    width:60vw;
    padding:5vh 0;
    margin:0 auto;
  }

`;


// calc(33vw - 2.4rem)
export default IMusic;
