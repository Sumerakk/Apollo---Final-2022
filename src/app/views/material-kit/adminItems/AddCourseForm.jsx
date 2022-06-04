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
import { DatePicker } from '@mui/lab'
import {Autocomplete} from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
     
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddCourseForm = () => {
    const courseType = [
        { label: 'Core' },
        { label: 'Elective' }];
            
    const programName = [
        { label: 'CS' },
        { label: 'BBA' },
        { label: 'AI' },
        { label: 'EE' },
        { label: 'CNS' },
        { label: 'SPM' },
        { label: 'DS' }];
        
    const preReqs = [
        { label: 'Computer Programing Language' },
        { label: 'Database Systems' },
        { label: 'Discrete Structures' },
        { label: 'Data Structures' },
        { label: 'Programming Fundamentals' },
        { label: 'Digital Logic Design' },
        { label: 'Object Oriented Programming' }];
        
    const [state, setState] = useState({
        date: new Date(),
    })
    const [value, setValue] = React.useState(null)
    const filter = createFilterOptions()
     /*const [selectedValue, setSelectedValue] = React.useState(null);
    const handleChangedropdown = obj => {
    setSelectedValue(obj);
  }*/

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = () => {
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

    const handleStartDateChange = (startDate) => {
        setState({ ...state, startDate })
    }
    const handleEndDateChange = (endDate) => {
        setState({ ...state, endDate })
    }

    const {
        username,
        firstName,
        creditCard,
        startDate,
        endDate,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
               <Grid container justifyContent="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Autocomplete
                           options={programName}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Program Name"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                    />
                        <TextField
                            type="text"
                            name="username"
                            id="standard-basic"
                            onChange={handleChange}
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 6',
                            ]}
                            label="Course Code (Min length 4, Max length 6)"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Course Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            
                            label="Course Credit Hours"
                            onChange={handleChange}
                            type="number"
                            name="creditCard"
                            value={creditCard || ''}
                            validators={[
                                'required',
                                'minStringLength:3',
                                'maxStringLength: 4',
                            ]}
                            errorMessages={['this field is required']}
                            sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                        />
                     <Autocomplete
                           options={preReqs}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Pre-requiste Course"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                    />
                    <Autocomplete
                           options={courseType}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Course Type"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                    />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={startDate}
                                onChange={handleStartDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Effective Start Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={endDate}
                                onChange={handleEndDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Effective End Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
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

export default AddCourseForm
