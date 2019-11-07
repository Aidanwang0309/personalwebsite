import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import zendesk from 'assets/zendesk.png';
import purpose from 'assets/purpose.png';

const Fluz = () => {
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Fluz Zendesk Help Center"
        brief="Projects Done Working for Fluz"
        stack=" Zendesk | PHP | Express.js"
        platform=" Web | Mobile"
        category="Web/Design"
        creator="Shuai Wang"
        plink="HTTPS://SUPPORT.FLUZ.APP/HC/EN-US"
      />
      <ImgContainer>
        <Image src={zendesk} />
      </ImgContainer>

      <DescriptionBlock
        title="Fluz Purpose Page"
        brief="A simple Purpose Page Migrated from PHP to React"
        stack=" React | Node.js | Express.js"
        platform=" Web | Mobile"
        category="Web/Design"
        creator="Shuai Wang"
        plink="HTTPS://PEDANTIC-DAVINCI-522CBA.NETLIFY.COM"
      />
      <ImgContainer>
        <Image src={purpose} />
      </ImgContainer>
    </motion.div>
  );
};

const Container = styled.div`
  position: relative;
  display: grid;
  height: 600px;
  margin-top: 15%;
  grid-template-columns: 1fr 5fr 1fr;
  img {
    grid-column-start: 2;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  top: 150px;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 50px;
`;

const Image = styled(motion.img)`
  width: 100%;
`;

export default Fluz;
