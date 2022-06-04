import React, { Fragment } from 'react'
import {StyleSheet, Text} from 'react-native'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Grid } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system'

const ItemHead = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    height: 60,
    lineHeight: '60px',
  }));
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.Secondary,
    textAlign: 'left',
    paddingTop: '26px',
    paddingLeft: '10px',
    borderColor: '#1c2566',
    height: 300,
  }));
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
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
function createFamilyInfoData(familyInforCol1,familyInforCol2,familyInforCol3) {
  return { familyInforCol1,familyInforCol2,familyInforCol3};
}
function createUniInfoData(uniInforCol1, uniInforCol2, uniInforCol3) {
  return { uniInforCol1, uniInforCol2, uniInforCol3};
}
function createPersonalInfoData(personalInforCol1, personalInforCol2, personalInforCol3) {
    return { personalInforCol1, personalInforCol2, personalInforCol3};
  }
function createContactInfoData(contactInforCol1, contactInforCol2, contactInforCol3) {
    return { contactInforCol1, contactInforCol2, contactInforCol3};
  }
  const FIrows = [
    createFamilyInfoData(<Text><Text style={{fontWeight: "bold"}}> Father: </Text><Text> Dost Muhammad</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> CNIC:  </Text><Text> 45305-062030-2</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Email: </Text><Text> dostMuhammad22@gmail.com</Text></Text>)
  ];
  const UIrows = [
    createUniInfoData(<Text><Text style={{fontWeight: "bold"}}> Name: </Text><Text> Wajeeha Memon</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> DOB:  </Text><Text> 02/24/1997</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Gender: </Text><Text> Female</Text></Text>),
    createUniInfoData(<Text><Text style={{fontWeight: "bold"}}> CNIC: </Text><Text> 45305-062030-2</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Mobile No: </Text><Text> 03330387753</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Nationality: </Text><Text> Pakistani</Text></Text>),
    createUniInfoData(<Text><Text style={{fontWeight: "bold"}}> Email: </Text><Text> wajeeha81@gmail.com</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Blood Group: </Text><Text> A+</Text></Text>)
  ];
const PIrows = [
    createPersonalInfoData(<Text><Text style={{fontWeight: "bold"}}> Name: </Text><Text> Wajeeha Memon</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> DOB:  </Text><Text> 02/24/1997</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Gender: </Text><Text> Female</Text></Text>),
    createPersonalInfoData(<Text><Text style={{fontWeight: "bold"}}> CNIC: </Text><Text> 45305-062030-2</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Mobile No: </Text><Text> 03330387753</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Nationality: </Text><Text> Pakistani</Text></Text>),
    createPersonalInfoData(<Text><Text style={{fontWeight: "bold"}}> Email: </Text><Text> wajeeha81@gmail.com</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Blood Group: </Text><Text> A+</Text></Text>)
  ];
  const CIrows = [
    createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Address: </Text><Text> House No#C2-08, Phase#02, Gulshan-e-Hadeed</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Address:  </Text><Text> Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>),
    createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Home Phone: </Text><Text> 03330387753</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Home Phone: </Text><Text> 03042934916</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>),
    createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Postal Code: </Text><Text> 63501</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Postal Code: </Text><Text> 75301</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>),
    createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> City: </Text><Text> Karachi</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> City: </Text><Text> Karachi</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>),
    createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Country: </Text><Text> Pakistan</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Country: </Text><Text> Pakistan</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>)
  ];
    export default function ControlledExpansionPanels() {
        const [expanded, setExpanded] = React.useState(false)
        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false)
        }
    
        return (
            <Container justifyContent="center">
                   <Grid color="primary" container spacing={2} justifyContent="center">
      {[lightTheme].map((theme, index) => (
        <Grid ItemHead xs={10} >
          <ThemeProvider theme={theme}>
          <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#1c2566'}} key={elevation} elevation={elevation}>
                  {'University Information'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
        </TableHead>
        <TableBody>
          {UIrows.map((row) => (
            <TableRow key={row.uniInforCol1}>
                 
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">{row.uniInforCol1}</TableCell>
              <TableCell align="left">{row.uniInforCol2}</TableCell>
              <TableCell align="left">{row.uniInforCol3}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>          
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#1c2566'}} key={elevation} elevation={elevation}>
                  {'Personal Information'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
        </TableHead>
        <TableBody>
          {PIrows.map((row) => (
            <TableRow key={row.personalInforCol1}>
                 
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">{row.personalInforCol1}</TableCell>
              <TableCell align="left">{row.personalInforCol2}</TableCell>
              <TableCell align="left">{row.personalInforCol3}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#1c2566'}} key={elevation} elevation={elevation}>
                  {'Contact Information'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
        <TableRow>
            <TableCell align="center" colSpan={2} style={{ fontSize: '16px', fontWeight: 'bold'}}>Permanent </TableCell>
            <TableCell align="center" colSpan={3} style={{ fontSize: '16px', fontWeight: 'bold' }}>Current </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CIrows.map((row) => (
            <TableRow key={row.contactInforCol1}>
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left"> {row.contactInforCol1}</TableCell>
              <TableCell align="left">{row.contactInforCol2}</TableCell>
              <TableCell align="left">{row.contactInforCol3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
            
            <Box py="5px" />
            <Box >
              {[2].map((elevation) => (
                <ItemHead sx={{backgroundColor: '#1c2566'}} key={elevation} elevation={elevation}>
                  {'Family Information'}
                </ItemHead>
                ))}
            </Box>
            <Box >
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
        </TableHead>
        <TableBody>
          {FIrows.map((row) => (
            <TableRow key={row.familyInforCol1}>
                 
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">{row.familyInforCol1}</TableCell>
              <TableCell align="left">{row.familyInforCol2}</TableCell>
              <TableCell align="left">{row.familyInforCol3}</TableCell>
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
        )
    }
    