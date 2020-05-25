import React from 'react'
import styled from 'styled-components';


const Cursor = () => {

    return (
        <CursorContainer id='cursor'>
        </CursorContainer>
    )
}



const CursorContainer = styled.div`
    width:1rem;
    height:1rem;
    border:2px solid white;
    border-radius:50%;
    position:absolute;
    ${'' /* transform:translate(-50%,-50%); */}
    pointer-event:none;
    transition:all 0.2s ease;
    transition-property:background, border, transform;
    transform-origin:150% 150%;
    z-index:999;
`;

export default Cursor;
