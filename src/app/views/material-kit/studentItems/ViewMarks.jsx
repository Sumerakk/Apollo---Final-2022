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
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const CardHeader = styled('div')(() => ({
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
const Heading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
}))

const SecondaryHeading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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
  function createContactInfoData(contactInforCol1, contactInforCol2, contactInforCol3, contactInforCol4,contactInforCol5, contactInforCol6, contactInforCol7,) {
    return { contactInforCol1, contactInforCol2, contactInforCol3, contactInforCol4,contactInforCol5, contactInforCol6, contactInforCol7,};
  }
  const CIrows = [
    createContactInfoData
    (<Text> 1</Text>,
    <Text> 20</Text>,
    <Text> 16</Text>,
    <Text> 50</Text>,
    <Text> 17</Text>,
    <Text> 10</Text>,
    <Text> 20</Text>),
    createContactInfoData
    (<Text> 2</Text>,
    <Text> 20</Text>,
    <Text> 20</Text>,
    <Text> 50</Text>,
    <Text> 15</Text>,
    <Text> 10</Text>,
    <Text> 20</Text>)
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
    const [expanded, setExpanded] = React.useState(false)
    const handleChangeExp = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
}
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
        <Box width="100%">
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChangeExp('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    
                >
                    <Heading >Project</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>              
 
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChangeExp('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Heading>Final Exam</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>  
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChangeExp('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Heading>Mid Term</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell> 
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChangeExp('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Heading>Grand Total marks</Heading>
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>   
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
                   
                </AccordionDetails>
            </Accordion>            
            <Box py="2px" />
        </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Box width="100%">
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChangeExp('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Heading>Project</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell> 
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChangeExp('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Heading>Final Exam</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>  
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChangeExp('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Heading>Mid Term</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>    
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChangeExp('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Heading>Grand Total marks</Heading>
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>   
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
                   
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
        </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Box width="100%">
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChangeExp('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Heading>Project</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>  
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChangeExp('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Heading>Final Exam</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>  
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChangeExp('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Heading>Mid Term</Heading>
                    
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>    
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
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChangeExp('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Heading>Grand Total marks</Heading>
                </AccordionSummary>
                <AccordionDetails>
                <Container justifyContent="center">
                   <Grid bgcolor= 'background.paper' container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
            <Box py="5px" />
            <Box >
            <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
        <TableRow sx={{backgroundColor: '#008ae6'}}>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Midterm # </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Weightage</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold'}}>Obtained Marks</TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Total marks </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Average </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Minimum </TableCell>
            <TableCell align="center" style={{ fontSize: '16px', fontWeight: 'bold' }}>Maximum </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell align="center">{row.contactInforCol1}</TableCell>
              <TableCell align="center">{row.contactInforCol2}</TableCell>
              <TableCell align="center">{row.contactInforCol3}</TableCell>              
              <TableCell align="center">{row.contactInforCol4}</TableCell>              
              <TableCell align="center">{row.contactInforCol5}</TableCell>              
              <TableCell align="center">{row.contactInforCol6}</TableCell>              
              <TableCell align="center">{row.contactInforCol7}</TableCell>    
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
                   
                </AccordionDetails>
            </Accordion>
            <Box py="2px" />
        </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}