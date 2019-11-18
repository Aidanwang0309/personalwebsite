import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { TextBlockWithPic } from 'components/TextBlockWithPic';
import { motion } from 'framer-motion';
import { transition } from 'shared/animation';
import collage from 'assets/collage.gif';

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

      <TextBlockWithPic
        title="Description and Technology"
        image={collage}
        description=" This project is created based on Openframeworks. It requires user to upload 3 image, which represents the R,G,B of Color Tunnel. The camera will capture the live stream and substitute the RGB with the given image can create a live collage."
      />
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
`;

export default ImageCollage;
