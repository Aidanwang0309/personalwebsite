export const lightTheme = {
  backgroundPrimary: '#fbf9f5',
  textPrimary: '#000000',
  textSecondary: '#474747'
};

export const darkTheme = {
  backgroundPrimary: '#202020',
  textPrimary: '#c0c0c0',
  textSecondary: '#474747',
  textLink:'#21efe5',
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// @media ${device.mobileS} {}

// @media ${device.tablet} {}

// @media ${device.laptop} {}
