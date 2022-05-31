import React from 'react'
import StudentsList from './EvaluateStudents'
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
const ManageEvaluation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                      //  { name: 'Material', path: '/material' },
                        { name: 'Set Assessment' },
                    ]}
                />
            </div>
            <SimpleCard title="Set Assessment">
                <StudentsList />
            </SimpleCard>


        </Container>
    )
}

export default ManageEvaluation
