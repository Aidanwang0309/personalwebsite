import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { transition, imageVariants } from 'shared/animation';
import { TextBlock } from 'components/TextBlock';
import { VideoBlock } from 'components/VideoBlock';

const Marvin = () => {
  return (
    <motion.div
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
    </motion.div>
  );
};

const Image = styled(motion.img)`
  position: relative;
  width: 70%;
`;

const Container = styled.div`
  transform: translateY(30%);
  margin-bottom: 15%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  .video {
    margin-top: 3rem;
    grid-column-start: 2;
  }
`;

export default Marvin;
