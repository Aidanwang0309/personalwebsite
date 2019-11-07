import React from 'react';
import styled from 'styled-components';
import { Block } from 'components/Block';
import { CreativeBlock } from 'components/CreativeBlock';
import { motion } from 'framer-motion';
import passenger from 'assets/passenger.png';
import spotifycover from 'assets/spotifycover.png';
import UI4 from 'assets/UI4.png';
import lawcover from 'assets/lawcover.png';
import { device } from 'shared/theme';

const IDesignBlockData = [
  {
    id: 1,
    title: 'Passenger',
    categories: 'UX/UI',
    image: passenger,
    link: 'idesign/passenger',
    size: 1,
    grid: 'g1'
  },
  {
    id: 2,
    title: 'Spotify Library Redesign',
    categories: 'UX/UI',
    image: spotifycover,
    link: 'idesign/spotify',
    size: 1,
    grid: 'g2'
  },
  {
    id: 3,
    title: 'Random UI',
    categories: 'UX/UI ',
    image: UI4,
    link: 'idesign/random',
    size: 1,
    grid: 'g3'
  },
  {
    id: 4,
    title: 'Law Manager',
    categories: 'UX/UI ',
    image: lawcover,
    link: 'idesign/law-manager',
    size: 1,
    grid: 'g4'
  }
];

const IDesign = ({ match }) => {
  return (
    <ProjectContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.01 } } }}
    >
      <CreativeBlock word="Design" width={2} />
      {IDesignBlockData.map(
        ({ id, title, image, link, size, position, grid }) => (
          <Block
            key={id}
            id={id}
            title={title}
            img={image}
            link={link}
            size={size}
            position={position}
            grid={grid}
          />
        )
      )}
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
    grid-template-rows: repeat(2, calc(33vw - 0.4rem));
    grid-template-areas:
      'g1 g2 '
      'g3 g4 ';
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, calc(33vw - 2.4rem));
    grid-template-areas:
      'g1 g2 '
      'g3 g4 ';
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, calc(33vw - 2.4rem));
    grid-template-areas:
      '. g1 '
      'g2 g3 '
      'g4 .';
  }
`;

// calc(33vw - 2.4rem)
export default IDesign;
