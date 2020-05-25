import React, { Suspense, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { device } from 'shared/theme';
// import css from "./styles.module.scss"
import { Canvas, useFrame } from 'react-three-fiber'
import Text from './Text'


function Jumbo() {
    const ref = useRef()
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
    return (
        <group ref={ref}>
            <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
            {/* <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
            <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
            <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
            <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" /> */}
        </group>
    )
}

const navItemVariants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 1 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 2 }
    }
}

const navContainerVariants = {
    initial: {
        opacity: 0,
        width: 0,
    },
    enter: {
        opacity: 1,
        width: '100%',
        transition: { duration: 1.5, staggerChildren: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 3, staggerChildren: 0.3 }
    }
}

const Opening = () => {

    const onMouseDown = () => {
        const cursor = document.querySelector('#cursor');
        cursor.style.width = `3rem`
        cursor.style.height = `3rem`
    }

    return (
        <ProjectContainer
            initial="initial"
            animate="enter"
            exit="exit"
            variants={navContainerVariants}
        >

            {/* <IntroContainer variants={navItemVariants}>
                <NavLink onMouseDown={onMouseDown} to="/icode">CODE</NavLink>
            </IntroContainer>
            <IntroContainer variants={navItemVariants}>
                <NavLink to="/imusic">MUSIC</NavLink>
            </IntroContainer>
            <IntroContainer variants={navItemVariants}>
                <NavLink to="/idesign">DESIGN</NavLink>
            </IntroContainer> */}
        </ProjectContainer>
    );
}


const ProjectContainer = styled(motion.div)`
    height:100vh;
    background:${props => props.theme.backgroundPrimary};

    ${'' /* cursor:none; */}
`;


const IntroContainer = styled(motion.div)`
    background-color: ${props => props.theme.backgroundPrimary};
    height:33.4%;
    display:flex;
    align-content:center;
    align-items:center;
    padding-left:10vw;
    ${'' /* margin-left:10vw;
    transition:all ease-in-out 0.3s;

    :hover {
        a{
            text-shadow: -8px -8px 15px #333333,
                8px 8px 15px #0d0d0d;
        }
    } */}


  ${'' /* margin-bottom:1rem;
  padding: 15px 25px;
  border-radius: 5px;
  background: #202020;

  cursor:pointer;

  h2{
    font-size:1rem; 
    color:#d0d0d0;
  }

  :hover {
    a{
      transform:translateX(20px)
      -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
      -moz-animation: neon2 1.5s ease-in-out infinite alternate;
      animation: neon2 1.5s ease-in-out infinite alternate;
    }

  }
  @keyframes neon2 {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
          0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
      }
      to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
          0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
      }
    }

  @media ${device.mobileS} {
    margin-bottom:2rem;

    h2{
      font-size:1.5rem; 
    } */}
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 13vw;
  font-weight: 1000;
  ${'' /* cursor:none; */}
  color:  ${props => props.theme.textPrimary};
  
`;

export default Opening;



// <div>
// <Canvas camera={{ position: [0, 0, 35] }}>
//     <ambientLight intensity={2} />
//     <pointLight position={[40, 40, 40]} />
//     <Suspense fallback={null}>
//         <Jumbo />
//         {/* <Birds /> */}
//     </Suspense>
// </Canvas>
// </div>