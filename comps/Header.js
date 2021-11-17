import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const header = () => {
    const [value, setValue] = React.useState('neet');
    const [color, setColor] = React.useState('secondary');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setColor(event.target.attributes.color.value)
    };
    return ( 
        <Box sx={{ width: '100%', height: '0', m: '1em', p: '0' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{ p: '1.5em', pt: '0', pb: '0' }}
            >
                <Tab sx={{ width: '20%', my: 0.5 }} value="neet" color="secondary" label="Neetparty" />
                <Tab sx={{ width: '20%', my: 0.5 }} value="zcross" color="primary" label="Hoshina" />
                <Tab sx={{ width: '20%', my: 0.5 }} value="neverterra" color="success" label="Neverterra" />
                <Tab sx={{ width: '20%', my: 0.5 }} value="taezo" color="info" label="TaeZo_" />
                <Tab sx={{ width: '20%', my: 0.5 }} value="moonsky" color="danger" label="MoonSky" />
            </Tabs>
        </Box>
     );
}
 
export default header;