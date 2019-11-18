import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

const Header = () => {
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos - currentScrollPos > 100) {
        document.getElementById('nav').style.height = '80px';
      } else if (currentScrollPos - prevScrollPos > 100) {
        document.getElementById('nav').style.height = '0px';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', throttle(listener, 350));
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <NavContainer>
      <Logo>
        <LogoText href="/icode">SHUAI WANG</LogoText>
      </Logo>
      <Nav id="nav">
        <NavLink to="/icode">CODE</NavLink>
        <NavLink to="/idesign">DESIGN</NavLink>
        <NavLink to="/imusic">MUSIC</NavLink>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.section`
  position: relative;
  z-index: 99;
  background-color: #fbf9f5;
  position: fixed;
  z-index: 11;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  line-height: 0.5;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const Logo = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-bottom: 1px solid black;
`;

const LogoText = styled.div`
  color: black;
`;

const Nav = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns:1fr 1fr 1fr
  width: 100%;
  line-height: 80px;
  justify-content: space-around;
  text-align: center;
  transition: height 0.5s linear;
`;

const NavLink = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  :hover {
    background-color: #8080803d;
  }
`;

export default Header;
