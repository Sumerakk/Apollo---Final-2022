import React from 'react'
import CalculateCGPAForm from './CalculateCGPAForm'
import { Span } from 'app/components/Typography'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Button, Icon } from '@mui/material'

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
const CalculateCGPAFormFile = () => {
    return (
        <Container align = "center">
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Calculate GPA' },
                    ]}
                />
            </div>

            <Box py="5px" />
            <SimpleCard title="Calculate GPA">
                <CalculateCGPAForm />
            </SimpleCard>
        </Container>
    )
}

export default CalculateCGPAFormFile
