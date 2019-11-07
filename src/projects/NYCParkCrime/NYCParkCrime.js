import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import CrimeChart from './CrimeChart';
import Tableau from './Tableau';
import Mapbox from './Map';

const NYCParkCrime = () => {
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="NYC Park Crime Data Visualization"
        brief="This project to utilize multiple platforms and tools to find the most efficient and clear method to deliver the message."
        stack="D3.js | Chart.js | Mapbox | Tableau | Powerpoint "
        platform=" Web"
        category="Web/ Design / Data Visualization"
        creator="Shuai Wang "
        plink="HTTPS://MARVIN.MONOMICHAEL.COM"
      />
      {/* <Image variants={imageVariants} src={daily1} /> */}
      <Container style={{ marginTop: '10rem' }}>
        <CrimeChart />
      </Container>
      <Container>
        <Tableau />
      </Container>
      <Container>
        <Mapbox />
      </Container>
    </motion.div>
  );
};

const Container = styled(motion.div)`
  position: relative;
  width: 80%;
  margin: 5rem auto;
`;

export default NYCParkCrime;
