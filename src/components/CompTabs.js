import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CompButton from './CompButton';
import CompCheckbox from './CompCheckbox';
import CompTextbox from './CompTextbox';
import CompRadioButton from './CompRadioButton';
import CompCalender from './CompCalender';

function TabPanel(props) {
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

TabPanel.propTypes = {
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

const CompTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Button" {...a11yProps(0)} />
          <Tab label="Checkbox" {...a11yProps(1)} />
          <Tab label="Textbox" {...a11yProps(2)} />
          <Tab label="Radio Button" {...a11yProps(3)} />
          <Tab label="Calender" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CompButton />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompCheckbox />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompTextbox />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CompRadioButton />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CompCalender />
      </TabPanel>
    </Box>
  );
}

export default CompTabs