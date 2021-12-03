import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Home } from '@mui/icons-material';

const theme = createTheme({
    palette: {
      secondary: {
        main: grey[700],
      }
    }
  })

const header = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', height: '0', m: '1em', p: '0' }}>
                <Button sx={{ width: '5%', my: 0.4 }} color="secondary" href="/">
                    <Home />
                </Button>
                <Button sx={{ width: '18%', my: 0.4 }} color="secondary" variant="text" href="Neetparty" >Neetparty</Button>
                <Button sx={{ width: '18%', my: 0.4 }} color="secondary" variant="text" href="Neverterra" >Neverterra</Button>
                <Button sx={{ width: '18%', my: 0.4 }} color="secondary" variant="text" href="Zcross" >Zcross</Button>
                <Button sx={{ width: '18%', my: 0.4 }} color="secondary" variant="text" href="TaeZo" >TaeZo_</Button>
                <Button sx={{ width: '18%', my: 0.4 }} color="secondary" variant="text" href="MoonSky" >MoonSky</Button>
            </Box>
        </ThemeProvider>
     );
}
 
export default header;