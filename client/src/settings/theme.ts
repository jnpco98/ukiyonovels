import { ThemeSettings } from 'styled-components/macro';

export const BaseTheme: ThemeSettings = {
  gutterHorizontal: {
    base: '1rem',
    xxsmall: '2rem',
    xsmall: '3rem',
    small: '5rem',
    medium: '7rem',
    large: '9rem',
    xlarge: '12rem',
    xxlarge: '10%'
  },
  gutterVertical: {
    base: '4rem',
    xxsmall: '5rem',
    xsmall: '6rem',
    small: '6rem',
    medium: '6rem',
    large: '10rem',
    xlarge: '16rem',
    xxlarge: '16rem'
  },
  font: {
    baseSize: '1rem',
    weightLight: '200',
    weightRegular: '400',
    weightBold: '500',
    primary: '"Nunito Sans", Sans-Serif',
    secondary: '"Montserrat", Sans-Serif'
  },
  colors: {
    default: '#5F6062',
    subdued: '#AFAFB0',

    black: '#000',
    white: '#FFF',

    background: 'white',
    backgroundAlternate: '#F8F8F8',

    border: '#EEE',
    borderHover: '#F3F3F3',
    borderAlternate: '#F0EEEC',
    borderHoverAlternate: '#D4D5D9',

    primary: '#5F6062',
    primaryCompliment: 'white',
    secondary: '#4b503f',
    secondaryCompliment: 'white',
    accent: '#000',
    accentCompliment: 'white',

    selection: '#7d7d7d',

    info: 'white',
    infoCompliment: '#000',
    success: '#218838',
    successCompliment: '#fff',
    warning: '#e0a800',
    warningCompliment: '#fff',
    error: '#dc3545',
    errorCompliment: '#fff'
  }
};
