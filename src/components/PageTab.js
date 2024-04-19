import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function PageTab({ page, pagecat}) {

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
      <Box sx={{ width: '100%', borderTop : '1px solid #eae8e4', paddingTop : '32px'}}>
        <Box sx={{ borderColor: 'divider', borderBottom : '1px solid #eae8e4', paddingBottom : '32px'}}>
          <Tabs indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab className='tbname' label="Description" {...a11yProps(0)} />
            <Tab className='tbname' label="Product Details" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            {
                page.map((desc)=> {
                    return (
                        <p style={{ fontSize : '16px!important'}}>{desc.description}</p>
                    )
                })
            }
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {
            pagecat.map((cat)=> {
                return(
                    <p style={{ fontSize : '16px!important'}}>{cat.description}</p>
                )
            })
          }
        </CustomTabPanel>
      </Box>
    </ThemeProvider>

  );
}
