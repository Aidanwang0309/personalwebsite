import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import zendesk from 'assets/zendesk.png';
import purpose from 'assets/purpose.png';
import { device } from 'shared/theme';

const Fluz = () => {
  return (
    <FluzContainer
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
        <div style={{ gridColumnStart: 2 }}>
          <Image src={zendesk} />
        </div>

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
        <div style={{ gridColumnStart: 2 }}>
          <Image src={purpose} />
        </div>
      </ImgContainer>
    </FluzContainer>
  );
};

const FluzContainer = styled.div`

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

const ImgContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 50px;
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
  width: 100%;
`;

export default Fluz;
