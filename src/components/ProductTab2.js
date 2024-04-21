import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridBlocks3 from './GridBlocks3';

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

export default function ProductTab2( { NewRdata }) {

    const NewData1 = NewRdata.filter((ele, i) => {
        return i < 4
    });

    const NewData2 = NewRdata.filter((ele, i) => {
        return i > 3 && i < 8
    });

    const NewData3 = NewRdata.filter((ele, i) => {
        return i >= 8 && i < 12
    });

    const NewData4 = NewRdata.filter((ele, i) => {
        return i >= 12
    });

    console.log(NewData2)




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
        <Box className='newrel' sx={{ borderColor: 'divider', display : 'flex', justifyContent : 'space-between', alignItems : 'center', marginLeft : '60px', marginRight : '60px'}}>
            <div>
                <h2>New Releases</h2>
            </div>
            <Tabs indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab className='tbname' label="Mobile Phones" {...a11yProps(0)} />
                <Tab className='tbname' label="FootWear" {...a11yProps(1)} />
                <Tab className='tbname' label="Books" {...a11yProps(2)} />
                <Tab className='tbname' label="OuterWear" {...a11yProps(3)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <GridBlocks3 NewData1={NewData1}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GridBlocks3 NewData1={NewData2}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <GridBlocks3 NewData1={NewData3}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <GridBlocks3 NewData1={NewData4}/>
        </CustomTabPanel>
      </Box>
    </ThemeProvider>

  );
}