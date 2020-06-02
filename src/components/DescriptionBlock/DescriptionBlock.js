import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { device } from 'shared/theme';

const initial = {
  x: -30,
  opacity: 0
};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: '-10%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
};

const DescriptionBlock = ({
  title,
  brief,
  stack,
  platform,
  category,
  creator,
  plink,
  glink
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 }
    }));
  }, [controls]);

  return (
    <Container variants={imageVariants}>
      <Title
        initial={initial}
        exit={initial}
        custom={1}
        animate={controls}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        {title}
      </Title>
      <Description
      // initial="hidden"
      // animate={controls}
      // variants={list}
      // transition={{ ease: 'easeOut', duration: 1 }}
      >
        <motion.p
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={1}
          animate={controls}
        >
          {brief}
        </motion.p>
        <Category
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={2}
          animate={controls}
        >
          <h5>Tech Stack</h5>
          <span>{stack}</span>
        </Category>
        <Category
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={2.5}
          animate={controls}
        >
          <h5>Platform</h5>
          <span> {platform}</span>
        </Category>
        <Category
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={3}
          animate={controls}
        >
          <h5>Category</h5>
          <span>{category}</span>
        </Category>
        <Category
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={3.5}
          animate={controls}
        >
          <h5>By</h5>
          <span>{creator}</span>
        </Category>
        <motion.div
          transition={{ ease: 'easeOut', duration: 2 }}
          initial={initial}
          exit={initial}
          custom={4}
          animate={controls}
        >
          {plink && (
            <ProjectLink href={plink}>
              <span> VIEW PROJECT </span>
              <span className="line" />
            </ProjectLink>
          )}
          {glink && (
            <ProjectLink href={glink}>
              <span> VIEW GITHUB </span>
              <span className="line" />
            </ProjectLink>
          )}
        </motion.div>
      </Description>
    </Container>
  );
};

const Container = styled(motion.div)`
  color:${(props) => props.theme.textPrimary};
  z-index: 9;
  position: relative;
  min-height: 75vh;
  display:grid;

  @media ${device.mobileS} {
    top: 10rem;
    grid-template-areas:
    '. title . '
    '. content .';
    width:100%;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 0fr 3fr;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media ${device.tablet} {
    top: 3rem;
    width: calc(100%-100px);
    grid-template-areas:
    '. title . '
    '. content .';
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 0fr 5fr;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 4fr;
    p {
      font-size: 1.3rem;
    }
  }
`;

const Title = styled(motion.h1)`
  grid-area: title;
  align-self: end;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
  color:${(props) => props.theme.textPrimary};

`;

const Description = styled(motion.div)`
  grid-area: content;
  line-height: 3rem;
  font-weight: 400;
  color:${(props) => props.theme.textPrimary};
`;

const Category = styled(motion.div)`
  font-weight: 300;
  display: inline-block;
  width: auto;
  font-size: 0.9rem;
  color:${(props) => props.theme.textPrimary};
  &:nth-of-type(1) {
    display: block;
    margin: 40px 70px 0 0;
  }
  h5 {
    color:${(props) => props.theme.textPrimary};
    font-weight: 600;
    margin: 0;
    font-size: 1rem;
  }

  @media ${device.mobileS} {
    margin: 10px 4% 15px 0;

  }
  @media ${device.tablet} {
    margin: 10px 14% 15px 0;

  }
  @media ${device.laptop} {

  }
`;

const ProjectLink = styled.a`
  margin-right: 15%;
  position: relative;
  margin-top: 0.3rem;
  display: inline-block;
  font-size: 0.7rem;
  text-decoration: none;
  transition: ease-in all 0.2s;
  &:hover {
    transform: translateX(10px);
    .line {
      right: -50px;
      width: 150px;
    }
  }
  span {
    letter-spacing: 0.4rem;
    color:${(props) => props.theme.textLink};
  }
  .line {
    top: 28px;
    right: -60px;
    height: 1px;
    width: 50px;
    position: absolute;
    background:${(props) => props.theme.textLink};
    transition: ease-in all 0.2s;
    &:after {
      position: absolute;
      height: 1px;
      content: ' ';
      right: 0;
      bottom: 0;
      width: 10px;
      transform-origin: center right;
      transform: rotate(35deg);
      background:${(props) => props.theme.textLink};
    }
  }
`;
export default DescriptionBlock;
