import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { Slides } from 'components/Slides';
import from1 from 'assets/form1.png';
import from2 from 'assets/form2.png';
import from3 from 'assets/form3.png';
import Carousel from 'assets/Carousel.gif';
import crypt1 from 'assets/crypt1.png';
import crypt2 from 'assets/crypt2.png';
import { device } from 'shared/theme';

const smallProjectsData = [
  {
    id: 's1',
    title: '001 : Multistep Shopping Component',
    brief:
      'This Porject is a react Multistep Shopping component which enable use to select, manage and checkout with credit card. The basic function includes step indication , order summery and form validation',
    stack: ' React | Node.js | ANTD ',
    platform: ' Web/Mobile',
    category: 'Web/Design',
    plink: 'HTTPS://PACIFIC-BRUSHLANDS-50507.HEROKUAPP.COM',
    glink: 'HTTPS://GITHUB.COM/AIDANWANG0309/TOPVIEWTEST',
    images: [
      { src: from1, des: 'des' },
      { src: from2, des: 'des' },
      { src: from3, des: 'des' }
    ]
  },
  {
    id: 's2',
    title: '002 : Crypto Board ',
    brief:
      'This is a Website mainly for practicing React Hooks. It utilizes the CryptoCompare API and fetch the Price Data.The data visualization is based on HighChart JS.',
    stack: ' React | Node.js ',
    platform: ' Web/Mobile',
    category: 'Web/Design',
    creator: 'Shuai Wang',
    plink: 'HTTPS://ADORING-DAVINCI-8AFCE0.NETLIFY.COM',
    glink: 'HTTPS://GITHUB.COM/AIDANWANG0309/CRYPTOV',
    images: [{ src: crypt1, des: 'des' }, { src: crypt2, des: 'des' }]
  },
  {
    id: 's3',
    title: '003 : Simple Carousel ',
    brief: 'A simple React Carousel for coding test',
    stack: ' React | Node.js ',
    platform: ' Web/Mobile',
    category: 'Web/Design',
    creator: 'Shuai Wang',
    plink: 'https://fluztest.herokuapp.com/',
    glink: 'HTTPS://GITHUB.COM/AIDANWANG0309/FLUZTEST',
    image: Carousel
  }
];

const SmallProjects = () => {
  return (
    <motion.div
      style={{ height: 'auto' }}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {smallProjectsData.map(p => {
        return (
          <div key={p.id}>
            <DescriptionBlock
              title={p.title}
              brief={p.brief}
              stack={p.stack}
              platform={p.platform}
              category={p.category}
              creator={p.creator}
              plink={p.plink}
              glink={p.glink}
            />
            <Container>
              {p.images && <Slides images={p.images} />}
              {p.image && <Image src={p.image} />}
            </Container>
          </div>
        );
      })}
    </motion.div>
  );
};

const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;

  margin-top: 220px;
`;

const Image = styled(motion.img)`
  position: relative;
  width: 100%;
`;

export default SmallProjects;
