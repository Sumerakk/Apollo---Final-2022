import React from 'react'
import ActivatePeriodForm from './ActivatePeriodForm'
import { Span } from 'app/components/Typography'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Icon } from '@mui/material'
import axios from 'axios'


const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
const Container = styled('div')(({ theme }) => ({
    margin: '40px', 
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
const ActivatePeriodFormFile = () => {
    return (
        <Container align = "center" >
            <div className="breadcrumb">
                <Breadcrumb
                   routeSegments={[
                    { name: 'Material', path: '/material' },
                    { name: 'Activate Period' },
                ]}
                />
            </div>
            <SimpleCard title="Registration Period">
                <ActivatePeriodForm />
            </SimpleCard>


        </Container>
    )
}

export default ActivatePeriodFormFile
//adminFeature