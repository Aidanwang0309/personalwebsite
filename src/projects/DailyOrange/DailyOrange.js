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
    scale: 1.3,
    skew: 10,
    transition
  }
};

const DailyOrange = () => {
  return (
    <Container
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
        <Image variants={imageVariants} src={daily1} />
        <Image2 variants={imageVariants2} src={daily2} />
      </Container>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
`;

const Image = styled(motion.img)`
  position: absolute;

  @media ${device.mobileS} {
    width: 80%;
    top: 45%;
    left: 20%;
  }
  @media ${device.tablet} {
    width: 70%;
    right: 0px;
    top: -150px;
  }
  @media ${device.laptop} {
    width: 60%;
    left: 40%;
    top: -139px;
  }
`;

const Image2 = styled(motion.img)`
  position: relative;
  z-index: -1;
  @media ${device.mobileS} {
    padding: 5rem 0;
    width: 68%;
    bottom: -200px;
    left: 50px;
  }
  @media ${device.tablet} {
    padding: 3rem 0;
    width: 60%;
    left: 27%;
    bottom: -80px;
  }

  @media ${device.laptop} {
    width: 60%;
    left: 23%;
    bottom: -139px;
  }
`;

export default DailyOrange;
