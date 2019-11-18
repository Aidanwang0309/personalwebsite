import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import CrimeChart from './CrimeChart';
import Tableau from './Tableau';
import Mapbox from './Map';
import { TextBlock } from 'components/TextBlock';
import { Slides } from 'components/Slides';
import cleaning1 from 'assets/cleaning1.png';


const description = (
  <p>
    Help to visualize the crime data of 1158 parks in New York from{' '}
    <strong>Q3/2016</strong> to <strong>Q4/2017</strong>. The Sample DataSet I
    download from Open Data NYC contains <strong>5</strong> attributes
    including:
    <ul>
      <li>
        <strong>ParkName</strong>
      </li>
      <li>
        <strong>Borough</strong>
      </li>
      <li>
        <strong>Size</strong>
      </li>
      <li>
        <strong>Category</strong>
      </li>
      <li>
        <strong>CrimeNumber</strong>
      </li>
    </ul>
    There are <strong>1158</strong> Parks and <strong>7</strong> kinds of crime.
    Data Source from <strong>OpendataNYC</strong>
  </p>
);
const imageSet = [{ src: cleaning1, des: 'des' }];
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
      <TextBlock title="Description and Technology" description={description} />
      <TextBlock title="Data Cleaning" />
      <Container>
        <Slides images={imageSet} />
      </Container>
      <TextBlock title="DELIVERABLE 1" description="In the first section, I focus on the total number of each crime from Q3/2016 to Q4/2017. I find it interesting that the number of crime decrease in Q1 and Q2. I guess it's about the weather. Therefore, I combine the average temperature and the crime number together."/>
      <Container style={{ marginTop: '10rem' }}>
        <CrimeChart />
      </Container>
      <TextBlock title="DELIVERABLE 2" description="In the second section, I focus on the most dangerous park which the number of crime is large. I rank the 4 quarters and obtain the top 10 of each quarter. I also made a search for end users to search by park Name. I combine the line chart in the ranking chart to make it easy to see the change,"/>
      <Container>
        <Tableau />
      </Container>
      <TextBlock title="DELIVERABLE 3" description="In the third section, I focus on the borough part. I want to utilize the map and mark each park. However, I find it too hard to write 1158 destination in Geojson file. I change my mind and decide to use the area map to see the level of security of each borough. I download a Geojson file and add Crime_Number property inside. "/>
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
