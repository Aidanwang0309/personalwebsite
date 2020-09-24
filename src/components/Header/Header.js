import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { ReactComponent as TextLogo } from 'assets/LOGO_TEXT.svg'
import { motion } from 'framer-motion'
import { useDimensions } from 'shared/hooks'
import { NavButton } from 'components/NavButton'
import { NavList } from 'components/NavList'
import { Particles } from 'components/Particles'
import LOGO from 'assets/LOGO.svg'
import { device } from 'shared/theme'
import INSTA from "assets/instagram.svg"
import SOUNDCLOUD from "assets/soundcloud.svg"
import LINKEDIN from "assets/linkedin.svg"


const navList = [
  { name: 'code', link: '/icode' },
  { name: 'music', link: '/imusic' },
  { name: 'design', link: '/idesign' },
]

const icons = [
  { link: "https://www.instagram.com/aspirincity/", icon: INSTA },
  { link: "https://soundcloud.com/aspirin-wang", icon: SOUNDCLOUD },
  { link: "https://www.linkedin.com/in/swang1993/", icon: LINKEDIN },
]

const iconTextVariants = {
  initial: {
    pathLength: 0,
    transition: {
      duration: 5,
    },
  },
  enter: {
    pathLength: 0.2,
    transition: {
      duration: 5,
    },
  },
}
const iconVariants = {
  initial: {
    pathLength: 0,
    transition: {
      duration: 1,
    },
  },
  enter: {
    pathLength: 0.5,
    transition: {
      duration: 1,
    },
  },
}
const navContainerVariants = {
  enter: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
    width: '100%',
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
      staggerChildren: 0.3,
    },
  },
  initial: {
    opacity: 0,
    width: 0,
  },
}
const logoVariants = {
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
    },
    y: -5,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
      staggerChildren: 0.3,
    },
  },
  initial: {
    opacity: 0,
    y: -30,
  },
}

