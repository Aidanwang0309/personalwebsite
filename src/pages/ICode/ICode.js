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
    title: 'Party Animal Manager',
    categories: 'WEB UX/UI',
    image: party,
    link: 'party-animal',
    size: 2,
    position: 'middle',
    grid: 'g2'
  },
  {
    id: 2,
    component: SmallProjects,
    title: 'Random Projects',
    categories: 'WEB UX/UI',
    image: random,
    link: 'random',
    size: 2,
    grid: 'g3'
  },
  {
    id: 3,
    component: Fluz,
    title: 'Fluz',
    image: fluz,
    categories: 'WEB UX/UI',
    link: 'fluz',
    size: 1,
    grid: 'g4'
  },
  {
    id: 4,
    component: CreativeCoding,
    title: 'CREATIVE CODING',
    categories: 'WEB / UX/UI / Design ',
    image: creative,
    link: 'creative-coding',
    size: 1,
    position: 'middle',
    grid: 'g5'
  },
  {
    id: 5,
    component: DailyOrange,
    title: 'DAILY ORANGE BASKET BALL',
    categories: 'WEB UX/UI',
    image: daily,
    link: 'daily-orange',
    size: 2,
    position: 'middle',
    grid: 'g6'
  },
  {
    id: 6,
    component: NYCParkCrime,
    title: 'NYC PARK CRIME DATAV',
    categories: 'WEB / UX/UI / DATA',
    image: park,
    link: 'park-crime-datav',
    size: 2,
    grid: 'g7'
  },
  {
    id: 7,
    component: VJ,
    title: 'AUDIO REACTIVE VJ',
    image: vj,
    categories: 'Design / AUDIO',
    link: 'vj',
    size: 1,
    grid: 'g8'
  },
  {
    id: 8,
    component: ImageCollage,
    title: 'IMAGE COLLAGE',
    image: collage,
    link: 'image-collage',
    categories: 'Design',
    size: 1,
    position: 'middle',
    grid: 'g9'
  },
  {
    id: 9,
    component: Marvin,
    title: 'MARVIN BILLING SYSTEM',
    categories: 'WEB / UX/UI / DATA',
    image: marvin,
    link: 'marvin-billing-system',
    size: 2,
    grid: 'g10'
  },
  {
    id: 10,
    component: Tension,
    title: 'TENSION OF SELF',
    categories: 'VR / MUSIC / DANCE',
    image: tension,
    link: 'tension-of-self',
    size: 2,
    grid: 'g11'
  },
  {
    id: 11,
    component: APMotion,
    title: 'AP DATAV',
    categories: 'WEB / MOTION CAPTURE / DATA ',
    image: motionpic,
    link: 'ap-motion',
    size: 1,
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
            size={size}
            position={position}
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
  position: relative;
  transform: translateY(162px);
  height: auto;
  width: 100%;
  display: grid;

  @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, calc(40vw - 0.1rem));
    grid-template-areas:
      'g2 g6'
      'g5 g8'
      'g3 g3'
      'g7 g7'
      'g9 g4'
      'g10 g10'
      'g11 g11'
      'g12 .';
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(6, calc(33vw - 2.4rem));
    grid-template-areas:
      'g2 g2 g4'
      'g5 g3 g3'
      'g6 g6 g8'
      'g9 g7 g7'
      'g10 g10 g12'
      'g11 g11 .';
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(6, calc(33vw - 2.4rem));
    grid-template-areas:
      'g1 g2 g2'
      'g3 g3 g4'
      'g5 g6 g6'
      'g7 g7 g8'
      'g9 g10 g10'
      'g11 g11 g12';
  }
`;

// calc(33vw - 2.4rem)
export default ICodeRouter;
