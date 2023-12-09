import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 6, mb: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        <Link color="inherit" href="https://github.com/Gargant0373/SecretSanta">
          SecretSanta
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;