const Header = ({ isDark, onChangeTheme }) => {
  const [checked, setChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const handleChange = () => {
    setChecked((x) => !x)
    onChangeTheme()
  }

  const handleToggle = () => {
    setIsOpen((x) => !x)
  }

  const sidebar = {
    closed: {
      clipPath: 'circle(0px at 40px 40px)',
      transition: {
        damping: 40,
        stiffness: 400,
        type: 'spring',
      },
    },
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
  }

  return (
    <NavContainer initial='initial' animate='enter' exit='exit' variants={navContainerVariants} >
      <Logo initial='initial' exit='exit' animate='enter' variants={logoVariants}>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 60 60'>
          <defs>
            <motion.path
              filter="url(#blur)"
              id='a'
              initial='initial'
              animation='enter'
              variants={iconVariants}
              d='M55.036,4.96C51.838,1.761,47.569,0,43.015,0c-4.553,0-8.822,1.761-12.021,4.96L4.96,30.995C1.761,34.193,0,38.462,0,43.015c0,4.554,1.761,8.823,4.96,12.021c3.198,3.199,7.467,4.96,12.021,4.96s8.822-1.761,12.021-4.96l26.035-26.035c3.199-3.198,4.96-7.467,4.96-12.021S58.235,8.158,55.036,4.96z M53.622,27.587L41.601,39.608L20.388,18.395L32.409,6.374C35.229,3.553,38.996,2,43.015,2c4.02,0,7.786,1.553,10.607,4.374c2.821,2.82,4.374,6.587,4.374,10.606S56.443,24.767,53.622,27.587z"'
            />
            <clipPath id='b'>
              <use xlinkHref='#a' />
            </clipPath>
            <filter id="drop-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feoffset in="blur" dx="4" dy="4" result="offsetBlur" />
            </filter>
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <linearGradient id='linear' x1='0%' y1='0%' x2='150%' y2='200%'>
              <motion.stop
                stopColor='#2B00FF'
                animate={{
                  stopColor: ['#0055FF', '#FFF9DA', '#E7FFF7', '#FFC6A8', '#FF7744', '#F3F2F2'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
                offset='25%'
              />
              <motion.stop
                stopColor='#0055FF'
                animate={{
                  stopColor: ['#0055FF', '#FFF9DA', '#FFC6A8', '#FF7744', '#2B00FF'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
                offset='50%'
              />
              <motion.stop
                stopColor='#D4504C'
                animate={{
                  stopColor: ['#FFF9DA', '#E7FFF7', '#0055FF'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
                offset='75%'
              />
              <motion.stop
                stopColor='#FF7744'
                animate={{
                  stopColor: ['#D4504C', '#2B00FF', '#E7FFF7', '#FFF9DA'],
                }}
                transition={{
                  yoyo: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
                offset='100%'
              />
            </linearGradient>
          </defs>
          <use
            // filter="url(#drop-shadow)"
            fill='url(#linear)'
            stroke='url(#linear)'
            strokeWidth='1'
            clipPath='url(#b)'
            xlinkHref='#a'
          />
        </motion.svg>
      </Logo>

      <Nav initial={false} exit='exit' animate={isOpen ? 'open' : 'closed'} ref={containerRef}>
        <NavList navList={navList} isOpen={isOpen} icons={icons} />
        {/* <motion.div>
          {icons.map(icon => <a href={icon.link} style={{ backgroundImage: `url(${icon.icon})` }}>  </a>)}
        </motion.div> */}
        <NavBg
          className='background'
          variants={sidebar}
          style={{
            height: `${isOpen ? '100%' : '0%'}`
          }} >
          <Particles></Particles>
        </NavBg>
        <NavButton toggle={() => handleToggle()} onClick={handleToggle} />
      </Nav>

      <LogoText initial='initial' exit='exit' animate='enter' variants={logoVariants}>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 196 900'
          preserveAspectRatio={'none'}>
          <motion.path
            variants={iconTextVariants}
            strokeWidth={'2'}
            initial='initial'
            animation='enter'
            d={
              'M162.728 855.504C162.728 864.72 160.424 872.688 155.816 879.408C151.112 886.032 144.728 890.736 136.664 893.52L130.76 877.536C135.464 875.424 139.256 872.4 142.136 868.464C144.92 864.528 146.312 860.016 146.312 854.928C146.312 849.648 145.112 845.472 142.712 842.4C140.312 839.232 136.856 837.648 132.344 837.648C130.52 837.648 128.84 838.08 127.304 838.944C125.672 839.808 124.328 840.816 123.272 841.968C122.216 843.024 121.16 844.656 120.104 846.864C119.048 849.072 118.232 850.944 117.656 852.48C116.984 854.016 116.168 856.272 115.208 859.248C113.864 863.088 112.808 866.064 112.04 868.176C111.272 870.192 110.024 872.832 108.296 876.096C106.472 879.264 104.648 881.712 102.824 883.44C101 885.072 98.6 886.56 95.624 887.904C92.552 889.152 89.192 889.776 85.544 889.776C77.864 889.776 71.432 886.8 66.248 880.848C61.064 874.896 58.472 866.832 58.472 856.656C58.472 848.208 60.488 841.2 64.52 835.632C68.456 830.064 73.64 826.32 80.072 824.4L85.256 839.952C78.344 843.024 74.888 848.976 74.888 857.808C74.888 862.32 75.848 865.872 77.768 868.464C79.592 870.96 82.232 872.208 85.688 872.208C87.992 872.208 90.056 871.248 91.88 869.328C93.704 867.312 95.096 865.2 96.056 862.992C96.92 860.688 98.072 857.328 99.512 852.912C100.568 850.032 101.384 847.872 101.96 846.432C102.44 844.896 103.304 842.784 104.552 840.096C105.8 837.408 106.952 835.296 108.008 833.76C108.968 832.224 110.312 830.496 112.04 828.576C113.768 826.56 115.592 825.024 117.512 823.968C119.336 822.912 121.544 822 124.136 821.232C126.632 820.464 129.368 820.08 132.344 820.08C141.752 820.08 149.192 823.44 154.664 830.16C160.04 836.784 162.728 845.232 162.728 855.504ZM161 738.525H117.224V782.589H161V799.869H60.2V782.589H100.952V738.525H60.2V721.389H161V738.525ZM162.728 658.34C162.728 663.812 162.056 668.804 160.712 673.316C159.272 677.828 157.064 681.956 154.088 685.7C151.016 689.444 146.84 692.372 141.56 694.484C136.184 696.596 129.848 697.652 122.552 697.652H60.2L60.2 680.372H122.552C131.288 680.372 137.432 678.5 140.984 674.756C144.44 670.916 146.168 665.444 146.168 658.34C146.168 651.236 144.392 645.812 140.84 642.068C137.288 638.228 131.192 636.308 122.552 636.308H60.2V619.028H122.552C129.752 619.028 136.04 620.084 141.416 622.196C146.696 624.212 150.872 627.092 153.944 630.836C156.92 634.484 159.128 638.612 160.568 643.22C162.008 647.732 162.728 652.772 162.728 658.34ZM161 532.515L138.968 540.435V580.323L161 588.243V606.531L60.2 568.947V551.811L161 514.371V532.515ZM123.416 545.907L93.176 556.995C89.528 558.435 86.12 559.539 82.952 560.307C85.736 561.075 89.144 562.179 93.176 563.619L123.416 574.851V545.907ZM161 498.212H60.2V480.932H161V498.212ZM161 406.749L60.2 428.349V410.637L119.528 398.685C125.096 397.629 128.312 397.053 129.176 396.957C127.064 396.669 123.848 395.997 119.528 394.941L60.2 380.109V365.421L119.384 350.301C122.84 349.341 126.056 348.669 129.032 348.285C126.248 347.901 123.08 347.325 119.528 346.557L60.2 334.605V317.181L161 338.925V354.765L98.648 371.037C94.904 372.093 91.784 372.765 89.288 373.053C91.592 373.341 94.664 373.965 98.504 374.925L161 390.909V406.749ZM161 238.609L138.968 246.529V286.417L161 294.337V312.625L60.2 275.041V257.905L161 220.465V238.609ZM123.416 252.001L93.176 263.089C89.528 264.529 86.12 265.633 82.952 266.401C85.736 267.169 89.144 268.273 93.176 269.713L123.416 280.945V252.001ZM161 126.69V142.386L97.352 184.146C95.336 185.49 92.84 186.882 89.864 188.322C92.168 188.034 94.664 187.89 97.352 187.89H161V205.026H60.2V188.322L122.84 147.57C124.28 146.61 126.824 145.218 130.472 143.394C127.88 143.682 125.336 143.826 122.84 143.826H60.2V126.69H161ZM162.728 61.6207C162.728 69.1087 161.288 75.7807 158.408 81.6367C155.432 87.3967 151.448 92.0047 146.456 95.4608C141.464 98.9167 135.944 101.509 129.896 103.237C123.848 104.965 117.416 105.829 110.6 105.829C105.608 105.829 100.664 105.301 95.768 104.245C90.872 103.093 86.168 101.317 81.656 98.9167C77.144 96.5167 73.208 93.6367 69.848 90.2767C66.392 86.9167 63.656 82.7887 61.64 77.8927C59.528 72.9007 58.472 67.4767 58.472 61.6207C58.472 52.7887 60.296 45.6847 63.944 40.3087C67.496 34.9327 72.44 30.2767 78.776 26.3407L87.56 41.7488C79.304 47.3167 75.176 53.9407 75.176 61.6207C75.176 66.4207 76.28 70.6447 78.488 74.2927C80.6 77.8447 83.48 80.5807 87.128 82.5007C90.68 84.4207 94.424 85.8127 98.36 86.6767C102.296 87.5407 106.376 87.9727 110.6 87.9727C120.584 87.9727 128.984 85.7647 135.8 81.3487C142.616 76.9327 146.024 70.3567 146.024 61.6207C146.024 56.0527 144.2 51.4447 140.552 47.7967C136.904 44.0527 132.44 42.1807 127.16 42.1807H125.576V59.8927H109.304V24.6127H123.272C135.656 24.6127 145.352 28.0687 152.36 34.9807C159.272 41.8927 162.728 50.7727 162.728 61.6207Z'
            }
          />
        </motion.svg>
      </LogoText>
    </NavContainer >
  )
}

const NavBg = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: ${(props) => props.theme.backgroundPrimary};

  @media ${device.mobileS} {
    top: 5rem;
    left: 0px;
  }

  @media ${device.tablet} {
    top: 0px;
    left: 101px;
  }
`

const NavContainer = styled.section`
  z-index: 9999;
  position: relative;
  position: fixed;
  justify-content: space-around;
  display:flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-right: ${(props) => `1px solid ${props.theme.textPrimary}`};
  align-items:center;
  align-content:center;

  @media ${device.mobileS} {
    height:20vw;
    flex-direction: row;
    width:100%;
    border-bottom:1px solid #ffffff40;
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100%;
    flex-direction: column;
  }
`

const Nav = styled(motion.nav)`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;

  @media ${device.mobileS} {
    position: fixed;
    width:20%;
    height:20vw;
    border-left:1px solid #ffffff40;
    right:0;
    top:0;

    ul{
      height:40%;
      left:0;
      li{
        margin-bottom:1vh;
        border-bottom:1px solid #ffffff40;
        line-height:8vh;
        a{
          font-size:10vw;
        }
      }
    }
    button{
      position:absolute;
      padding:0;
      right:5vw;
      top:5vw;
      width:40px;
      height:40px;
    }
  }

  @media ${device.tablet} {
    border-left:0px;
    position: relative;
    top:-125px;
    ul{
      left:10vw;
      top:25%;
      li{
        margin-bottom:7vh;
      }
    }
    button{
      position:absolute;
      right:-10px;
      top:0;
    }
  }
`

const Logo = styled(motion.div)`
  align-self: center;
  height: 60px;
  line-height: 1.5rem;
  text-align: left;
  border-right: 1px solid #ffffff40;


  @media ${device.mobileS} {
    position:absolute;
    left:0;
    top:0;
    width:20%;
    height:21vw;
    border-right: 1px solid #ffffff40;
    svg{
      margin:0 auto;
      width:40px;
      height:40px;
      padding:5vw;
    }
  }

  @media ${device.tablet} {
    position: relative;
    width: 5vw;
    padding: 1rem;
    left:0;
    top:0;
    border-right: 0px;
    svg{
      margin:0 auto;
      width:60px;
      height:40px;
      padding:10px;
    }
  }
`

// const Switch = styled.div`
//     position:absolute;
//     top:20px;
//     right:5%;
//     .switch{
//       display: inline-block;
//       height: 34px;
//       position: relative;
//       width: 60px;
//       .checked{
//         .slider{
//           &:before{
//             left: 30px;
//           }
//           }
//         }
//       }
//       input{
//         display:none;
//       }
//       .slider{
//         background-color: #ccc;
//         bottom: 0;
//         cursor: pointer;
//         left: 0;
//         position: absolute;
//         right: 0;
//         top: 0;
//         transition: .4s;
//         border-radius: 34px;
//         &::before{
//           background-color: #fff;
//           bottom: 4px;
//           content: "";
//           height: 26px;
//           left: 4px;
//           position: absolute;
//           transition: .4s;
//           width: 26px;
//           border-radius: 50%;
//         }
//       }
//     }
// `

const LogoText = styled(motion.div)`
  svg {
    path {
      fill: ${(props) => props.theme.backgroundPrimary};
      stroke: ${(props) => props.theme.textPrimary};
    }
    @media ${device.mobileS} {
      position:fixed;
      top:1.5rem;
      left:0;
      width:30%;
      height:150px;
      transform: rotate(90deg);
    }
    @media ${device.tablet} {
      top:-320px;
      left:10px;
      width: 100px;
      height: 400px;
      padding-bottom: 2rem;
      transform: none;
    }
  }
  @media ${device.mobileS} {
      position:fixed;
      top:-60px;
      left:45vw;
      width:130px;
      height:106px;
    }
    @media ${device.tablet} {
      position:relative;
      top:0;
      left:0;
    }
`

// const Nav = styled.div`
//       position: relative;
//       overflow: hidden;
//       display: grid;
//       grid-template-columns:1fr 1fr 1fr
//       width: 100%;
//       line-height: 80px;
//       justify-content: space-around;
//       text-align: center;
//       transition: height 0.3s linear;
//     `;

// const NavLink = styled(Link)`
//       height: 100%;
//       width: 100%;
//       text-decoration: none;
//       color: black;
//   :hover {
//         transition:all 0.5s ease-in-out;
//       background-color: #8080803d;
//     }
//   `;

export default Header
