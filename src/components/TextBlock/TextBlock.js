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
  width: 100vw;
  min-height: 20vh;
  display: grid;
  grid-template-rows: 1fr auto;

  @media ${device.mobileS} {
    grid-template-columns: 1fr 10fr 1fr;
    margin-top: 50%;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 2rem;
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
    }
  }
  @media ${device.laptop} {
    margin-top: 20%;
    grid-template-columns: 1fr 5fr 1fr;
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.3rem;
      line-height: 3rem;
    }
  }
`;

const Subtitle = styled(motion.h2)`
  grid-column-start: 2;
  align-self: end;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
`;

const Description = styled(motion.div)`
  grid-column-start: 2;
  grid-row-start: 2;
  padding-top: 5%;
  font-weight: 400;
  color: ${props => props.theme.textSecondary};
`;

export default TextBlock;
