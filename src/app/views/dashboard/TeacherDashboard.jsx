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


let isUser = JSON.parse(localStorage.getItem('teacherDetails'))
console.log('user',isUser)

function createPersonalInfoData(personalInforCol1, personalInforCol2, personalInforCol3) {
    return { personalInforCol1, personalInforCol2, personalInforCol3};
  }
function createContactInfoData(contactInforCol1, contactInforCol2, contactInforCol3) {
    return { contactInforCol1, contactInforCol2, contactInforCol3};
  }
const PIrows = [
    createPersonalInfoData(<Text><Text style={{fontWeight: "bold"}}> Name: </Text><Text> {isUser?.teacherName}</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> DOB:  </Text><Text> {isUser?.teacherDOB.split('T')[0]}</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Gender: </Text><Text> {isUser?.teacherGender}</Text></Text>),
    createPersonalInfoData(<Text><Text style={{fontWeight: "bold"}}> CNIC: </Text><Text>{isUser?.teacherCNIC} </Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Mobile No: </Text><Text> {isUser?.teacherContactNo}</Text></Text>,
    <Text><Text style={{fontWeight: "bold"}}> Email: </Text><Text> {isUser?.teacherEmail}</Text></Text>)
  ];
  const CIrows = [
      createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Address: </Text><Text> {isUser?.teacherAddress} </Text></Text>,
      <Text><Text style={{fontWeight: "bold"}}> Address:  </Text><Text> {isUser?.teacherAddress}</Text></Text>,
      <Text><Text style={{fontWeight: "bold"}}> </Text><Text> </Text></Text>),
      createContactInfoData(<Text><Text style={{fontWeight: "bold"}}> Home Phone: </Text><Text> {isUser?.teacherContactNo}</Text></Text>,
      <Text><Text style={{fontWeight: "bold"}}> Home Phone: </Text><Text> {isUser?.teacherContactNo}</Text></Text>,
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
            
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
            </Container>
        )
    }
    