import React from 'react'
import EditStudentForm from './EditStudentForm'
import { Span } from 'app/components/Typography'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Icon } from '@mui/material'
import axios from 'axios'

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
const EditStudentFormFile = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Student Management', path: '/material' },
                        { name: 'Edit Student' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Student">
                <EditStudentForm />
            </SimpleCard>


        </Container>
    )
}

export default EditStudentFormFile
