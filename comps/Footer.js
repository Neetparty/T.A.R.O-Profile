import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[700],
    }
  }
})

const footer = () => {
    return (
          <ThemeProvider theme={theme}>
            <Typography component="div">
              <Box sx={{ p: 2 }}>
                <Box sx={{ textAlign: 'right', m: 1 }}>
                  <Typography color="secondary">Copyright @ H0shiNa</Typography>
                </Box>
              </Box>
            </Typography>
          </ThemeProvider>
     );
}

export default footer;
