import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { styled } from '@mui/system'
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
    const suggestions = [
        { label: 'Afghanistan' },
        { label: 'Aland Islands' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'American Samoa' },
        { label: 'Andorra' },
        { label: 'Angola' }];

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
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
               <Grid container justifyContent="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Autocomplete
                           options={suggestions}
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
                                            <Autocomplete
                           options={suggestions}
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
                                           <Autocomplete
                           options={suggestions}
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
                     <TextField
                       label="Class Hours"
                       onChange={handleChange}
                       type="number"
                       name="ClassHours"
                       value={ClassHours || ''}
                       validators={[
                           'required',
                           'minStringLength:1',
                           'maxStringLength: 4',
                       ]}
                       errorMessages={['this field is required']}
                       sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                   />
                   <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <TimePicker
                        label="Class Start Time"
                        value={startTime}
                        onChange={(newValue) => {
                            setStartTime(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />                                    
                     <TimePicker
                        label="Class End Time"
                        value={endTime}
                        onChange={(newValue)  => {
                            setEndTime(newValue);
                      }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                      </LocalizationProvider>
                     </Grid>
               </Grid>
                <Button style={{marginLeft: '25%', width:150}} color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Submit
                    </Span>
                </Button>
               </ValidatorForm>
        </div>
    )
}

export default AssignTeacherform
