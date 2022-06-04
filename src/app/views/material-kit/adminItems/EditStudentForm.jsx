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

const AddCourseForm = () => {
    const suggestions = [
        { label: 'CS' },
        { label: 'BBA' },
        { label: 'AI' },
        { label: 'EE' },
        { label: 'CNS' },
        { label: 'SPM' },
        { label: 'DS' }];
        
    const [state, setState] = useState({
        date: new Date(),
    })
    const [value, setValue] = React.useState(null)
    const handleChangedropdown = (event, newValue) => {
        if (newValue && newValue.inputValue) {
            setValue({
                label: newValue.inputValue,
            })
            return
        }
        setValue(newValue)
    }
    const filter = createFilterOptions()
    const filterOptions = (options, params) => {
        const filtered = filter(options, params)
        if (params.inputValue !== '') {
            filtered.push({
                inputValue: params.inputValue,
                label: `Add "${params.inputValue}"`,
            })
        }
        return filtered
    }
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

    const handleDateChange = (teacherDOB) => {
        setState({ ...state, teacherDOB })
    } 
    const handleStartDateChange = (effectiveStartDate) => {
        setState({ ...state, effectiveStartDate })
    }
    const handleEndDateChange = (effectiveEndDate) => {
        setState({ ...state, effectiveEndDate })
    }
    const {
        studentName,
        studentRollNo,
        studentImage,
        studentCNIC,
        studentDOB,
        studentGender,
        studentAddress,
        studentContactNo,
        studentEmail,
        studentGuardianName,
		studentGuardianNo,
		studentStatus,
		studentDepartment,
        effectiveStartDate,
        effectiveEndDate,
       } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
               <Grid container justifyContent="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <TextField
                            type="text"
                            name="studentName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={studentName || ''}
                            validators={['required' ]}
                            label="Name"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            type="text"
                            name="studentRollNo"
                            id="standard-basic"
                            onChange={handleChange}
                            value={studentRollNo || ''}
                            validators={['required']}
                            label="Roll No"
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            type="text"
                            name="studentCNIC"
                            id="standard-basic"
                            onChange={handleChange}
                            value={studentCNIC || ''}
                            validators={[
                            'required',
                            'minStringLength:13']}
                            label="CNIC"
                            errorMessages={['this field is required']}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={studentDOB}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Date of Birth"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <RadioGroup                        
                            sx={{ mb: 2 }}
                            value={studentGender || ''}
                            name="studentGender"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="secondary" />}
                                label="Male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="secondary" />}
                                label="Female"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                        <TextField
                            label="Address"
                            onChange={handleChange}
                            type="text"
                            name="studentAddress"
                            value={studentAddress || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Contact Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="studentContactNo"
                            value={studentContactNo || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="studentEmail"
                            name="studentEmail"
                            value={studentEmail || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                        <TextField
                            type="text"
                            name="studentGuardianName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={studentGuardianName || ''}
                            validators={['required' ]}
                            label="Guardian Name"
                            errorMessages={['this field is required']}
                    />
                        <TextField
                            label="Guardian Contact Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="studentGuardianNo"
                            value={studentGuardianNo || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                     <Autocomplete
                           options={suggestions}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Department"
                            variant="outlined"
                            fullWidth
                            validators={['required']}
                            errorMessages={['this field is required']}
                          />
                              )}
                       />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={effectiveStartDate}
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
                                value={effectiveEndDate}
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
