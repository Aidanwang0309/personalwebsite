import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { TextBlock } from 'components/TextBlock';
import { motion } from 'framer-motion';
import { transition } from 'shared/animation';
import collage from 'assets/collage.gif';
import { device } from 'shared/theme';

const ImageCollage = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Image Collage Project"
        brief="This project is to use the Bitmap of VideoCap/ RGB Shader/ to combine the photos and create a programmatic image collage."
        stack="Xcode | C++ | Openframeworks "
        platform=" Web"
        category="Web/Design"
        creator="Shuai Wang | Alex Nathanson"
        glink="https://github.com/Aidanwang0309/accproject1"
      />

      <TextBlock
        title="Description and Technology"
        description=" This project is created based on Openframeworks. It requires user to upload 3 image, which represents the R,G,B of Color Tunnel. The camera will capture the live stream and substitute the RGB with the given image can create a live collage."
      />
      <ImgContainer>
        <div style={{ gridColumnStart: 2 }}>
          <img src={collage} />
        </div>
      </ImgContainer>

    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
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
`;

const ImgContainer= styled.div`
  position: relative;
  display: grid;
  overflow:hidden;
  @media ${device.mobileS} {
    top: 150px;
  }
  @media ${device.tablet} {
    top: 0px;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
  }
`

export default ImageCollage;
