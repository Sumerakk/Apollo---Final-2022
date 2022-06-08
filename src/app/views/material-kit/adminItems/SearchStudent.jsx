
import React, { Fragment, useState, useContext, useEffect} from 'react'
import axios from 'axios';
import {StyleSheet, Text} from 'react-native'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Grid,  Container, Icon} from '@mui/material'
import { styled, useTheme } from '@mui/system'
import { Box } from '@mui/system'
import { StyledButton } from 'app/MUIstyle/buttons/StyledButton';
import { SearchButton } from 'app/MUIstyle/buttons/SearchButton';
import { StyledTable } from 'app/MUIstyle/tables/StyledTable';
import { SearchInput } from 'app/MUIstyle/input/SearchInput';
import { SearchContainer } from 'app/MUIstyle/input/SearchContainer';
import { useNavigate } from 'react-router-dom'
import {  TextField} from '@material-ui/core';

const SearchStudent =() =>{
    const [rollNo, setRollNo] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([])
    const [record, setRecord] = useState([])
    const [search, setSearch] = useState([])
    const navigate = useNavigate();

const searchRecords = async() =>{
    try{
    axios.get(`http://localhost:5000/Search/${record}`)
    .then(response => {
        setSearch(response.data)
        console.log('search result: ',response.data)
        localStorage.setItem('studentsList',JSON.stringify(response.data))
        let studentSearchResult = JSON.parse(localStorage.getItem('studentsList'))
        console.log("student search result", studentSearchResult)
        //console.log(setSearch)
        

    })
}catch (err){
    console.error(err)
    return [500, { message: 'Student not found!' }]

}
}
/*useEffect(() => {
 
  }, []);*/
    return(
    <Container justifyContent ="center">
        <h2> <b>Search Students</b></h2>
        <div sx={{
            color: 'success.dark',
            display: 'flex',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}>
              
        <SearchInput type = "search"   variant= "outlined" onChange={(e)=>setRecord(e.target.value)} placeholder="Enter Roll No" paddingLeft={10}>
        
        </SearchInput>
       
        <SearchButton spacing={{ xs: 1, sm: 2, md: 4 }}  variant="contained" color="primary" type="button" onClick={searchRecords}>Search </SearchButton>
        </div>
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Student Roll No</TableCell>
                        <TableCell>Studnet Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
          
                <TableBody>
                {search.map((student) => (
                  
                    <TableRow  >
                        <TableCell align="left">
                        {student.studentRollNo}
                        </TableCell>
                         <TableCell align="left">
                        {student.studentName}
                        </TableCell>
                        <TableCell align="left">
                        {student.username}
                        </TableCell>
                        <TableCell align="left">
                        <StyledButton variant="outlined" color="primary"  onClick={()=> navigate('/registerStudent')}><b>View</b></StyledButton>
                        </TableCell>
                    </TableRow>

                ))}
                </TableBody>

                </StyledTable>
                </Box>
                </Container>
    )
}

export default SearchStudent