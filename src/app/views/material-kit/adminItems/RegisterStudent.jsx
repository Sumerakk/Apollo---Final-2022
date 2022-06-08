import React, { Fragment, useState, useContext, useEffect} from 'react'
import axios from 'axios';
import {StyleSheet, Text} from 'react-native'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Grid,  Container, Icon, Input} from '@mui/material'
import { styled, useTheme } from '@mui/system'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Box } from '@mui/system'
import { StyledButton } from 'app/MUIstyle/buttons/StyledButton';
import { SearchButton } from 'app/MUIstyle/buttons/SearchButton';
import { StyledTable } from 'app/MUIstyle/tables/StyledTable';
import { SearchInput } from 'app/MUIstyle/input/SearchInput';
import { SearchContainer } from 'app/MUIstyle/input/SearchContainer';
import { useNavigate } from 'react-router-dom'
import {  TextField} from '@material-ui/core';

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const RegisterStudent =() =>{
    const [rollNo, setRollNo] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([])
    const [record, setRecord] = useState([])
    const [search, setSearch] = useState([])
    const navigate = useNavigate();


const register = async(password) =>{
    try{
    axios.post('http://localhost:5000/userLogin', {password})
    .then(response => {
        setUsers(response.data)
        console.log('search result: ',response.data)
        localStorage.setItem('registerUser',JSON.stringify(response.data))
        let userLoginData = JSON.parse(localStorage.getItem('registerUser'))
        console.log("student search result", userLoginData)
        //console.log(setSearch)
    })
}catch (err){
    console.error(err)
    return [500, { message: 'Student not found!' }]

}
}

const searchRecords = async() =>{
    try{
    axios.get(`http://localhost:5000/Search/${record}`)
    .then(response => {
        setSearch(response.data)
        console.log('search result: ',response.data)
        localStorage.setItem('studentsList',JSON.stringify(response.data))
        //console.log(setSearch)
    })
}catch (err){
    console.error(err)
    return [500, { message: 'Student not found!' }]

}
}

const studentSearchResult = JSON.parse(localStorage.getItem('studentsList'))
console.log("student search result", studentSearchResult)


/*useEffect(() => {
 
  }, []);*/
    return(
    <Container justifyContent ="center">
        <h2> <b>Register Student</b></h2>
        
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Student Roll No</TableCell>
                        <TableCell>Studnet Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
          
                <TableBody>
              
                {search.map((studentSearchResult) => (
                    <TableRow  >
                        <TableCell align="left">
                        {studentSearchResult.studentRollNo}
                        </TableCell>
                         <TableCell align="left">
                        {studentSearchResult.studentName}
                        </TableCell>
                        <TableCell align="left">
                        {studentSearchResult.username}
                        </TableCell>
                        <TableCell align="left">
                        <Input type = "password" variant= "outlined" onChange={(e)=>setUsers(e.target.value)} placeholder="Password" ></Input>
                        </TableCell>
                    </TableRow>
   ))}
                </TableBody>

                </StyledTable>
                </Box>
                </Container>
    )
}

export default RegisterStudent