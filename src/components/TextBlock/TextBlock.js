import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';

const TextBlock = ({ title, description }) => {
  return (
    <Container>
      {title && <Subtitle>{title}</Subtitle>}
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: calc(100%-100px);
  min-height: 20vh;
  display: grid;
  grid-template-rows: 1fr auto;
  color:${(props) => props.theme.textPrimary};

  @media ${device.mobileS} {
    grid-template-columns: 1fr 10fr 1fr;
    margin-top: 50%;
    h2 {
      font-size: 1.2rem;
      color:${(props) => props.theme.textPrimary};
    }
    p {
      font-size: 0.9rem;
      line-height: 2rem;
      color:${(props) => props.theme.textPrimary};
    }
  }
  @media ${device.tablet} {
    margin-top: 30%;
    grid-template-columns: 1fr 8fr 1fr;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 2.5rem;
      color:${(props) => props.theme.textPrimary};
    }
  }
  @media ${device.laptop} {
    margin-top: 20%;
    grid-template-columns: 1fr 4fr 1fr;
    h2 {
      font-size: 1.7rem;
      color:${(props) => props.theme.textPrimary};
    }
    p {
      font-size: 1.3rem;
      line-height: 3rem;
      color:${(props) => props.theme.textPrimary};

    }
  }
`;

const Subtitle = styled(motion.h2)`
  grid-column-start: 2;
  align-self: end;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
  color:${(props) => props.theme.textPrimary};

`;

const Description = styled(motion.div)`
  grid-column-start: 2;
  grid-row-start: 2;
  padding-top: 5%;
  font-weight: 400;

  @media ${device.mobileS} {
      font-size: 0.9rem;
      line-height: 2rem;
      color:${(props) => props.theme.textPrimary};
  }
  @media ${device.tablet} {
      font-size: 1.1rem;
      line-height: 2.5rem;
      color:${(props) => props.theme.textPrimary};
  }
  @media ${device.laptop} {
      font-size: 1.3rem;
      line-height: 3rem;
      color:${(props) => props.theme.textPrimary};
  }
`;

export default TextBlock;
