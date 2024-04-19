import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridBlocks from './GridBlocks';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductTab( { featdata }) {

  const filteredData1 = featdata.filter((ele, i )=> {
    
    return i < 10 

  });

  const filteredData2 = featdata.filter((ele, i )=> {
    
    return i > 5 

  });


  const filteredData3 = featdata.filter((ele, i )=> {
    
    return i > 10 || i < 5 

  });



  const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderColor: 'divider'}}>
          <Tabs indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab className='tbname' label="Featured" {...a11yProps(0)} />
            <Tab className='tbname' label="On Sale" {...a11yProps(1)} />
            <Tab className='tbname' label="Most Viewed" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <GridBlocks featdata={filteredData1}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GridBlocks featdata={filteredData2}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <GridBlocks featdata={filteredData3}/>
        </CustomTabPanel>
      </Box>
    </ThemeProvider>

  );
}