import { palette } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const footer = () => {
    return (
        <div>
          <Typography component="div">
            <Box sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', p: 2 }}>
              <Box sx={{ textAlign: 'right', m: 1 }}>Copyright @ H0shiNa</Box>
            </Box>
          </Typography>
        </div>
     );
}

export default footer;
