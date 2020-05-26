import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { TextBlock } from 'components/TextBlock';
import { VideoBlock } from 'components/VideoBlock';
import { device } from 'shared/theme';

const descDetail = (
  <p> The Technology Toolkit Include:
    <ul>
      <li><strong>OfxProcessing</strong> to deliver different shaders and effects</li>
      <li><strong>OfxSerial</strong> to communicate through Arduino and Openframeworks based on ASCII</li>
      <li><strong>ofxAssimpModelLoade</strong>r to load the 3D modeling</li>
    </ul>
The Project include 5 scenes:
    <ul>
      <li><strong>The dancing Wave</strong> which interacts through microphone with different Herz received.</li>
      <li><strong>The Beats Ripple</strong> which detects the Drum, Bass, and Hi-chat and spread</li>
      <li><strong>The leopard</strong>An animated wire-framed 3D modeling.</li>
      <li><strong>The Planet</strong> An audio interactive exploding geometry.</li>
      <li><strong>The Neon Stars,</strong>3D flying stars With Flickering Neon Light</li>
    </ul>
and 2 physical installations.
    <ul>
      <li>A HandMade infinity Mirror</li>
      <li>An interactive Neon Lights With Arduino</li>
    </ul>
  </p>
)

const VJ = () => {
  return (
    <VJContainer
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title=" VJ Project With Audio Reactive Aduino Neon Light"
        brief="This Project is to utilize Openframeworks, an open source toolkit designed for creative coding, to develop a sound Interactive Visual Performance."
        stack="Openframeworks C++ | Arduino UNO. "
        platform=" Web | Physical Installation | Laser Cutting | 3d Printing"
        category="Audio Reactive | Art | Installation"
        creator="Shuai Wang"
        glink="HTTPS://GITHUB.COM/AIDANWANG0309/OPENFRAMEWORKSVJ"
      />
      <TextBlock
        title="Description and Technology"
        description={descDetail}
      />
      <VideoContainer>
        <VideoBlock youtubeId="VeS_Ar9LzXA"></VideoBlock>
      </VideoContainer>
      <VideoContainer>
        <VideoBlock youtubeId="0xhHFQAo7B4"></VideoBlock>
      </VideoContainer>
    </VJContainer>
  );
};

const VJContainer = styled.div`

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

const Image = styled(motion.img)`
  position: relative;
  width: 70%;
`;

const VideoContainer = styled.div`
  margin-bottom: 15%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  .video {
    margin-top: 3rem;
    grid-column-start: 2;
  }
`;

export default VJ;
