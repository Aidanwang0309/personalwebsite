import React from 'react';
import styled from 'styled-components';
import { Block } from 'components/Block';
import { CreativeBlock } from 'components/CreativeBlock';
import { motion } from 'framer-motion';
import passenger from 'assets/passenger.png';
import spotifycover from 'assets/spotifycover.png';
import UI4 from 'assets/RandomUI.png';
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
    categories: ['UI', 'UX'],
    image: passenger,
    link: 'passenger',
    size: 1,
    grid: 'g1'
  },
  {
    id: 2,
    component: Spotify,
    title: 'Spotify Lib Redesign',
    categories: ['UI', 'UX'],
    image: spotifycover,
    link: 'spotify',
    size: 1,
    grid: 'g2'
  },
  {
    id: 3,
    component: RandomUI,
    title: 'Random UI',
    categories: ['UI', 'UX'],
    image: UI4,
    link: 'random',
    size: 1,
    grid: 'g3'
  },
  {
    id: 4,
    component: Law,
    title: 'Law Manager',
    categories: ['UI', 'UX'],
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
        ({ id, title, image, link, size, position, grid, categories }) => (
          <Block
            key={id}
            id={id}
            title={title}
            img={image}
            link={`${match.url}/${link}`}
            grid={grid}
            categories={categories}
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
  z-index:999 !important;
  position: relative;
  height: auto;
  width: calc(100%-100px);
  display: grid;
  padding-bottom: clamp(10vh 15vh 20vh);
  
  @media ${device.mobileS} {
    top:20vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, calc(60vw - 0.1rem));
    margin-left:0px;
    grid-template-areas:
      '. g1 g1 g1'
      '. g2 g2 g2 '
      '. g3 g3 g3'
      '. g4 g4 g4';
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px;
  }

  @media ${device.tablet} {
    top:0;  
    margin-left:100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, calc(50vw - 2.4rem));
    grid-template-areas:
      '. g1 g1 g1'
      '. g2 g2 g2'
      '. g3 g3 g3'
      '. g4 g4 g4';
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 25% 100px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: repeat(4, calc(50vw - 2.4rem));
    grid-template-areas:
      '. . g1 g1 g1 .'
      '. . g2 g2 g2 .'
      '. . g3 g3 g3 .'
      '. . g4 g4 g4 .';
  background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
  background-size: 16.7% 100px;
  }
`;

// calc(33vw - 2.4rem)
export default IDesignRouter;
