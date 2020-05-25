import React from 'react';
import styled from 'styled-components';
import { Block } from 'components/Block';
import { CreativeBlock } from 'components/CreativeBlock';

import { PartyAnimal } from 'projects/PartyAnimal';
import { SmallProjects } from 'projects/SmallProjects';
import { Fluz } from 'projects/Fluz';
import { CreativeCoding } from 'projects/CreativeCoding';
import { DailyOrange } from 'projects/DailyOrange';
import { NYCParkCrime } from 'projects/NYCParkCrime';
import { VJ } from 'projects/VJ';
import { ImageCollage } from 'projects/ImageCollage';
import { Marvin } from 'projects/Marvin';
import { Tension } from 'projects/Tension';
import { APMotion } from 'projects/APMotion';

import daily from 'assets/dailyorangebs.gif';
import park from 'assets/park.png';
import creative from 'assets/creative.gif';
import marvin from 'assets/marvin.png';
import motionpic from 'assets/motion.png';
import random from 'assets/random.png';
import collage from 'assets/collage.gif';
import tension from 'assets/tension.png';
import party from 'assets/party.gif';
import vj from 'assets/VJ.png';
import fluz from 'assets/fluz.png';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ICodeBlockData = [
  {
    id: 1,
    component: PartyAnimal,
    title: `Party Manager`,
    categories: ['WEB', 'UX', 'UI'],
    image: party,
    link: 'party-animal',
    grid: 'g2'
  },
  {
    id: 2,
    component: SmallProjects,
    title: 'Random',
    categories: ['WEB', 'UX', 'UI'],
    image: random,
    link: 'random',
    grid: 'g3'
  },
  {
    id: 3,
    component: Fluz,
    title: 'Fluz',
    image: fluz,
    categories: ['WEB', 'UX', 'UI'],
    link: 'fluz',
    grid: 'g4'
  },
  {
    id: 4,
    component: CreativeCoding,
    title: 'CREATIVE',
    categories: ['WEB', 'UX', 'UI', 'DESIGN'],
    image: creative,
    link: 'creative-coding',
    grid: 'g5'
  },
  {
    id: 5,
    component: DailyOrange,
    title: 'DO BASKETBALL',
    categories: ['WEB', 'UX', 'UI'],
    image: daily,
    link: 'daily-orange',
    grid: 'g6'
  },
  {
    id: 6,
    component: NYCParkCrime,
    title: 'NYC PC DATAV',
    categories: ['WEB', 'UX', 'UI', 'DATA'],
    image: park,
    link: 'park-crime-datav',
    grid: 'g7'
  },
  {
    id: 7,
    component: VJ,
    title: 'VJ',
    image: vj,
    categories: ['DESIGN', 'AUDIO'],
    link: 'vj',
    grid: 'g8'
  },
  {
    id: 8,
    component: ImageCollage,
    title: 'I-COLLAGE',
    image: collage,
    link: 'image-collage',
    categories: ['DESIGN', 'WEB'],
    grid: 'g9'
  },
  {
    id: 9,
    component: Marvin,
    title: 'MARVIN',
    categories: ['WEB', 'UX', 'UI', 'DATA'],
    image: marvin,
    link: 'marvin-billing-system',
    grid: 'g10'
  },
  {
    id: 10,
    component: Tension,
    title: 'T0S VR',
    categories: ['VR', 'MUSIC', 'DANCE'],
    image: tension,
    link: 'tension-of-self',
    grid: 'g11'
  },
  {
    id: 11,
    component: APMotion,
    title: 'AP DATAV',
    categories: ['WEB', 'MOTION-CAPTURE', 'DATA'],
    image: motionpic,
    link: 'ap-motion',
    grid: 'g12'
  }
];

const ICode = () => {
  let match = useRouteMatch();
  return (
    <ProjectContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.01 } } }}
    >
      <CreativeBlock />
      {ICodeBlockData.map(
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

const ICodeRouter = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      {ICodeBlockData.map(({ component, link }, key) => (
        <Route
          exact
          path={`${match.path}/${link}`}
          key={key}
          component={component}
        />
      ))}
      <Route path={`${match.path}`} component={ICode} />
    </Switch>
  );
};

const ProjectContainer = styled(motion.div)`
  z-index:99;
  position: relative;
  margin-left:100px;
  height: auto;
  width: calc(100%-100px);
  display: grid;

  
  @media ${device.mobileS} {
    top:70px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(12, calc(60vw - 0.1rem));
    grid-template-areas:
      '. g2 g2 g2'
      '. g3 g3 g3'
      '. g4 g4 g4'
      '. g5 g5 g5'
      '. g6 g6 g6'
      '. g7 g7 g7'
      '. g8 g8 g8'
      '. g9 g9 g9'
      '. g10 g10 g10'
      '. g11 g11 g11'
      '. g12 g12 g12';
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(12, calc(50vw - 2.4rem));
    grid-template-areas:
      '. g2 g2 g2'
      '. g3 g3 g3'
      '. g4 g4 g4'
      '. g5 g5 g5'
      '. g6 g6 g6'
      '. g7 g7 g7'
      '. g8 g8 g8'
      '. g9 g9 g9'
      '. g10 g10 g10'
      '. g11 g11 g11'
      '. g12 g12 g12';
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 25% 100px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: repeat(12, calc(40vw - 2.4rem));
    grid-template-areas:
      '. . g2 g2 g2 .'
      '. . g3 g3 g3 .'
      '. . g4 g4 g4 .'
      '. . g5 g5 g5 .'
      '. . g6 g6 g6 .'
      '. . g7 g7 g7 .'
      '. . g8 g8 g8 .'
      '. . g9 g9 g9 .'
      '. . g10 g10 g10 .'
      '. . g11 g11 g11 .'
      '. . g12 g12 g12 .';
  background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
  background-size: 16.7% 100px;
  }
`;
export default ICodeRouter;
