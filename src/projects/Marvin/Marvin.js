import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { transition, imageVariants } from 'shared/animation';
import { TextBlock } from 'components/TextBlock';
import { VideoBlock } from 'components/VideoBlock';
import { device } from 'shared/theme';

const Marvin = () => {
  return (
    <MarvinContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Marvin Billing System"
        brief="This project is designed and build for me and my friends to easily track and record the lending service between us."
        stack="Vue.js | PHP | Laravel "
        platform=" Web/Mobile"
        category="Web/Design"
        creator="Shuai Wang | Linyue Zhang"
        plink="HTTPS://MARVIN.MONOMICHAEL.COM"
      />
      {/* <Image variants={imageVariants} src={daily1} /> */}
      <TextBlock
        title="Description and Technology"
        description="This project is designed and build for me and my friends to easily track and record the lending service between us. It’s mainly designed by Yizhou Pan, and developed by Linyue Zhang and Shuai Wang.
I take the responsibility to build the front end based on the prototype and discuss and decide the API setting with Linyu, the back-end developer."
      />
      <Container>
        <VideoBlock youtubeId="2y6z575UV68" />
      </Container>
    </MarvinContainer>
  );
};

const Image = styled(motion.img)`
  position: relative;
  width: 70%;
`;

const MarvinContainer = styled.div`
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
`


const Container = styled.div`
  padding-bottom: 15%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  .video {
    margin-top: 3rem;
    grid-column-start: 2;
  }
`;

export default Marvin;
