import React from 'react';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { TextBlock } from 'components/TextBlock';
import { PDFReader } from 'components/PDFReader';
import ap from 'assets/ap.pdf';
import { device } from 'shared/theme';
import styled from 'styled-components';

const APMotion = () => {
  return (
    <APContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="AP / Multimer Motion Data Visualization"
        brief="This project is to create a approachable and precise method to visualize and compare the motion data to show how media platform will influence the engagement level "
        stack="three.js | D3.js | After Effect | Motion Builder |  "
        platform=" Web/VR"
        category="Web/Design/Data Visualization"
        creator="Shuai Wang"
        plink=" https://hereisjade.github.io/AP-mocap-data-viz/index.html"
        glink="https://github.com/Aidanwang0309/AP-mocap-data-viz"
      />

      <TextBlock
        title="Description and Technology"
        description="
        In this project, Our goal is to combine the physical and physiological data we collected and present straightforward data of the engagement level of participants. I took responsible to clean the motion data in Excel and import the geo data into three.js utilizing D3 data reader,The color tone of the dots present the heart rate and the size of the dot is combine with alpha wave, which is an index of engagement level.
        "
      />
      <PDFReader src={ap}></PDFReader>
    </APContainer>
  );
};

const APContainer = styled.div`
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

export default APMotion;
