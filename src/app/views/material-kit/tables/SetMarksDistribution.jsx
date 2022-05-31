import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    TableRow,
    Link,
    Grid,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Icon, Button, Fab } from '@mui/material'
//import {Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

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
const StyledButton = styled(Button)(({ theme }) => ({
    margin: '8px',
    paddingLeft: '1px',
    paddingRight: '34px',
    overflow: 'hidden',
    borderRadius: '300px',
    transition: 'all 250ms',
    '&.yesBtn': {
        '&:hover': {
            color: '#ffffff',
            background: `${theme.palette.primary.main} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
            fallbacks: [{ color: 'white !important' }],
        }
    },
    '&.noBtn': {
        '&:hover': {
            color: '#ffffff',
            background: `${theme.palette.secondary.main} !important`,
            backgroundColor: `${theme.palette.secondary.main} !important`,
            fallbacks: [{ color: 'white !important' }],
        }
    },
}))
const CourseList = [
    {
        courseCode: 'CS-101',
        creditHours: '03',
        course: 'Web Programming',
        url: true,
        courseType: 'Core',
        cell: CourseList=> <Link to={{ pathname: '/material/SetMarksDistribution'}}> {CourseList.course}</Link>
        //render: ({ w }) => (<Link to={{ pathname: '/material/OfferCourse'}}>{TableRow.CourseList}</Link>)
    },
    {
        courseCode: 'CS-102',
        creditHours: '01',
        course: 'Software Engineering',
        courseType: 'Core',
    },
    {
        courseCode: 'CS-201',
        creditHours: '03',
        course: 'Information Security',
        courseType: 'Core',
    },

   
]

const SimpleTable = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
    })
    
    const handleChange = (courseCode) => (event) => {
        setState({ ...state, [courseCode]: event.target.checked })
    }


    return (
        <Grid color="primary" container spacing={1} justifyContent="center">
            <Box width="95%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Course Code  </TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell >Course Credit Hours</TableCell>
                        <TableCell>Course Type</TableCell>
                        <TableCell>Action </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {CourseList.map((course, index) => (
                        <TableRow key={index}>
                            <TableCell  align="left" >
                                {course.courseCode}
                            </TableCell>
                            <TableCell align="left">
                                {course.course}
                            </TableCell>
                            <TableCell align="left">
                                {course.creditHours}
                            </TableCell>
                            <TableCell>
                                {course.courseType}
                            </TableCell>
                            <TableCell align="left">
                            <label htmlFor="text-button-file">
                    <StyledButton onClick={()=> navigate('/material/EditStudentForm')}>Set Marks</StyledButton></label>
                           </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
        </Grid>
        
    )
}

export default SimpleTable
