import { createTheme } from '@mui/material/styles';

const ChristmasTheme = createTheme({
  palette: {
    primary: {
      main: '#8c0c0c',
    },
    secondary: {
      main: '#0a6640',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#8c0c0c',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0a6640',
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#c60c0c',
    },
    body1: {
      fontSize: '1rem',
      color: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#8c0c0c',
          '&:hover': {
            backgroundColor: '#5e0808',
          },
        },
        containedSecondary: {
          backgroundColor: '#0a6640',
          '&:hover': {
            backgroundColor: '#064326',
          },
        },
      },
    },
  },
});

export default ChristmasTheme;
