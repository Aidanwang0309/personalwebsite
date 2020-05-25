import * as React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';

const Path = props => (
    <motion.path
        strokeWidth="1"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const NavButton = ({ toggle }) => (
    <Button onClick={toggle}>
        <svg width="40" height="40" viewBox="0 0 14 14">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 6.423 L 20 6.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 8 10.346 L 20 10.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </Button>
);

const Button = styled.button`
    background-color: transparent;
    border:none;
    align-self:center;
    :focus{
        outline:none;
    }

    svg{
        path{
            stroke:${props => props.theme.textPrimary};
        }
    }
`

export default NavButton;