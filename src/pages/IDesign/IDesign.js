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
import { Law } from 'projects/Law';
import { Spotify } from 'projects/Spotify';
import { RandomUI } from 'projects/RandomUI';
import { Passenger } from 'projects/Passenger';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const IDesignBlockData = [
  {
    id: 1,
    component: Passenger,
    title: 'Passenger',
    categories: 'UX/UI',
    image: passenger,
    link: 'passenger',
    size: 1,
    grid: 'g1'
  },
  {
    id: 2,
    component: Spotify,
    title: 'Spotify Library Redesign',
    categories: 'UX/UI',
    image: spotifycover,
    link: 'spotify',
    size: 1,
    grid: 'g2'
  },
  {
    id: 3,
    component: RandomUI,
    title: 'Random UI',
    categories: 'UX/UI ',
    image: UI4,
    link: 'random',
    size: 1,
    grid: 'g3'
  },
  {
    id: 4,
    component: Law,
    title: 'Law Manager',
    categories: 'UX/UI ',
    image: lawcover,
    link: 'law-manager',
    size: 1,
    grid: 'g4'
  }
];

const IDesign = () => {
  let match = useRouteMatch();

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
            link={`${match.url}/${link}`}
            size={size}
            position={position}
            grid={grid}
          />
        )
      )}
    </ProjectContainer>
  );
};

const IDesignRouter = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      {IDesignBlockData.map(({ component, link }, key) => (
        <Route
          exact
          path={`${match.path}/${link}`}
          key={key}
          component={component}
        />
      ))}
      <Route path={`${match.path}`} component={IDesign} />
    </Switch>
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
export default IDesignRouter;
