import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextBlockWithPic = ({ title, description, image }) => {
  return (
    <Container>
      <Subtitle>{title}</Subtitle>
      <Description>{description}</Description>
      <Image src={image}></Image>
    </Container>
  );
};

const Container = styled(motion.div)`
    transform:translateY(45%);
    margin-top:5%;
    width: calc(100%-100px);
    min-height:20vh
    display:grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas:
    '. title  image . '
    '. content image .'
`;

const Subtitle = styled(motion.h2)`
  grid-area: title;
  align-self: end;
  margin: 0;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 1.5;
  color:${(props) => props.theme.textPrimary};

`;

const Description = styled(motion.div)`
  padding-top: 5%;
  grid-area: content;
  font-size: 1rem;
  line-height: 3rem;
  font-weight: 400;
  p {
    font-size: 1.1rem;
  }
  color:${(props) => props.theme.textPrimary};
`;

const Image = styled(motion.img)`
  grid-area: image;
  width: 80%;
  justify-self: center;
`;

export default TextBlockWithPic;
