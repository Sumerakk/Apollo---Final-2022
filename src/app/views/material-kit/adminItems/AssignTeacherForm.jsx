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
    const courseType = [
        { label: 'Core' },
        { label: 'Elective' }];
            
    const weekDay = [
        { label: 'Monday' },
        { label: 'Tuesday' },
        { label: 'Wednesday' },
        { label: 'Thursday' },
        { label: 'Friday' },
        { label: 'Saturday' }];
        
    const courseName = [
        { label: 'Computer Programing Language' },
        { label: 'Database Systems' },
        { label: 'Discrete Structures' },
        { label: 'Data Structures' },
        { label: 'Programming Fundamentals' },
        { label: 'Digital Logic Design' },
        { label: 'Object Oriented Programming' }];
       
    const teacherName = [
        { label: 'Abdul Rehman' },
        { label: 'Kamran Khan' },
        { label: 'Sadia Aleem' },
        { label: 'Wajeeha Memon' },
        { label: 'Atiqa Yousif' },
        { label: 'Sayed Usama' },
        { label: 'Hamza Khan' }];

    const [ startTime1, setStartTime1] = React.useState(null)
    const [ endTime1, setEndTime1] = React.useState(null)
    const [ startTime2, setStartTime2] = React.useState(null)
    const [ endTime2, setEndTime2] = React.useState(null)
    const [ startTime3, setStartTime3] = React.useState(null)
    const [ endTime3, setEndTime3] = React.useState(null)
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
    const { ClassHours1, ClassHours2, ClassHours3, } = state

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
      
        <TableHead>
        <TableRow>
        <TableCell align="center">
            Course Name
        </TableCell>
        <TableCell align="center">
            Teacher
        </TableCell>
        <TableCell align="center">
            Day
        </TableCell>
        <TableCell align="center">
            Class Hours
        </TableCell>
        <TableCell align="center">
            Start Time
        </TableCell>
        <TableCell align="center">
            End Time
        </TableCell>
        </TableRow>
        </TableHead>
            <TableRow>
                <TableCell style={{marginLeft: '5%', width:200}}>
                <Autocomplete
                           options={courseName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Course Name"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:200}}>
                 <Autocomplete
                           options={teacherName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Teacher"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:200}}>
                 <Autocomplete
                           options={weekDay}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Day"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />           
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:130}}>
                 <TextField
                       label="Class Hours"
                       onChange={handleChange}
                       type="number"
                       name="ClassHours1"
                       value={ClassHours1 || ''}
                       validators={[
                           'required',
                           'minStringLength:1',
                           'maxStringLength: 4',
                       ]}
                       errorMessages={['this field is required']}
                       sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                   />
                 </TableCell>
                 <TableCell style={{marginLeft: '5%', width:180}}>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <TimePicker
                        label="Class Start Time"
                        value={startTime1}
                        onChange={(newValue) => {
                            setStartTime1(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />        
                     </LocalizationProvider>
                 </TableCell>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>                            
                     <TimePicker
                        label="Class End Time"
                        value={endTime1}
                        onChange={(newValue)  => {
                            setEndTime1(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                      </LocalizationProvider>
                 </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                <Autocomplete
                           options={courseName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Course Name"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell>
                 <Autocomplete
                           options={teacherName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Teacher"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell>
                 <Autocomplete
                           options={weekDay}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Day"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />           
                 </TableCell>
                 <TableCell>
                 <TextField
                       label="Class Hours"
                       onChange={handleChange}
                       type="number"
                       name="ClassHours2"
                       value={ClassHours2 || ''}
                       validators={[
                           'required',
                           'minStringLength:1',
                           'maxStringLength: 4',
                       ]}
                       errorMessages={['this field is required']}
                       sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                   />
                 </TableCell>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <TimePicker
                        label="Class Start Time"
                        value={startTime2}
                        onChange={(newValue) => {
                            setStartTime2(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />        
                     </LocalizationProvider>
                 </TableCell>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>                            
                     <TimePicker
                        label="Class End Time"
                        value={endTime2}
                        onChange={(newValue)  => {
                            setEndTime2(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                      </LocalizationProvider>
                 </TableCell>
                </TableRow>
                <TableRow >
                <TableCell>
                <Autocomplete
                           options={courseName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Course Name"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell>
                 <Autocomplete
                           options={teacherName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Teacher"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                 </TableCell>
                 <TableCell>
                 <Autocomplete
                           options={weekDay}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Day"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />           
                 </TableCell>
                 <TableCell>
                 <TextField
                       label="Class Hours"
                       onChange={handleChange}
                       type="number"
                       name="ClassHours3"
                       value={ClassHours3 || ''}
                       validators={[
                           'required',
                           'minStringLength:1',
                           'maxStringLength: 4',
                       ]}
                       errorMessages={['this field is required']}
                       sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                   />
                 </TableCell>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <TimePicker
                        label="Class Start Time"
                        value={startTime3}
                        onChange={(newValue) => {
                            setStartTime3(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />        
                     </LocalizationProvider>
                 </TableCell>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>                            
                     <TimePicker
                        label="Class End Time"
                        value={endTime3}
                        onChange={(newValue)  => {
                            setEndTime3(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                      </LocalizationProvider>
                 </TableCell>
                 </TableRow>
                
                <Box py="10px" />
                <Button style={{marginLeft: '1%', width:150}} color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Submit
                    </Span>
                </Button>
               </ValidatorForm>
    )
}

export default AssignTeacherform
