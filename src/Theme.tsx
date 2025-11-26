import { createTheme } from '@mui/material/styles';

const ChristmasTheme = createTheme({
  palette: {
    primary: {
      main: '#D42426',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#165B33',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F0F4F8',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D6D7E',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      color: '#D42426',
      letterSpacing: '-0.02em',
      textShadow: '2px 2px 0px rgba(0,0,0,0.05)',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#165B33',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#D42426',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #D42426 30%, #FF5252 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #165B33 30%, #2E8B57 90%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#F8F9FA',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            },
            '&.Mui-focused': {
              backgroundColor: '#FFFFFF',
            },
          },
        },
      },
    },
  },
});

export default ChristmasTheme;
