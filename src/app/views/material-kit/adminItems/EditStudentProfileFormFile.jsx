import {React , useState } from 'react'
import EditStudentProfileForm from './EditStudentProfileForm'
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
const EditStudentProfileFormFile = () => {

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Student Management', path: '/material' },
                        { name: 'Edit Student Profile' },
                    ]}
                />
            </div>
            
<EditStudentProfileForm />
        </Container>
    )
}

export default EditStudentProfileFormFile
