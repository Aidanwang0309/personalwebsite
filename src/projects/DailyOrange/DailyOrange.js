import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import daily1 from 'assets/daily1.png';
import daily2 from 'assets/daily2.png';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { opacity: 0, scale: 0.5, transition },
  enter: {
    opacity: 1,
    scale: 1,
    transition
  }
};

const imageVariants2 = {
  exit: { opacity: 0, scale: 0.5, transition },
  enter: {
    opacity: 1,
    scale: 1,
    transition
  }
};

const DailyOrange = () => {
  return (
    <DailyContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.2 } } }}
    >
      <DescriptionBlock
        title="Daily Orange Basketball"
        brief="This project is to design and create a website to introduce Syracuse
           Universit Basketball Team. The principle is to utilize the motion
           design to provide a vivid image of both the team and lead player"
        stack="PHP | WORDPRESS"
        platform=" Web/Mobile"
        category="Web/Design"
        creator="Shuai Wang"
        plink="HTTP://DAILYORANGE.COM/2016/11/BASKETBALL-GUIDE-2016"
      />
      <Container>
        <div style={{ gridColumnStart: 2 }}>
          <Image variants={imageVariants} src={daily1} />
        </div>
      </Container>
      <Container>
        <div style={{ gridColumnStart: 2 }}>
          <Image2 variants={imageVariants2} src={daily2} />
        </div>
      </Container>
    </DailyContainer>
  );
};

const DailyContainer = styled(motion.div)`
  position: relative;

  @media ${device.mobileS} {
    ${'' /* background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px; */}
  }
  @media ${device.tablet} {
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

const Container = styled(motion.div)`
  position: relative;
  display: grid;

  @media ${device.mobileS} {
    top: 150px;
  }
  @media ${device.tablet} {
    top: 0px;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
  }

`;

const Image = styled(motion.img)`

  @media ${device.mobileS} {
    width: 100%;

  }
  @media ${device.tablet} {
    width: 100%;

  }
  @media ${device.laptop} {
    width: 100%;

  }
`;

const Image2 = styled(motion.img)`
  position: relative;
  width: 100%;

  @media ${device.mobileS} {
    margin-bottom:10vh;
  }
  @media ${device.tablet} {

  }

  @media ${device.laptop} {
    bottom: 0;
    width: 100%;
  }
`;

export default DailyOrange;
