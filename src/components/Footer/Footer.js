import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <NavLink to="/icode">CODE</NavLink>
        <NavLink to="/idesign">DESIGN</NavLink>
        <NavLink to="/imusic">MUSIC</NavLink>
      </FooterNav>

      <FooterSocial>
        <Copyright>
          <p> DESIGN & COPYRIGHT TO SHUAI WANG</p>
        </Copyright>
        <SocialIcon>
          <a href="/">
            <i className="fa fa-instagram" />
          </a>
          <a href="/">
            <i className="fa fa-github" />
          </a>
          <a href="/">
            <i className="fa fa-soundcloud" />
          </a>
        </SocialIcon>
      </FooterSocial>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  position: relative;
  top: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  padding: 5rem 0rem;
  border-top: 5px solid black;
  border-bottom: 2px solid black;
  a {
    color: black;
  }

  a:hover {
    background-color: #8080803d;
    transition: background-color 0.3s ease-in-out;
  }
`;

const FooterNav = styled.div`
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  a {
    width: 33.4%;
    border-right: 2px solid black;
  }
`;

const NavLink = styled(Link)`
  width: 33.4%;
  border-right: 2px solid black;
`;

const FooterSocial = styled.div`
  height: 5rem;
  line-height: 5rem;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  height: 80px;
  display: flex;
  flex-direction: row;
  div {
    width: 50%;
    text-align: center;
  }
`;

const Copyright = styled.div`
  border-right: 2px solid black;

  p {
    letter-spacing: 0.05rem;
  }
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 28px;
  a {
    width: 33.3%;
  }
  a:hover {
    background-color: #8080803d;
    transition: background-color 0.3s ease-in-out;
  }
`;

export default Footer;
