import React from 'react'
import OfferCourse from './OfferCourse'
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
                        { name: 'Material', path: '/material' },
                        { name: 'Offer Courses' },
                    ]}
                />
           </div>
 
            <SimpleCard title="Offer Courses">
            <StyledButton style={{marginLeft: '65%', width:150}} onClick={()=> navigate('/material/AddCourseform')} variant="contained" color="primary">
                    Add New Course
            </StyledButton>
                <StyledButton variant="contained" color="primary">
                    Offer Selected Courses
                </StyledButton>
                 <OfferCourse />
            </SimpleCard>
        </Container>
    )
}

export default AppTable
