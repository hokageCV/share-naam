import { createTheme } from '@mui/material/styles';

// https://colorhunt.co/palette/344d676eccafade792f3ecb0
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
      main: '#344D67',
    },
    secondary: {
      main: '#6ECCAF',
    },
    surface: {
      main: '#ADE792',
    },
    background: {
      main: '#F3ECB0',
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
