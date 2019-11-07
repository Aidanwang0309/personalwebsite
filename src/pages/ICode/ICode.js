import React from 'react';
import styled from 'styled-components';
import { Block } from 'components/Block';
import { CreativeBlock } from 'components/CreativeBlock';
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

const ICodeBlockData = [
  {
    id: 1,
    title: 'Party Animal Manager',
    categories: 'WEB UX/UI',
    image: party,
    link: 'icode/party-animal',
    size: 2,
    position: 'middle',
    grid: 'g2'
  },
  {
    id: 2,
    title: 'Random Projects',
    image: random,
    link: 'icode/random',
    size: 2,
    grid: 'g3'
  },
  {
    id: 3,
    title: 'Fluz',
    image: fluz,
    link: 'icode/fluz',
    size: 1,
    grid: 'g4'
  },
  {
    id: 4,
    title: 'CREATIVE CODING',
    categories: 'WEB / UX/UI ',
    image: creative,
    link: 'icode/creative-coding',
    size: 1,
    position: 'middle',
    grid: 'g5'
  },
  {
    id: 5,
    title: 'DAILY ORANGE BASKET BALL',
    categories: 'WEB UX/UI',
    image: daily,
    link: 'icode/daily-orange',
    size: 2,
    position: 'middle',
    grid: 'g6'
  },
  {
    id: 6,
    title: 'NYC PARK CRIME DATAV',
    categories: 'WEB / UX/UI / DATA',
    image: park,
    link: 'icode/park-crime-datav',
    size: 2,
    grid: 'g7'
  },
  {
    id: 7,
    title: 'AUDIO REACTIVE VJ',
    image: vj,
    link: 'icode/vj',
    size: 1,
    grid: 'g8'
  },
  {
    id: 8,
    title: 'IMAGE COLLAGE',
    image: collage,
    link: 'icode/image-collage',
    size: 1,
    position: 'middle',
    grid: 'g9'
  },
  {
    id: 9,
    title: 'MARVIN BILLING SYSTEM',
    image: marvin,
    link: 'icode/marvin-billing-system',
    size: 2,
    grid: 'g10'
  },
  {
    id: 10,
    title: 'TENSION OF SELF',
    image: tension,
    link: 'icode/tension-of-self',
    size: 2,
    grid: 'g11'
  },
  {
    id: 11,
    title: 'AP DATAV',
    categories: 'WEB / UX/UI / MOTION CAPTURE ',
    image: motionpic,
    link: 'icode/ap-motion',
    size: 1,
    grid: 'g12'
  }
];

const ICode = ({ match }) => {
  return (
    <ProjectContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.01 } } }}
    >
      <CreativeBlock />
      {ICodeBlockData.map(
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
export default ICode;
