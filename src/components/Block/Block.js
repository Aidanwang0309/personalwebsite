import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import { configResponsive, useResponsive } from '@umijs/hooks';

configResponsive({
  small: 320,
  middle: 768,
  large: 1024,
});


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

const BackgroundTextVariants = {
  active: {
    transition: { duration: 0.85 }
  },
  inactive: {
    transition: { duration: 0.85 }
  }
}

const LetterVariants = {
  active: {
    x: 0,
    y: -15,
    opacity: 1,
    transition: { duration: 0.85 }
  },
  inactive: {
    x: -30,
    y: -15,
    opacity: 1,
    transition: { duration: 0.85 }
  }
}

const BackgroundLetterVariants = {
  active: {
    opacity: 1,
    transition: { duration: 0.85, ease: "easeInOut", }
  },
  inactive: {
    opacity: 0.2,
    transition: { duration: 0.85, ease: "easeInOut", }
  }
}

const imageVariants = {
  active: {
    scale: 1,
    transition: {
      duration: 0.85,
      ease: "easeInOut",
    },
    opacity: 1,
  },

  inactive: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

const mobileImageVariants = {
  active: {
    opacity: [0.85, 1, 0.85],
    scale: [1, 1, 1],
    transition: imageTransition,
  },

  inactive: {
    scale: 0.8,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}


const Block = ({ id, title, categories, img, link, grid }) => {
  const responsive = useResponsive();
  const [active, setActive] = useState(false);

  const onHoverStart = () => {
    setActive(true);
  }

  const onHoverEnd = () => {
    setActive(false);
  }

  return (
    <BlockContainer
      variants={thumbnailVariants}
      grid={grid}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}>
      <BlockLink to={link}>
        <BackgroundText
          variants={BackgroundTextVariants}
          animate={active ? 'active' : 'inactive'}
        >
          <div style={{ width: '100%' }}>
            {[...title].map(letter =>
              <div style={{ display: 'inline-block', overflow: 'hidden' }}>
                <motion.span style={{ display: 'inline-block' }} className="overlayLetter" variants={responsive.middle && BackgroundLetterVariants} animate={active ? 'active' : 'inactive'}>{letter}</motion.span>
              </div>)}
            <OverlayText>
              {categories.map(category => <span> {category} </span>)}
            </OverlayText>
          </div>
        </BackgroundText>

        <Avatar>
          {img && <motion.div style={{ filter: 'brightness(0.5)', width: '100%', height: '100%', background: `url(".${img}") 50% 0%`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} variants={responsive.middle ? imageVariants : mobileImageVariants} perspective={2000} animate={active ? 'active' : 'inactive'} alt="project-avatar" />}
        </Avatar>
      </BlockLink>
    </BlockContainer>
  );
};


const BlockContainer = styled(motion.div)`
  z-index:99;
  position: relative;
  grid-area: ${props => `${props.grid}`};
  padding:1px;
  border-bottom: none;
  @media ${device.mobileS} {
    padding-top: 0;

  }
  @media ${device.tablet} {
    padding-top: 10%;
  }
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
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s ease-in;
  img {
    transform-style: preserve-3d;
    position: absolute;
    transition: all 0.2s linear;
    left:0;
    top:0;
    width:100%;
    opacity:0;
  }

  @media ${device.mobileS} {
    img {
      height:(100% -10vh);
    }
  }
`;

const OverlayText = styled(motion.div)`
  width:100%;
  @media ${device.mobileS} {
    span {
      padding-left: 0.3rem;
      font-size: calc(0.6rem + 0.55vw);
      font-weight: 300;
    }
    div {
      margin: 0;
      span {
      font-size: calc(1.3rem + 0.65vw);
      font-weight: 300;
      display:inline-block;
    }
    }
    line-height: calc(1.6rem + 0.35vw);
  }

  @media ${device.tablet} {
    z-index: 9;
    span {
      padding-left: 0.3rem;
      font-size: calc(1rem + 0.35vw);
      font-weight: 300;
    }
    div {
      margin: 0;
      font-size: calc(2rem + 5vw);
      span {
      font-size: calc(1.3rem + 0.65vw);
      font-weight: 300;
      display:inline-block;
      
    }
    }
  }
`;

const BackgroundText = styled(motion.div)`
  position:absolute;
  bottom:25%;
  color: ${prop => prop.theme.textPrimary};
  z-index:999;
  
  @media ${device.mobileS} {
    font-size:calc(1rem + 5vw);
    left:-20vw;
  }

  @media ${device.tablet} {
    font-size:calc(2rem + 5vw);
    left:-16vw;
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


// const colors = [
//   'D8E2DC',
//   'FFE5D9',
//   'B2DBBF',
//   '70C1B3',
//   'FFCAD4',
//   '396362',
//   '4b8e8d',
//   'F4ACB7',
//   '247BA0',
//   '745c97',
//   '8186d5',
//   '00bfa5'
// ];

{/* <TextContainer>
            <OverlayText>
              <div style={{ width: '100%' }}>{[...title].map(letter =>
                <div style={{ display: 'inline-block', overflow: 'hidden' }}>
                  <motion.span className="overlayLetter" variants={LetterVariants} animate={active ? 'active' : 'inactive'}>{letter}</motion.span>
                </div>)}
              </div>
            </OverlayText>
          </TextContainer> */}