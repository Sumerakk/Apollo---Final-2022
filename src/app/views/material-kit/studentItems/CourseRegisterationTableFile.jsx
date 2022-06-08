import React from 'react'
import {StyleSheet, Text} from 'react-native'
import CourseRegisterationTable from './CourseRegisterationTable'
import ElectiveCourseRegisterationForm from 'app/views/material-kit/studentItems/ElectiveCourseRegisterationForm'
//import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Icon, Button, Fab } from '@mui/material'
import { Span } from 'app/components/Typography'
import { useNavigate } from 'react-router-dom'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
const CourseRegisterationTableFile = () => {

    const navigate = useNavigate();
    return (
        <Container align = "center">
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Course Registeration' },
                    ]}
                />
           </div>

            <SimpleCard title="Core Courses">
                <div>
            <Text><Text style={{ align:"left" , textDecorationLine : "underline" , paddingLeft: '4px' , fontWeight: "bold"}}> Semester:  </Text><Text> Spring-2022</Text></Text>
           <Text><Text style={{align:"right", textDecorationLine : "underline" , paddingLeft: '60px', fontWeight: "bold"}}> Program:  </Text><Text> BS-CS</Text></Text></div>          
            <Box py="3px" />
                <CourseRegisterationTable />
            </SimpleCard>
            <Box py="3px" />
            <SimpleCard title="Elective Courses">
               <ElectiveCourseRegisterationForm />
            </SimpleCard>
        </Container>
    )
}

export default CourseRegisterationTableFile
