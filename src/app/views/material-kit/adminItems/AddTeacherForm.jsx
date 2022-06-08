import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,  
    Alert,
    Snackbar
} from '@mui/material'
import axios from 'axios'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect, Fragment} from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import {Autocomplete} from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { index } from 'mathjs'

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

const AddTeacherForm = () => {
    
    const url = "http://localhost:5000/Teacher";
    const [teacherInfo, setTeacherInfo] = useState({
        teacherName:"",
        teacherDesignation:"",
        teacherCNIC:"",
        teacherGender:"",
        teacherAddress:"",
        teacherContactNo:"",
        teacherEmail:"",
        departmentID: "",
        tUsername:""
    }) 
    const [teacherBirthDate, setTeacherBirthDate] = useState({
        teacherDOB: new Date(),
    }) 

    const [teacherEED, setTeacherEED] = useState({
        effectiveDateEnd: new Date(),
    })   
    const [teacherESD, setTeacherEST] = useState({
        effectiveDateStart: new Date(),
    })  

    const handleChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);
        const newdata = { ...teacherInfo }
        newdata[name] = value
        setTeacherInfo(newdata)
    }
    const handleDepartmentChange = (e, v, r) => {
        teacherInfo.departmentID = v.departmentCode;
    }
    let departmentData = JSON.parse(localStorage.getItem('deparmentDetails'))
       
    const [state, setState] = useState({
        date: new Date(),
    })  
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

    function resetFormData()
    {
        setTeacherInfo({})
        setTeacherBirthDate({teacherDOB: new Date()})
        setTeacherEED({effectiveDateEnd: new Date()})
        setTeacherEST({effectiveDateStart: new Date()})
    }
    function handleDateChange(teacherDOB) {
        setTeacherBirthDate(teacherDOB)
    }
 
    function handleESDDateChange(effectiveDateStart) {
        setTeacherEST(effectiveDateStart)
    }    
  
    function handleEEDDateChange(effectiveDateEnd) {
        setTeacherEED(effectiveDateEnd)
    } 
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log(teacherInfo);
            axios.post (url, {
            teacherName: teacherInfo.teacherName,
            teacherDesignation: teacherInfo.teacherDesignation,
            teacherCNIC: teacherInfo.teacherCNIC,
            teacherDOB: teacherBirthDate,
            teacherGender: teacherInfo.teacherGender,
            teacherAddress: teacherInfo.teacherAddress,
            teacherContactNo: teacherInfo.teacherContactNo,
            teacherEmail: teacherInfo.teacherEmail,
            effectiveDateStart: teacherESD,
            effectiveDateEnd: teacherEED,            
            departmentID: (teacherInfo.departmentID == 'CS' ? 1 : (teacherInfo.departmentID == 'BBA' ? 2 : (teacherInfo.departmentID == 'EE' ? 3 : null))),
            tUsername: teacherInfo.tUsername,
            
        })
        .then(res => {
        console.log ("Data resultfrom API call is",res)
        setOpen(true)
        resetFormData()
    }).catch((error) => console.log(error.res));
}
const [open, setOpen] = React.useState(false)
function handleClick() {
   
    setOpen(true)
}
function handleClose(event, reason) {
    if (reason === 'clickaway') {
        return
    }
    setOpen(false)
}

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null} >
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%', mb: 90, ml: 90}}
                    variant="filled"   
                >
                    Course added Successfully!
                </Alert>
            </Snackbar>
               <Grid container justifyContent="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <TextField
                            type="text"
                            name="teacherName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherInfo.teacherName || ''}
                            validators={['required' ]}
                            label="Name"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            type="text"
                            name="tUsername"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherInfo.tUsername || ''}
                            validators={['required' ]}
                            label="Username"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            type="text"
                            name="teacherDesignation"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherInfo.teacherDesignation || ''}
                            validators={['required']}
                            label="Designation"
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            type="text"
                            name="teacherCNIC"
                            id="standard-basic"
                            onChange={handleChange}
                            value={teacherInfo.teacherCNIC || ''}
                            validators={[
                            'required',
                            'minStringLength:13']}
                            label="CNIC"
                            errorMessages={['this field is required']}
                        />
                         <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={teacherBirthDate}
                                onChange={handleDateChange}
                                name="teacherDOB"
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
                            value={teacherInfo.teacherGender || ''}
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
                            value={teacherInfo.teacherAddress || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Contact Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="teacherContactNo"
                            value={teacherInfo.teacherContactNo || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="teacherEmail"
                            name="teacherEmail"
                            value={teacherInfo.teacherEmail || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                   <Autocomplete
                           name="departmentID"
                           options={departmentData}
                           getOptionLabel={(option) => option.departmentCode}
                           isOptionEqualToValue={(option, value) => option.departmentCode === value.departmentCode}
                           onInputChange={(e, v, r) => {
                            console.log(v);
                          }}
                          onChange={handleDepartmentChange}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Department"
                            variant="outlined"
                            fullWidth
                            //validators={['required']}
                           // errorMessages={['this field is required']}
                          />
                              )}
                       />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                
                                value={teacherESD}
                                name="effectiveDateStart"
                                onChange={handleESDDateChange}
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
                                value={teacherEED}
                                name="effectiveDateEnd"
                                onChange={handleEEDDateChange}
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

export default AddTeacherForm
