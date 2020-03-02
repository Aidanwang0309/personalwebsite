import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { device } from 'shared/theme';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <NavLink to="/icode">CODE</NavLink>
        <NavLink to="/idesign">DESIGN</NavLink>
        <NavLink to="/imusic">MUSIC</NavLink>
      </FooterNav>
      <FooterSocial>
        <SocialIcon>
          <a href="https://www.instagram.com/aspirincity/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://github.com/Aidanwang0309">
            <i className="fa fa-github" />
          </a>
          <a href="https://soundcloud.com/aspirin-wang">
            <i className="fa fa-soundcloud" />
          </a>
          <a href = "mailto:shuaiwang.dev@gmail.com">
          <i className="fa fa-envelope" />
          </a>

        </SocialIcon>
      </FooterSocial>
      <Copyright>
        <p>
          DESIGN <i style={{ color: '#ff4d3d' }} className="fa fa-heart"></i>{' '}
          COPYRIGHT TO SHUAI WANG @ 2020
        </p>
      </Copyright>
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
  padding: 5rem 0rem 0rem 0rem;
  border-top: 5px solid black;
  border-bottom: 2px solid black;
  text-align: center;
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
    text-decoration: none;
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
    width: 100%;
    text-align: center;
  }
`;

const Copyright = styled.div`
  border-right: 2px solid black;
  @media ${device.mobileS} {
    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 40px;
    }
  }
  @media ${device.tablet} {
    p {
      font-size: 1rem;
      letter-spacing: 0.05rem;
      line-height: 80px;
    }
  }
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 28px;
  a {
    width: 33.3%;
    transition: background-color 0.3s ease-in-out;
  }
  a:hover {
    background-color: #8080803d;
  }
`;

export default Footer;
