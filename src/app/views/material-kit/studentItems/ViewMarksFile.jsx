import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import ViewMarks from './ViewMarks'
import { Box, styled } from '@mui/system'

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

const AppExpansionPanel = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'View Marks' },
                    ]}
                />
            </div>
            <Box py="12px" />
            <SimpleCard title="View Marks">
                <ViewMarks />
            </SimpleCard>
            <Box py="12px" />
            
        </Container>
    )
}

export default AppExpansionPanel
