import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const imageTransition = {
  duration: 3,
  ease: "easeInOut",
  times: [0, 0.5, 1],
  loop: Infinity,
}

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1000, ...transition }
  }
};

const TextVariants1 = {
  active: {
    y: 20,
    opacity: 1,
    scale:1,
    transition: { duration: 0.7 }
  },
  inactive: {
    y: 50,
    opacity: 0,
    scale:0.7,
    transition: { duration: 0.7 }
  }
}

const TextVariants2 = {
  active: {
    y: 0,
    opacity: 1,
    scale:1,
    transition: { duration: 0.85 }
  },
  inactive: {
    y: 50,
    opacity: 0,
    scale:0.7,
    transition: { duration: 0.85}
  }
}



const imageVariants = {
  active: {
    scale: [0.75, 0.8, 0.75],
    transition: imageTransition,
  },
  inactive: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

const colorBlockVariants = {
  active: {
    scale:1,
    opacity:1,
    transition: {
      duration: 0.85,
      ease: "easeInOut",
    },
  },
  inactive: {
    scale:0.7,
    opacity:0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}
const colors = [
  'D8E2DC',
  'FFE5D9',
  'B2DBBF',
  '70C1B3',
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

  const [active, setActive] = useState(false);

  const onHoverStart = () => {
    setActive(true);
  }

  const onHoverEnd = () => {
    setActive(false);
  }


  return (
    <BlockContainer variants={thumbnailVariants} grid={grid} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
      <BlockLink to={link}>
        <Avatar isMiddle={position === 'middle'}>
          {img && <motion.img src={img} variants={imageVariants} perspective={2000} animate={active ? 'active' : 'inactive'} alt="project-avatar" />}
          <TextContainer color={colors[id]}>
            <OverlayColorBlock color={colors[id]} variants={colorBlockVariants} animate={active ? 'active' : 'inactive'} />
            <OverlayText className="overlayText" variants={TextVariants1} animate={active ? 'active' : 'inactive'}>
              <h1> {title} </h1>
            </OverlayText>
            <OverlayText className="overlayText" variants={TextVariants2} animate={active ? 'active' : 'inactive'} >
              <p> {categories} </p>
            </OverlayText>
          </TextContainer>
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

const TextContainer = styled.div`
  position:absolute;
  left:5%;
  bottom:0;
  display:flex;
  flex-direction:column;
  text-align:left;
  width:95%;
  h1{
    margin-top:0;
    color:white;
    text-shadow:${props => `3px -3px 4px #${props.color}`};
    ${'' /* color:${props => `#${props.color}`}; */}
  }
  p{
    margin-top:0;
    color:white;
    text-shadow:${props => `3px -3px 4px #${props.color}`};
  }
`

const OverlayColorBlock =  styled(motion.div)`
  position:absolute;
  bottom:40%;
  left:-5%;
  width:90%;
  height:40%;
  box-shadow:14px 16px 28px -11px rgba(0,0,0,0.51);
  background-color:${props => `#${props.color}7F`};
`
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
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s ease-in;

  ${'' /* background: transparent;
  &:hover {
    transition: background 0.2s ease-in;
    background: ${props => `#${props.color}`};
  } */}

  img {
    transform-style: preserve-3d;
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

const OverlayText = styled(motion.div)`

  ${'' /* opacity:0; */}
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
