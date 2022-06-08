import React, { Fragment, useState, useContext, useEffect} from 'react'
import {StyleSheet, Text} from 'react-native'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Grid, Button} from '@mui/material'
import { styled, useTheme } from '@mui/system'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AuthContext  from '../../contexts/JWTAuthContext'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
      
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    iceBlue:{
      iceBlue: '#bbdefb',
    }
  },
});
/*const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  }),
);
const colorHash = new ColorHash();
*/
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
    margin: '150px', 
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


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



const AdminDashboard = () => {
  //const classes = useStyles();
  const [rollNo, setRollNo] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

function searchStd(rollNo){
  const searchResponse= axios.get('http://localhost:5000/Search/' + rollNo)
  const studentsFromApi = searchResponse.data
  const getStudents = console.log ('You found me!' , studentsFromApi)
  localStorage.setItem('searchResult', JSON.stringify(getStudents))
  const isStudent = JSON.parse(localStorage.getItem('searchResult'))
  console.log('you found me after click', isStudent)


}
  //const searchResponse= axios.get('http://localhost:5000/Search/' + rollNo)
 // console.log('before search')
  //const isStudent = searchResponse.data
  //const getStudent = console.log ('You found me before click!' , isStudent)

   const handleFormSubmit = async (event) => {
    setLoading(true)
    try {
        await searchStd(rollNo)
        console.log('Student found', rollNo)
        // navigate('/')

    } catch (e) {
        console.log(e)
        setMessage(e.message)
        setLoading(false)
    }
}

function onSearch(){
  <form className="search-form" onSubmit={handleFormSubmit}>
                <input type="search"
                    onChange={e => setRollNo(e.target.value)}
                    name="search"
                    //ref={(input) =>}
                    value={rollNo}
                    placeholder="Search..." />
                <button className="search-button" type="submit" id="submit">Go!</button>
            </form>
}



 return (

/*<span>


</span>*/

  /*<Container justifycontent="center" style={{height: '200px'}} backgroundcolor="blue" justifyitems = "center" >
  
  <Col sm={3}>
    <Grid container justifycontent="center">
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={40}>
    <Button onClick={()=> navigate('/material/EditStudentForm')} variant="contained"  type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Search Student</Button>
    </Grid> 
    </Grid>  
    </Col>
    
    <Col sm={2}>
    <Grid container justifycontent="center">
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={40} padd>
    <Button onClick={()=> navigate('/material/EditStudentForm')} variant="contained"  type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Register Student</Button>
    </Grid> 
    </Grid>  
    </Col>


    <Col sm={3}>
    <Grid container paddingTop={3} justifycontent="center">
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={60}>
    <Button variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Manage Schedule</Button>
    </Grid> 
    </Grid>  
    </Col>

    <Col sm={2}>
    <Grid container paddingTop={3} justifycontent="center">
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={40}>
    <Button variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Active Period</Button>
    </Grid> 
    </Grid>  
    </Col>
 

</Container>*/



<Grid container justifyContent="center" paddingTop={5} rowSpacing={5} columnSpacing={{ xs: 3, sm: 3, md: 2 }}>
  <Grid item xs={5} >
    <Item justifyItems="center">
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={40}>
    <Button onClick={()=> navigate('/searchStudent')} variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Search Student</Button>
    </Grid> 
    </Item>
  </Grid>
  <Grid item xs={5}>
    <Item>
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={20}>
    <Button onClick={()=> navigate('/searchStudent')} variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Register Student</Button>
    </Grid> 
    </Item>
  </Grid>
  <Grid item xs={5}>
    <Item>
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={40}>
    <Button onClick={()=> navigate('/searchStudent')} variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Manage Schedule</Button>
    </Grid> 
    </Item>
  </Grid>
  <Grid item xs={5}>
    <Item>
    <Grid item xs={6} md={8} justifyitems = "center" marginLeft={20}>
    <Button onClick={()=> navigate('/activePeriod')} variant="contained"   type="submit" style={{height: '150px', width: '200px', fontSize: '19px', fontWeight: 'bold'}}>Active Period</Button>
    </Grid> 
    </Item>
  </Grid>
</Grid>





 )

      }
  
export default AdminDashboard