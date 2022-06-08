import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    TableRow,
    Container,
} from '@mui/material'
import axios from 'axios'
import { Checkbox } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Icon, Button, Fab } from '@mui/material'


const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const OfferCourse = () => {

    const loadCourse= async() =>{
    try{
    axios.get('http://localhost:5000/Course')
    .then(response => {
        setCourse(response.data)
        console.log('course result: ',response.data)
        localStorage.setItem('courseList',JSON.stringify(response.data))
        let coursesList = JSON.parse(localStorage.getItem('courseList'))
        console.log("student search result",  coursesList   )
    })
}catch (err){
    console.error(err)
    return [500, { message: 'Student not found!' }]
}
}
useEffect(() => {
 loadCourse()
  }, []);

    const [checkedState, setChekcedState] = useState([]);
    const [course, setCourse] = useState([])
    const [checkBoxValue, setCheckBoxValue] = useState([])
    

    const handleCheckedBoxChange = (e) =>{
        const {checked, name} = e.target;
        if(checked){
          setChekcedState((oldState) => ([...oldState, name]))
        }else{
          setChekcedState((oldState) => oldState.filter((courses) => courses !== name))
        }
      }
    const handleChange = (name) => (event) => {
        setCheckBoxValue({ ...checkBoxValue, [name]: event.target.checked })
    }

    return (
        //<Container justifyContent ="center">
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Course Code</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell align="center">Course Credit Hours</TableCell>
                        <TableCell align="center">Course Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
          
                <TableBody>
                {course.map((courses) => (
                    <TableRow key={courses.courseTitle}>
                        <TableCell align="center">
                        {courses.courseCode}
                        </TableCell>
                         <TableCell style={{ width: '50%' }}>
                        {courses.courseTitle}
                        </TableCell>
                        <TableCell align="center">
                        {courses.courseCreditHours}
                        </TableCell>
                        <TableCell align="center">
                        {courses.courseTypeID}
                        </TableCell>
                        <TableCell align="center">
                                <IconButton>
                                <Checkbox
                                    onChange={handleCheckedBoxChange}
                                    checked={checkedState.includes(courses.courseTitle)}
                                    name={courses.courseTitle}
                                />
                                </IconButton>
                            </TableCell>
                    </TableRow>

                ))}
                </TableBody>

                </StyledTable>
        </Box>
    //</Container>
    )
}

export default OfferCourse
