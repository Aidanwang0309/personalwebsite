import * as React from "react";
import { motion } from "framer-motion";
import { NavItem } from "../NavItem";
import styled from 'styled-components';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const NavList = ({ navList, isOpen }) => {
    return (
        <List variants={variants} isOpen={isOpen}>
            {navList.map(item => (
                <NavItem key={item.name} name={item.name} link={item.link} />
            ))}
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


export default NavList;