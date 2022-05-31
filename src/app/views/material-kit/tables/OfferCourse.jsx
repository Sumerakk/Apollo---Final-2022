import React from 'react'
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

const subscribarList = [
    {
        name: 'CS-101',
        date: '03',
        company: 'Computer Programing Language',
        status: 'Core',
    },
    {
        name: 'CS-101-Lab',
        date: '01',
        company: 'Computer Programing Language - Lab',
        status: 'Core',
    },
    {
        name: 'CS-102',
        date: '03',
        company: 'Data Structures',
        status: 'Core',
    },
    {
        name: 'CS-201',
        date: '03',
        company: 'Database Systems',
        status: 'Core',
    },
    {
        name: 'CS-201-Lab',
        date: '01',
        company: 'Database Systems - Lab',
        status: 'Core',
    },
    {
        name: 'CS-301',
        date: '03',
        company: 'Linear Algebra',
        status: 'Core',
    },
    {
        name: 'CS-601',
        date: '03',
        company: 'Marketing Management',
        status: 'Elective',
    },
    {
        name: 'CS-701',
        date: '03',
        company: 'Enterpreneurship',
        status: 'Elective',
    },
    {
        name: 'CS-114',
        date: '03',
        company: 'Human & Computer Interaction',
        status: 'Core',
    },
    {
        name: 'CS-112',
        date: '03',
        company: 'Computer organization & Assembly Language',
        status: 'Core',
    },
    {
        name: 'CS-311',
        date: '03',
        company: 'Discrete Structures',
        status: 'Core',
    },
    {
        name: 'CS-320',
        date: '03',
        company: 'Algorthims',
        status: 'Core',
    },
    {
        name: 'CS-322',
        date: '03',
        company: 'Probability & Statistics',
        status: 'Core',
    },
]

const SimpleTable = () => {

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
                        <TableCell>Course Type</TableCell>
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
                            <TableCell>
                                {subscriber.status}
                            </TableCell>
                            <TableCell align="left">
                                <IconButton>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{'aria-label': 'uncontrolled-checkbox',}}
                                />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
