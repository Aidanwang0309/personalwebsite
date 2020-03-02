import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

const Header = ({ isDark, onChangeTheme }) => {
  const [checked, setChecked]= useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos - currentScrollPos > 80) {
        document.getElementById('nav').style.height = '80px';
      } else if (currentScrollPos - prevScrollPos > 80) {
        document.getElementById('nav').style.height = '0px';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', debounce(listener, 100));
    return () => window.removeEventListener('scroll', listener);
  }, []);

  const handleChange = () => {
    setChecked(x => !x);
    onChangeTheme()
  }
  return (
    <NavContainer>
      <Logo >
        <LogoText href="/icode">SHUAI WANG</LogoText>
        {/* <Switch>
          <label className="switch" for="checkbox">
            <input className={isDark || 'checked'} type="checkbox" id="checkbox" onChange={handleChange}/>
            <div className="slider round"></div>
          </label>
        </Switch> */}
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
      background-color: ${props => props.theme.backgroundPrimary};
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
      position:relative;
      width: 100%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border-bottom: 1px solid black;
    `;

const Switch = styled.div`
    position:absolute;
    top:20px;
    right:5%;
    .switch{
      display: inline-block;
      height: 34px;
      position: relative;
      width: 60px;
      .checked{
        .slider{
          &:before{
            left: 30px;
          }
          }
        }
      }
      input{
        display:none;
      }
      .slider{
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
        border-radius: 34px;
        &::before{
          background-color: #fff;
          bottom: 4px;
          content: "";
          height: 26px;
          left: 4px;
          position: absolute;
          transition: .4s;
          width: 26px;
          border-radius: 50%;
        }
      }
    }
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
      transition: height 0.3s linear;
    
    `;

const NavLink = styled(Link)`
      height: 100%;
      width: 100%;
      text-decoration: none;
      color: black;
  :hover {
        transition:all 0.5s ease-in-out;
      background-color: #8080803d;
    }
  `;

export default Header;
