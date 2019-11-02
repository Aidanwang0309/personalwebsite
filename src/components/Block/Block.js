import React from 'react';
// import './Block.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Block = ({
  size,
  title,
  categories,
  img,
  position,
  className,
  link,
  grid
}) => {
  return (
    <BlockContainer grid={grid}>
      <BlockLink to={link}>
        <Avatar isMiddle={position === 'middle'}>
          <img src={img} alt="project-avatar" />
        </Avatar>
        <BlockOverlay>
          <Overlay />
          <OverlayText>
            <h1> {title} </h1>
            <p> {categories} </p>
          </OverlayText>
        </BlockOverlay>
      </BlockLink>
    </BlockContainer>
  );
};

const BlockContainer = styled.div`
  ${'' /* height: calc(33vw - 2.4rem); */}
  position:relative;
  grid-area: ${props => `${props.grid}`};
  border: 1px solid black;
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
  img {
    position: absolute;
    width: ${props => (props.isMiddle ? `auto` : `100%`)};
    height: ${props => (props.isMiddle ? `calc(33vw - 10.4rem)` : `100%`)};
  }
`;

const BlockOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  :hover {
    opacity: 1;
    transition: opacity 0.35s linear;
  }
`;

const Overlay = styled.div`
  background-color: #231f20;
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

const OverlayText = styled.div`
  position: absolute;
  z-index: 9;
  h1 {
    font-size: calc(2.6rem + 1.25vw);
  }
  line-height: calc(2.6rem + 1.25vw);
`;

Block.defaultProps = {
  size: 1,
  title: 'project',
  categories: 'web',
  img: '',
  position: '',
  className: '',
  link: ''
};
Block.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
  categories: PropTypes.string,
  img: PropTypes.string,
  position: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
  grid: PropTypes.string
};

export default Block;
