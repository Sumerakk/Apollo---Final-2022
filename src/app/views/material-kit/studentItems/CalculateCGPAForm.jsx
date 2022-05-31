import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect, Fragment} from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import {Autocomplete} from '@mui/material'
import TimePicker from '@mui/lab/TimePicker'
import { Icon, Button, Fab, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { render } from 'react-dom';
     
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
const AppButtonRoot = styled('div')(({ theme }) => ({
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
    '& .button': {
        margin: theme.spacing(1),
    },
    '& .input': {
        display: 'none',
    },
}))


const AssignTeacherform = () => {
    const navigate = useNavigate();
    
    /*const [ marks1, setmarks1] = React.useState(null)
    const [ marks2, setmarks2] = React.useState(null)
    const [ marks3, setmarks3] = React.useState(null)
    const [ marks4, setmarks4] = React.useState(null)*/

    const [state, setState] = useState({
        date: new Date(),
    })

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    function calculateCGPAFormula(marks1) {
        var valGPA = ((marks1 - 50) / 12) + 1;
        render()
        {
            if(valGPA > 4)
            {
                return(console.log(4));
            }else
            {
                return(console.log(valGPA));
            }
        }
    }
      
    const { marks1, marks2, marks3, marks4} = state
    const { ClassHours1, ClassHours2, ClassHours3, } = state
    const { CrsName, gpa, } = state

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      
        <TableHead>
        <TableRow>
        <TableCell align="left">
            Course Name
        </TableCell>
        <TableCell align="center">
            Marks
        </TableCell>
        <TableCell align="center">
            Action
        </TableCell>
        <TableCell align="center">
            GPA
        </TableCell>
        </TableRow>
        </TableHead>
            <TableRow>
                <TableCell style={{marginLeft: '5%', width:250}}>
                    Software Engineering
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:160}}>
                 <TextField
                            type="text"
                            name="marks1"
                            id="standard-basic"
                            onChange={handleChange}
                            value={marks1 || ''}
                             validators={[
                                'required',
                            ]}
                            label="Marks (Min 0, Max 100)"
                            errorMessages={['This field is required']}
                        />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:100}}>
                 <Button style={{marginLeft: '20%', width:140}} onClick={calculateCGPAFormula} color="primary" variant="contained" type="submit">
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                    Calculate
                    </Span>
                </Button>        
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:130}}>
                 
                 </TableCell>
                
                </TableRow>            
                <TableRow>
                <TableCell style={{marginLeft: '5%', width:250}}>
                    Advanced Software Engineering
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:150}}>
                 <TextField
                            type="text"
                            name="marks2"
                            id="standard-basic"
                            onChange={handleChange}
                            value={marks2 || ''}
                            validators={[
                                'required',
                            ]}
                            label="Marks (Min 0, Max 100)"
                            errorMessages={['This field is required']}
                        />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:80}}>
                 <Button style={{marginLeft: '20%', width:140}} onClick={calculateCGPAFormula} color="primary" variant="contained" type="submit">
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                    Calculate
                    </Span>
                </Button>
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:130}}>
                 
                 </TableCell>
                
                </TableRow>
                <TableRow>
                <TableCell style={{marginLeft: '5%', width:300}}>
                    Software Project Management
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:150}}>
                 <TextField
                            type="text"
                            name="marks3"
                            id="standard-basic"
                            onChange={handleChange}
                            value={marks3 || ''}
                            validators={[
                                'required',
                            ]}
                            label="Marks (Min 0, Max 100)"
                            errorMessages={['This field is required']}
                        />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:200}}>
                 <Button style={{marginLeft: '20%', width:140}} onClick={calculateCGPAFormula} color="primary" variant="contained" type="submit">
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                    Calculate
                    </Span>
                </Button>    
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:130}}>
                 
                 </TableCell>
                
                </TableRow>
                <TableRow>
                <TableCell style={{marginLeft: '5%', width:250}}>
                    Software Quality Assurance
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:150}}>
                 <TextField
                            type="text"
                            name="marks4"
                            id="standard-basic"
                            onChange={handleChange}
                            value={marks4 || ''}
                            validators={[
                                'required',
                            ]}
                            label="Marks (Min 0, Max 100)"
                            errorMessages={['This field is required']}
                        />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:200}}>
                 <Button style={{marginLeft: '20%', width:140}} onClick={calculateCGPAFormula} color="primary" variant="contained" type="submit">
                <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                    Calculate
                    </Span>
                </Button>   
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:130}}>
                 
                 </TableCell>
                
                </TableRow>
                <Box py="10px" />
                <Button style={{marginLeft: '1%', width:140}} color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Submit
                    </Span>
                </Button>
               </ValidatorForm>
    )
}

export default AssignTeacherform
