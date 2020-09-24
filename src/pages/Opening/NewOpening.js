import React, { Suspense, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { device } from 'shared/theme';
import Text from './Text'
import avatar from "assets/avatar.png"

const navItemContainerVariants = {
  initial: {
    height: 0,
  },
  enter: {
    height: '100%',
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 3 }
  }
}

const navItemVariants = {
  initial: {
    y: '0%',
  },
  enter: {
    y: '-50%',
    // opacity: 1,
    transition: {
      duration: 30,
      yoyo: Infinity,
      // delay: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 3 }
  }
}


const navItemVariants2 = {
  initial: {
    y: '-50%',
  },
  enter: {
    y: '0%',
    // opacity: 1,
    transition: {
      duration: 30,
      yoyo: Infinity,
      // delay: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 3 }
  }
}

const ProfileVariants = {
  initial: {
  },
  enter: {
    transition: {
      duration: 1,
      delay: 1.5,
      staggerChildren: 0.5
    }
  },
  exit: {
  }
}

const ProfileItemVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    }
  },
  exit: {
  }
}

const navContainerVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, staggerChildren: 0.5 }
  }
}

const LinkMap = [
  { link: '/icode', text: 'CODER CODER CODER' },
  { link: '/', text: 'PHOTOGRAPHER PHOTOGRAPHER' },
  { link: '/imusic', text: 'MUSIC PRODUCER ' },
  { link: '/idesign', text: 'UI & UX DESIGNER' },
  { link: '/', text: 'EXPLORER EXPLORER' },
  { link: '/icode', text: 'INTERACTIVE ARTIST' },
]

const Opening = () => {
  return (
    <OpenContainer
      initial="initial"
      animate="enter"
      exit="exit"
      variants={navContainerVariants}
      height={window.innerHeight}
    >
      <Profile variants={ProfileVariants} >
        <motion.span variants={ProfileItemVariants} >HI, I'M SHUAI WANG</motion.span><br /><br />
        <motion.span variants={ProfileItemVariants}> A WEB DEVELOPER <br /> UI&UX DESIGNER <br /> AND MUSIC PRODUCER </motion.span><br /><br />
        <motion.span variants={ProfileItemVariants}>I ENJOY DEVELOPING UNIQUE EXPERIENCE WITH MULTIMEDIA TO BUILD PROFOUND CONNECTION WITH MY AUDIENCE</motion.span>
      </Profile>

      {LinkMap.map((link, index) =>
        <IntroContainer key={index} index={index} variants={navItemContainerVariants}>
          <NavItemOverlay index={index} img={avatar}>
            <NavItem variants={[0, 2, 4].includes(index) ? navItemVariants : navItemVariants2} index={index}>
              <NavLink index={index} to={link.link}  >{link.text}</NavLink>
            </NavItem>
          </NavItemOverlay>
        </IntroContainer>)
      }
    </OpenContainer>
  );
}


const OpenContainer = styled(motion.div)`
    height:${props => `${props.height}px`};
    overflow:hidden;
    display: grid;

  @media ${device.mobileS} {
    position:relative;
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 20% 100px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${device.tablet} {
    transform:translateX(100px);
    top:0;  
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
    repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 25% 100px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop} {
    background-image: repeating-linear-gradient(#ccc 0 0px, transparent 0px 100%),
        repeating-linear-gradient(90deg,#cccccc1f 0 1px, transparent 1px 100%);
    background-size: 16.7% 100px;
    grid-template-columns: repeat(6, 1fr);
  }
`;

const NavItemOverlay = styled(motion.div)`
  height:100vh;
  background-size:cover;

  @media ${device.mobileS} {
    height:35vh;
    transform:${props => `translateY(${(16 - props.index) * 4}vh)`};
    background-image: ${props => `url(${[1, 2, 3].includes(props.index) ? props.img : null})`};
    background-position-x:${ props => { return `${(props.index - 1) * -20}vw` }};
  }

  @media ${device.tablet} {
    height:100vh;
    transform:none;
    background-image: ${props => `url(${props.index >= 2 ? props.img : null})`};
    background-position-x:${ props => { return `${(props.index - 2) * -25}vw` }};
  }

  @media ${device.laptop} {
    background-image: ${props => `url(${props.index >= 3 ? props.img : null})`};
    background-position-x:${ props => { return `${(props.index - 3) * -16.6}vw` }};
  }
`

const NavItem = styled(motion.div)`
  @media ${device.mobileS} {
    opacity:0.1;
  }
  @media ${device.tablet} {
    opacity:1;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14vw;
  font-weight: 1000;
  width:100%;
  white-space: nowrap;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color:  ${props => props.theme.textPrimary};
  opacity: ${props => props.index < 3 ? 0.05 : 0.5}
`;

const Profile = styled(motion.div)`
  position:absolute;
  font-size:3vw;
  color:  ${props => props.theme.textPrimary};
  z-index: 999;
  width:40vw;
  margin-top:10rem;
  padding-left:6vw;
  text-align:right;

  @media ${device.mobileS} {
    padding-left:20vw;
    font-weight:400;
    font-size:4.5vw;
    width:65vw;
    text-align:left;
  }
  @media ${device.tablet} {
    padding-left:6vw;
    font-size:3vw;
    width:40vw;
    text-align:right;
  }
  @media ${device.laptop} {
    padding-left:6vw;
    font-size:3vw;
    width:40vw;
    text-align:right;
  }
`

const IntroContainer = styled(motion.div)`
    background:${props => props.theme.backgroundPrimary};
    z-index:99;
    overflow:hidden;
    p{
      text-decoration: none;
      font-size: 7vw;
      font-weight: 1000;
      color:  ${props => props.theme.textPrimary};
      margin:0;
      margin-top:5rem;
    }
    @media ${device.mobileS} {
      display: ${props => props.index <= 4 ? 'block' : 'none !important'};
    }

    @media ${device.tablet} {
      display: ${props => props.index <= 3 ? 'block' : 'none'};
    }

    @media ${ device.laptop} {
      display: block !important;
    }
`


export default Opening;
