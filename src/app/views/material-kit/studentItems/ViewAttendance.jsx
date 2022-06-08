import {
  MenuItem,
  Select,
} from '@mui/material'
import * as React from 'react';
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {StyleSheet, Text} from 'react-native'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const CardHeader = styled('div')(() => ({
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
const ItemHead = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  height: 60,
  lineHeight: '60px',
}));
const lightTheme = createTheme({ palette: { mode: 'light' } });
const Container = styled('div')(({ theme }) => ({
    margin: '40px', 
    [theme.breakpoints.down('sm')]: {
        margin: '20px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
function createContactInfoData(contactInforCol1, contactInforCol2, contactInforCol3, contactInforCol4) {
  return { contactInforCol1, contactInforCol2, contactInforCol3, contactInforCol4};
}
const CIrows = [
  createContactInfoData(<Text> 1</Text>,
  <Text> 07-Feb-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 2</Text>,
  <Text> 14-Feb-2022</Text>,
 <Text> 3 </Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 3</Text>,
  <Text> 21-Feb-2022</Text>,
  <Text> 3 </Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 4</Text>,
  <Text> 28-Feb-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 5</Text>,
  <Text> 07-Mar-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 6</Text>,
  <Text> 14-Mar-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 7</Text>,
  <Text> 21-Mar-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 8</Text>,
  <Text> 27-Mar-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>),
  createContactInfoData(<Text> 9</Text>,
  <Text> 04-Apr-2022</Text>,
  <Text> 3</Text>,
  <Text> P</Text>)

];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
        <Box sx={{ bgcolor: 'background.paper', width: 1330 }}>
          <CardHeader align="center">
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">Spring - 2022</MenuItem>
          <MenuItem value="last_month">Fall - 2021</MenuItem>                    
          <MenuItem value="last_month">Summer - 2021</MenuItem>
        </Select>
    </CardHeader>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="CS-5003" {...a11yProps(0)} />
          <Tab label="CS-5008" {...a11yProps(1)} />
          <Tab label="CS-5088" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#008ae6'}} key={elevation} elevation={elevation}>
                  {'CS-5003-MS Practicum -II'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        <TableHead>
        <TableRow>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Lecture No </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Date</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Duration(In Hours) </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Presence </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
            
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
            </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#008ae6'}} key={elevation} elevation={elevation}>
                  {'CS-5008-Software Processes and Quality Assurance'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        <TableHead>
        <TableRow>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Lecture No </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Date</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Duration(In Hours) </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Presence </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
            
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
            </Container>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#008ae6'}} key={elevation} elevation={elevation}>
                  {'CS-5088-Software Process Mgmt. and Metrics'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        <TableHead>
        <TableRow>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Lecture No </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Date</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Duration(In Hours) </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Presence </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
            
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
            </Container>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}