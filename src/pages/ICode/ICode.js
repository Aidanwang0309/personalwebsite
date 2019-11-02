import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Block } from 'components/Block';
import daily from 'assets/dailyorangebs.gif';
import park from 'assets/park.png';
import creative from 'assets/creative.gif';
import marvin from 'assets/marvin.png';
import motion from 'assets/motion.png';
import random from 'assets/random.png';
import collage from 'assets/collage.gif';
import tension from 'assets/tension.png';
import vj from 'assets/VJ.png';

const ICodeBlockData = [
  {
    id: 1,
    title: 'DAILY ORANGE BASKET BALL',
    categories: 'WEB UX/UI',
    image: daily,
    link: '/daily-orange-basketball',
    size: 2,
    position: 'middle',
    grid: 'g2'
  },
  {
    id: 2,
    title: 'NYC PARK CRIME DATAV',
    categories: 'WEB / UX/UI / DATA',
    image: park,
    link: '/nyc-park-crime-datav',
    size: 2,
    grid: 'g3'
  },
  {
    id: 3,
    title: 'CREATIVE CODING',
    categories: 'WEB / UX/UI ',
    image: creative,
    link: '/creative-coding',
    size: 1,
    position: 'middle',
    grid: 'g4'
  },
  {
    id: 4,
    title: 'ASSOCIATED PRESS MOTION DATAV',
    categories: 'WEB / UX/UI / MOTION CAPTURE ',
    image: motion,
    link: '/ap-motion-capture',
    size: 1,
    position: 'middle',
    grid: 'g5'
  },
  {
    id: 5,
    title: 'MARVIN BILLING SYSTEM',
    image: marvin,
    link: '/marvin-billing-systeml',
    size: 2,
    grid: 'g6'
  },
  {
    id: 6,
    title: 'SMALL PROJECT',
    image: random,
    link: '/small-project',
    size: 2,
    grid: 'g7'
  },
  {
    id: 7,
    title: 'IMAGE COLLAGE',
    image: collage,
    link: '/image-collage',
    size: 1,
    position: 'middle',
    grid: 'g8'
  },
  {
    id: 8,
    title: 'AUDIO REACTIVE VJ',
    image: vj,
    link: '/vj',
    size: 1,
    grid: 'g9'
  },
  {
    id: 9,
    title: 'TENSION OF SELF',
    image: tension,
    link: '/tension-of-self',
    size: 2,
    grid: 'g10'
  }
];

const ICode = ({ match }) => {
  return (
    <Fragment>
      <ProjectContainer>
        <Block size={1} title="I CODE" grid="g1" />
        {ICodeBlockData.map(project => (
          <Block
            key={project.id}
            title={project.title}
            img={project.image}
            link={project.link}
            size={project.size}
            position={project.position}
            grid={project.grid}
          />
        ))}
      </ProjectContainer>
    </Fragment>
  );
};

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  top: 162px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(5, calc(33vw - 2.4rem));
  grid-template-areas:
    'g1 g2 g2'
    'g3 g3 g4'
    'g5 g6 g6'
    'g7 g7 g8'
    'g9 g10 g10 ';
`;
// calc(33vw - 2.4rem)
export default ICode;
