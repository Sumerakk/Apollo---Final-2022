import React from 'react'
import AddTeacherForm from './AddTeacherForm'
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
const AddTeacherFormFile = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Add Teacher Form' },
                    ]}
                />
            </div>

<SimpleCard justifyContent="center" title="Upload Teachers Data">
                <input
                    accept="xlsx/*"
                    className="input"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="raised-button-file">
                    <Button component="span"  className="input" color="primary" variant="contained">
                                    Upload
                    </Button>
                </label> 
                    <Button style={{marginLeft: '80%', width:120}} color="primary" variant="contained" type="submit">
                            <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                                    Import
                            </Span>
                    </Button>
</SimpleCard>
<Box py="5px" />
            <SimpleCard title="Add New Teacher">
                <AddTeacherForm />
            </SimpleCard>


        </Container>
    )
}

export default AddTeacherFormFile
