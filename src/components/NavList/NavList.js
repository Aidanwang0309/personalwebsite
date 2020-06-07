import * as React from "react";
import { motion } from "framer-motion";
import { NavItem } from "../NavItem";
import styled from 'styled-components';
import { device } from 'shared/theme'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


const Iconvariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 100,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const NavList = ({ navList, isOpen, icons }) => {
    return (
        <List variants={variants} isOpen={isOpen}>
            {navList.map(item => (
                <NavItem key={item.name} name={item.name} link={item.link} />
            ))}
            <SocialIcon variants={variants} >
                {icons.map(icon => <Icon  variants={Iconvariants} href={icon.link} style={{ backgroundImage: `url(${icon.icon})` }}>  </Icon>)}
            </SocialIcon>
        </List>
    )
};




const List = styled(motion.ul)`
    z-index:9999;
    position:fixed;
    top:15%;
    left:15%;
    justify-content:center;
    flex-direction:column;
    display:${props => props.isOpen ? 'flex' : 'none'};
`;

const Icon = styled(motion.a)`
    background-size: contain;
    margin: 3vw 3vw 0 0;
    filter: grayScale(1) brightness(0.5);
    transition: all ease-in-out 0.5s;
    &:hover{
        transition: all ease-in-out 0.5s;
        filter: grayScale(0) brightness(1);
    }

    @media ${device.mobileS} {
        width:30px;
        height:30px;
    }
    @media ${device.tablet} {
        width:50px;
        height:50px;
    }
`

const SocialIcon = styled(motion.div)`
    display:flex;
    flex-direction:row;
`


export default NavList;