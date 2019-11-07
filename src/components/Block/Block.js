import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1000, ...transition }
  }
};

const colors = [
  'D8E2DC',
  '70C1B3',
  'B2DBBF',
  'FFE5D9',
  'FFCAD4',
  '396362',
  '4b8e8d',
  'F4ACB7',
  '247BA0',
  '745c97',
  '8186d5',
  '00bfa5'
];

const Block = ({ id, title, categories, img, position, link, grid }) => {
  return (
    <BlockContainer variants={thumbnailVariants} grid={grid}>
      <BlockLink to={link}>
        <Avatar color={colors[id]} isMiddle={position === 'middle'}>
          {img && <motion.img src={img} alt="project-avatar" />}
          <OverlayText className="overlayText">
            <h1> {title} </h1>
            <p> {categories} </p>
          </OverlayText>
        </Avatar>
      </BlockLink>
    </BlockContainer>
  );
};

const BlockContainer = styled(motion.div)`
  position: relative;
  grid-area: ${props => `${props.grid}`};
  border: 0.1px solid #e4e4e4;
`;

const BlockLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Avatar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    border: none;
    background-color: ${props => `#${props.color}`};
    .overlayText {
      opacity: 1;
    }
    img {
      opacity: 0;
      transform: scale(0.7);
    }
  }
  .overlayText {
    opacity: 0;
    transition: all 0.2s ease-in;
  }
  img {
    position: absolute;
    transition: all 0.2s linear;
    width: ${props => (props.isMiddle ? `auto` : `100%`)};
    height: ${props => (props.isMiddle ? `calc(33vw - 7rem)` : `100%`)};
  }

  @media ${device.mobileS} {
    img {
      height: ${props => (props.isMiddle ? `calc(33vw - 3rem)` : `100%`)};
    }
  }
`;

const OverlayText = styled.div`
  @media ${device.mobileS} {
    h1 {
      font-size: calc(1.6rem + 0.35vw);
    }
    p {
      font-size: calc(1rem + 0.55vw);
      font-weight: 300;
    }
    line-height: calc(1.6rem + 0.35vw);
  }

  @media ${device.tablet} {
    z-index: 9;
    h1 {
      font-size: calc(2.6rem + 0.55vw);
    }
    p {
      font-size: calc(2rem + 0.35vw);
      font-weight: 300;
    }
    line-height: calc(2.6rem + 0.75vw);
  }
`;

Block.defaultProps = {
  title: 'project',
  categories: 'web',
  position: '',
  link: ''
};

Block.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.string,
  img: PropTypes.string,
  position: PropTypes.string,
  link: PropTypes.string,
  grid: PropTypes.string
};

export default Block;
