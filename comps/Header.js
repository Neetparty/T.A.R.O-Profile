import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const header = () => {
    const [value, setValue] = React.useState('neet');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 
        <Box sx={{ width: '100%', height: '0', m: '1em', p: '0' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{ p: '1.5em', pt: '0', pb: '0' }}
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab sx={{ width: '20%', my: 0.4 }} value="Neetparty" label="Neetparty" href={value} />
                <Tab sx={{ width: '20%', my: 0.4 }} value="Zcross" label="Zcross" href={value} />
                <Tab sx={{ width: '20%', my: 0.4 }} value="Neverterra" label="Neverterra" href={value} />
                <Tab sx={{ width: '20%', my: 0.4 }} value="TaeZo" label="TaeZo_" href={value} />
                <Tab sx={{ width: '20%', my: 0.4 }} value="MoonSky" label="MoonSky" href={value} />
            </Tabs>
        </Box>
     );
}
 
export default header;