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
import axios from 'axios'
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

/*const response = await axios.get('http://localhost:5000/AddTeacher')

const { departmentID } = JSON.parse(config.data)
const user = response.data.find(departmentID)
console.log(user)*/


/*
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:5000/AddTeacher';
    axios.post(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppStateforPost]);*/

const AddCourseForm = () => {

    const [departments, setDepartments] = useState([]);
    const[departmentsMatch, setDepartmentsMatch] = useState([]);

/*useEffect(() => {
    const loadDepartments = async => {
        //const response = await axios.get('http://localhost:5000/AddTeacher');
        setDepartments(response.data);
    };
    loadDepartments();
  }, []);*/
  console.log(departments)
  
    const department = [departments];
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
        teacherName,
        teacherdesignation,
        teacherImage,
        teacherCNIC,
        teacherDOB,
        teacherGender,
        teacherAddress,
        teacherContactNo,
        teacherEmail,
        teacherDepartment,
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
                            name="teacherName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherName || ''}
                            validators={['required' ]}
                            label="Name"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            type="text"
                            name="teacherdesignation"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherdesignation || ''}
                            validators={['required']}
                            label="Designation"
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            type="text"
                            name="teacherCNIC"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherCNIC || ''}
                            validators={[
                            'required',
                            'minStringLength:13']}
                            label="CNIC"
                            errorMessages={['this field is required']}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={teacherDOB}
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
                            value={teacherGender || ''}
                            name="teacherGender"
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
                            name="teacherAddress"
                            value={teacherAddress || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Contact Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="teacherContactNo"
                            value={teacherContactNo || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="teacherEmail"
                            name="teacherEmail"
                            value={teacherEmail || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                     <Autocomplete
                           options={department}
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
