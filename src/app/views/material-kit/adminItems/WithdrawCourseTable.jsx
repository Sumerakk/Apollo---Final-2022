import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    TableRow,
} from '@mui/material'
import { Checkbox } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Icon, Button, Fab } from '@mui/material'
import { useNavigate } from 'react-router-dom'

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
    margin: theme.spacing(1),
}))
const subscribarList = [
    {
        name: 'CS-101',
        date: '03',
        company: 'Computer Programing Language',
    },
    {
        name: 'CS-101-Lab',
        date: '01',
        company: 'Computer Programing Language - Lab',
    },
    {
        name: 'CS-201',
        date: '03',
        company: 'Database Systems',
    },
    {
        name: 'CS-201-Lab',
        date: '01',
        company: 'Database Systems - Lab',
    },
]

const SimpleTable = () => {

    const navigate = useNavigate();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
    })
    
    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked })
    }

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Course Code</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell align="center">Course Credit Hours</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.company}
                            </TableCell>
                            <TableCell align="center">
                                {subscriber.date}
                            </TableCell>
                            <TableCell align="left">
                            <StyledButton style={{width:150}} onClick={()=> navigate('/material/AddCourseform')} variant="contained" color="primary">
                    Withdraw Course
            </StyledButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
