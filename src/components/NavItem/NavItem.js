import * as React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const NavItem = ({ name, link }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            style={{ listStyle: 'none' }}
        >
            <NavLink to={link}>{name}</NavLink>
        </motion.li>
    );
};



const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 9vw;
  font-weight: 1000;
  width:100%;
  color:  ${props => props.theme.textPrimary};
${'' /* 
  :hover{
    text-shadow: -8px -8px 15px #333333,
                8px 8px 15px #0d0d0d;
  } */}
`;
export default NavItem;