import { DefaultTheme } from 'styled-components';
import { lighten, transparentize } from 'polished';

export const BaseTheme: DefaultTheme = {
  gutterHorizontal: {
    base: '0.5rem',
    xxsmall: '0.5rem',
    xsmall: '0.5rem',
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
    xlarge: '10rem',
    xxlarge: '10%'
  },
  gutterVertical: {
    base: '1rem',
    xxsmall: '1rem',
    xsmall: '1rem',
    small: '3rem',
    medium: '6rem',
    large: '10rem',
    xlarge: '20rem',
    xxlarge: '20rem'
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

    primary: '"Lato", Sans-Serif',
    secondary: '"Alegraya", Sans-Serif'
  },
  colors: {
    // Standard Colors
    default: '#111111',
    defaultSubdued: '#949494',

    // Backgrounds
    background: '#FFFFFF',
    backgroundSecondary: '#FBFAF4',
    backgroundTertiary: '#E2DFD7',

    // Borders
    border: '#EEE',
    borderHover: '#F3F3F3',
    borderSecondary: '#DBD8D0',
    borderSecondaryHover: '#E2DFD6',

    // Scheme
    primary: '#2A4A59',
    primaryCompliment: '#FFFFFF',

    secondary: '#EEECE3',
    secondaryCompliment: '#2A4A59',

    tertiary: '#FFFFFF',
    tertiaryCompliment: '#2A4A59',

    // Hover
    defaultHover: lighten(0.1, '#111111'),

    primaryHover: lighten(0.1, '#2A4A59'),
    primaryComplimentHover: lighten(0.1, '#FFFFFF'),

    secondaryHover: lighten(0.1, '#EEECE3'),
    secondaryComplimentHover: lighten(0.1, '#2A4A59'),

    tertiaryHover: lighten(0.1, '#FFFFFF'),
    tertiaryComplimentHover: lighten(0.1, '#2A4A59'),

    // Disabled
    disabled: 'transparent',
    disabledCompliment: '#2A4A59',

    selection: transparentize(0.8, '#2A4A59'),

    backdrop: transparentize(0.9, '#111111'),

    // Form color sets
    info: '#2A4A59',
    success: '#EEECE3',
    warning: '#EEECE3',
    error: '#C10000'
  }
};
