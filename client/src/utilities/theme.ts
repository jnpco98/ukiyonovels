import { DefaultTheme } from 'styled-components';
import { transparentize } from 'polished';

export const BaseTheme: DefaultTheme = {
  screen: {
    innerMaxWidth: '72rem'
  },
  gutterHorizontal: {
    base: '0.8rem',
    xxsmall: '1.8rem',
    xsmall: '4rem'
  },
  gutterVertical: {
    base: '1rem',
    xxsmall: '1rem',
    xsmall: '1rem',
    small: '3rem',
    medium: '5rem',
  },
  font: {
    baseSize: '1rem',

    // Font weight
    light: '200',
    regular: '400',
    bold: '700',

    // Letter spacing
    narrow: '0.03rem',
    default: '0.042rem',
    wide: '0.085rem',

    primary: '"Source Code Pro", Sans-Serif',
    secondary: 'Montserrat, Sans-Serif'
  },
  colors: {
    // Standard Colors
    default: '#343A40',
    defaultSubdued: 'lightgray',

    // Backgrounds
    background: '#FFF',
    backgroundSecondary: '#F0EEE4',
    backgroundTertiary: '#FAFAFA',

    // Borders
    border: '#343A40',
    borderHover: '#343A40',

    // Scheme
    primary: '#343A40',
    primaryCompliment: transparentize(0.5, '#343A40'),

    // Hover
    primaryHover: transparentize(0.5, '#343A40'),

    // Disabled
    disabled: '#F8F9FA',

    selection: 'lightgray',

    backdrop: transparentize(0.2, '#FFF'),

    // Form color sets
    info: '#EE7752',
    success: '#23DBAB',
    warning: '#E73C7E',
    error: '#E73C7E'
  }
};
