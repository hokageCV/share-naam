import { createTheme } from '@mui/material/styles';
import { BACKGROUND, PRIMARY, SECONDARY, SURFACE } from '../Constants/Constants';

 
// {
//   primary: color displayed most frequently across your app's screens and components
//   secondary: provides more ways to accent and distinguish your product
//   surface: affect surfaces of components, such as cards, sheets, and menus
//   background: appears behind scrollable content
//   testing: for testing purpose
// }

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    surface: {
      main: SURFACE,
    },
    background: {
      main: BACKGROUND,
    },
    testing: {
      main: '#E14D2A',
    },
  },
});
export const globalTheme1 = createTheme({
  // https://colorhunt.co/palette/e97777ff9f9ffcddb0fffad7 
  palette: {
    primary: {
      main: '#E97777',
    },
    secondary: {
      main: '#FF9F9F',
    },
    surface: {
      main: '#FCDDB0',
    },
    background: {
      main: '#FFFAD7',
    },
    testing: {
      main: '#E14D2A',
    },
  },
});

export const globalTheme2 = createTheme({
  palette: {
    primary: {
      main: '#F96666',
    },
    secondary: {
      main: '#674747',
    },
    surface: {
      main: '#829460',
    },
    background: {
      main: '#EEEEEE',
    },
    testing: {
      main: '#E14D2A',
    },
  },
});

export const globalTheme3 = createTheme({
  // https://colorhunt.co/palette/fdeedcffd8a9f1a661e38b29
  palette: {
    primary: {
      main: '#E38B29',
    },
    secondary: {
      main: '#F1A661',
    },
    surface: {
      main: '#FFD8A9',
    },
    background: {
      main: '#FDEEDC',
    },
    testing: {
      main: '#E14D2A',
    },
  },
});
