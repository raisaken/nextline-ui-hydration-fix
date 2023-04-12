import {  createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    circle: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    default: Palette['primary'];
    white: Palette['primary'];
    lightBlue: Palette['primary'];
    gray: Palette['primary'];
    leafTitle: Palette['primary'];
  }
  interface PaletteOptions {
    default: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    lightBlue: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    leafTitle: PaletteOptions['primary'];
  }
}

export const drawerWidth = 50;
export const theme = createTheme({
  palette: {
    primary: {
      main: '#8a9be6',
    },
    secondary: {
      main: '#F3F6FF',
    },
    warning: {
      main: '#fbad00',
    },
    default: {
      main: '#646464',
    },
    white: {
      main: '#ffffff',
    },
    lightBlue: {
      main: '#e4f1fb',
    },
    gray: {
      main: '#FCFCFC',
      dark: '#959595',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    leafTitle: {
      main: '#3C8A8B',
    },
  },
  typography: {
    fontFamily: ['"Source Sans Pro"'].join(','),
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          marginTop: '20px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '15px',
        },
      },
      variants: [
        {
          props: {
            variant: 'circle',
          },
          style: {
            float: 'right',
            borderRadius: '50%',
            width: '10px',
            background: 'red',
            fontSize: '70px',
          },
        },
      ],
    },
  },
});
