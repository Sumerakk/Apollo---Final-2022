import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {StyleSheet, Text} from 'react-native'
import {Box, styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect, Fragment} from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import {Autocomplete} from '@mui/material'
import TimePicker from '@mui/lab/TimePicker';
     
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
    const electiveSS = [
        { label: 'Social Studies' },
        { label: 'Sociology' },
        { label: 'Psychology' },
        { label: 'Discrete Mathematics' }];
    const electiveMG = [
        { label: 'Marketing Management' },
        { label: 'Enterpreneurship' },
        { label: 'Business Management' },
        { label: 'Project Management' }];
    const electiveCS = [
        { label: 'Compiler Construction' },
        { label: 'Web Development' },
        { label: 'Compurter Vision' },
        { label: 'Computer Graphics' }];

    const [ startTime, setStartTime] = React.useState(null)
    const [ endTime , setEndTime] = React.useState(null)
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
    /*const handleStartTimeChange = (startTime) => {
        setState({ ...state, startTime })
    }
    const handleEndTimeChange = (endTime) => {
        setState({ ...state, endTime })
    }*/
    const { ClassHours, } = state

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      
        <TableHead>
        <TableRow>
        <TableCell align="center">
            CS Electives
        </TableCell>
        <TableCell align="center">
            MG Electives
        </TableCell>
        <TableCell align="center">
            SS Electives
        </TableCell>

        </TableRow>
        </TableHead>
        <TableRow>
				   <TableCell style={{marginLeft: '5%', width:300}}>
				  <Box py="5px" />
                         <Autocomplete
                           options={electiveCS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select CS Elective-1"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
					    </TableCell>
					<TableCell style={{marginLeft: '5%', width:300}}>
                    <Autocomplete
                           options={electiveMG}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select MG Elective-1"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
					    </TableCell>
						<TableCell style={{marginLeft: '5%', width:300}}>
                        <Autocomplete
                           options={electiveSS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select SS Elective-1"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
					   </TableCell>
				 </TableRow>
				 <TableRow>
				   <TableCell style={{marginLeft: '5%', width:250}}>
                   <Autocomplete
                           options={electiveCS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select CS Elective-2"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />  
					    </TableCell>
					<TableCell style={{marginLeft: '5%', width:250}}>
                        <Autocomplete
                           options={electiveMG}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select MG Elective-2"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />                
					    </TableCell>
						<TableCell style={{marginLeft: '5%', width:250}}>
                        <Autocomplete
                           options={electiveSS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select SS Elective-2"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
					   </TableCell>
				 </TableRow>
                 <TableRow>
                 <TableCell style={{marginLeft: '5%', width:250}}>
                 <Autocomplete
                           options={electiveCS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select CS Elective-3"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                <TableCell style={{marginLeft: '5%', width:250}}>
                <Autocomplete
                           options={electiveMG}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select MG Elective-3"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
               
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:250}}>
                 <Autocomplete
                           options={electiveSS}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select SS Elective-3"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />          
                 </TableCell>
				 </TableRow>
                 <Box py="5px" />
                <Button style={{marginLeft: '5%', width:150}} color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Submit
                    </Span>
                </Button>
               </ValidatorForm>
    )
}

export default AssignTeacherform
