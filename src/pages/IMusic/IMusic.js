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
      <CreativeBlock word="Music" width={2} />
      <Container>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/709075834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </Container>
      <Container2>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/513559578&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </Container2>
      <Container3>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578337633&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </Container3>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  position: relative;
  transform: translateY(162px);
  height: auto;
  width: 100%;
  display: grid;

  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, calc(33vw - 0.4rem));
    grid-template-areas:
      'g1 g1 '
      'g2 g2 '
      'g3 g3';
  }

  @media ${device.tablet} {
    grid-template-areas:
      'g1 g2 '
      'g3 g4 ';
  }

  @media ${device.laptop} {
    grid-template-areas:
      ' . g1'
      'g2 g3';
  }
`;

const Container = styled.div`
  grid-area: g1;
`;

const Container2 = styled.div`
  grid-area: g2;
`;
const Container3 = styled.div`
  grid-area: g3;
`;

// calc(33vw - 2.4rem)
export default IMusic;
