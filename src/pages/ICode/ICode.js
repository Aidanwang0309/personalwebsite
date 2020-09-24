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
import { HelpMainStreet } from 'projects/HelpMainStreet';

import helpMainStreet from "assets/helpMainStreet.png";
import daily from 'assets/daily.png';
import park from 'assets/park.png';
import creative from 'assets/creative.gif';
import marvin from 'assets/marvin.png';
import motionpic from 'assets/motion.png';
import random from 'assets/random.png';
import collage from 'assets/collage.gif';
import tension from 'assets/tension.png';
import party from 'assets/party.png';
import vj from 'assets/VJ.png';
import fluz from 'assets/fluz.png';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ICodeBlockData = [
  {
    id: 1,
    component: HelpMainStreet,
    title: `01 . Help Main Street`,
    categories: ['WEB'],
    image: helpMainStreet,
    link: 'help-main-street',
    grid: 'g2'
  },
  {
    id: 2,
    component: PartyAnimal,
    title: `02 . Party Manager`,
    categories: ['WEB', 'UX', 'UI'],
    image: party,
    link: 'party-animal',
    grid: 'g3'
  },
  {
    id: 3,
    component: SmallProjects,
    title: '03.Random',
    categories: ['WEB', 'UX', 'UI'],
    image: random,
    link: 'random',
    grid: 'g4'
  },
  {
    id: 4,
    component: Fluz,
    title: '04.Fluz',
    image: fluz,
    categories: ['WEB', 'UX', 'UI'],
    link: 'fluz',
    grid: 'g5'
  },
  {
    id: 5,
    component: CreativeCoding,
    title: '05.CREATIVE',
    categories: ['WEB', 'UX', 'UI', 'DESIGN'],
    image: creative,
    link: 'creative-coding',
    grid: 'g6'
  },
  {
    id: 6,
    component: DailyOrange,
    title: '06.DO BASKETBALL',
    categories: ['WEB', 'UX', 'UI'],
    image: daily,
    link: 'daily-orange',
    grid: 'g7'
  },
  {
    id: 7,
    component: NYCParkCrime,
    title: '07.NYC PC DATAV',
    categories: ['WEB', 'UX', 'UI', 'DATA'],
    image: park,
    link: 'park-crime-datav',
    grid: 'g8'
  },
  {
    id: 8,
    component: VJ,
    title: '08.VJ',
    image: vj,
    categories: ['DESIGN', 'AUDIO'],
    link: 'vj',
    grid: 'g9'
  },
  {
    id: 9,
    component: ImageCollage,
    title: '09.I-COLLAGE',
    image: collage,
    link: 'image-collage',
    categories: ['DESIGN', 'WEB'],
    grid: 'g10'
  },
  {
    id: 10,
    component: Marvin,
    title: '10.MARVIN',
    categories: ['WEB', 'UX', 'UI', 'DATA'],
    image: marvin,
    link: 'marvin-billing-system',
    grid: 'g11'
  },
  {
    id: 11,
    component: Tension,
    title: '11.T0S VR',
    categories: ['VR', 'MUSIC', 'DANCE'],
    image: tension,
    link: 'tension-of-self',
    grid: 'g12'
  },
  {
    id: 12,
    component: APMotion,
    title: '12.AP DATAV',
    categories: ['WEB', 'MOTION-CAPTURE', 'DATA'],
    image: motionpic,
    link: 'ap-motion',
    grid: 'g13'
  }
];

const ICode = () => {
  let match = useRouteMatch();
  return (
    <ProjectContainer
      className="ProjectContainer"
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
  z-index:999 !important;
  position: relative;
  height: auto;
  width: calc(100%-100px);
  display: grid;
  padding-bottom: 20rem;
  padding-top:10rem;

  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(12, calc(60vw - 0.1rem));
    margin-left:0px;
    grid-template-areas:
      '. g2 g2 g2 '
      '. g3 g3 g3'
      '. g4 g4 g4'
      '. g5 g5 g5'
      '. g6 g6 g6'
      '. g7 g7 g7'
      '. g8 g8 g8'
      '. g9 g9 g9'
      '. g10 g10 g10'
      '. g11 g11 g11'
      '. g12 g12 g12'
      '. g13 g13 g13';
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px;
  }

  @media ${device.tablet} {
    top:0;  
    margin-left:100px;
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
      '. g12 g12 g12'
      '. g13 g13 g13';
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 25% 100px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: repeat(12, calc(12vw - 2.4rem));
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
      '. . g12 g12 g12 .'
      '. . g13 g13 g13.';;
  background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
  background-size: 16.7% 100px;
  }
`;
export default ICodeRouter;
