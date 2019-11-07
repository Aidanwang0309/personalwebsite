import React from 'react';
import styled from 'styled-components';
import { DescriptionBlock } from 'components/DescriptionBlock';
import { motion } from 'framer-motion';
import { TextBlock } from 'components/TextBlock';
import { VideoBlock } from 'components/VideoBlock';

const Tension = () => {
  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <DescriptionBlock
        title="Tension Of Self"
        brief="This project is an immersive experience utilizing motion capture technology which enable the audience to interact with a live dancer"
        stack="Unreal Engine | Motion Builder | Maya 3D | Resolume | Max | Ableton | "
        platform="VR | Dancing | Midi Controller | Projector Mapping"
        category="Art | Mocap | VR"
        creator="Shuai Wang | Shuting Jiang | Terrick Gutierrez |Gabriel Brasil "
        plink="HTTPS://MARVIN.MONOMICHAEL.COM"
      />
      <TextBlock
        title="Description and Technology"
        description="What does it take to become one’s true authentic self in a world that constantly pushes us to conform? “Tension of Self” is a multimedia performance that explores an individual’s journey towards self-actualization using a live dance and musical performance choreographed with motion capture technology. Starting from a blank slate, viewers join the performer as she finds her way in an increasingly complex world inhabited by shadows that represent herself and society. “Tension of Self” invites the audience to travel along with the dancer as she explores the internal battle between conformity versus resistance and separation versus integration.

In this immersive experience, the audience is invited to interact with a live dance choreography performed by Dance and Technology student Sarah Amores, who is joined by her own projected shadows. This was made possible with the use of state-of-the-art motion capture technology available through the collaboration of NYU’s Integrated Digital Media Program and Interactive Telecommunications Program."
      />
      {/* <Image variants={imageVariants} src={daily1} /> */}
      <VideoContainer>
        <VideoBlock youtubeId="zy5JjuDKv2M"></VideoBlock>
      </VideoContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  height: auto;
`;

const Image = styled(motion.img)`
  position: relative;
  width: 70%;
`;

const VideoContainer = styled.div`
  margin-bottom: 15%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  .video {
    margin-top: 3rem;
    grid-column-start: 2;
  }
`;
export default Tension;
