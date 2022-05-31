import React from 'react'
import ManageEvaluation from './ManageEvaluation'
import PaginationTable from './PaginationTable'
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
const AppTable = () => {

    const navigate = useNavigate();
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                       // { name: 'Courses', path: '/material' },
                        { name: 'Manage Evaluation' },
                    ]}
                />
           </div>
 
            <SimpleCard title="Manage Evaluation">
                 <ManageEvaluation />
            </SimpleCard>
        </Container>
    )
}

export default AppTable
