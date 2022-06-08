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
     
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AddCourseForm = () => {
    const url = "http://localhost:5000/Course";
    const [courseInfo, setCourseInfo] = useState({
        courseID:"",
        courseCode:"",
        courseTitle:"",
        courseCreditHours:"",
        coursePRID:"",
        courseTypeID:"",
        departmentID: ""
    }) 
    const [message, setMessage] = useState('active')
    const [courseEED, setCourseEED] = useState({
        effectiveDateEnd: new Date(),
    })   
    const [courseESD, setCourseEST] = useState({
        effectiveDateStart: new Date(),
    })  

    const handleChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);
        const newdata = { ...courseInfo }
        newdata[name] = value
        setCourseInfo(newdata)
    }
    const handleDepartmentChange = (e, v, r) => {
        courseInfo.departmentID = v.departmentCode;
    }
    const handlePRCourseChange = (e, v, r) => {
        courseInfo.coursePRID = v.courseTitle;
    }
    const handleCourseTypeChange = (e, v, r) => {
        courseInfo.courseTypeID = v.courseTypeShortDesc;
    }
    let departmentData = JSON.parse(localStorage.getItem('deparmentDetails'))
    let preReqData = JSON.parse(localStorage.getItem('courseDetails'))
    let courseTypeData = JSON.parse(localStorage.getItem('courseTypeDetails'))
         
    const [state, setState] = useState({
        date: new Date(),
    })
    const [value, setValue] = React.useState(null)
    const filter = createFilterOptions()


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

    function handleESDDateChange(effectiveDateStart) {
        setCourseEST(effectiveDateStart)
    }    
  
    function handleEEDDateChange(effectiveDateEnd) {
        setCourseEED(effectiveDateEnd)
    } 

    function resetFormData()
    {
        setCourseInfo({})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(courseInfo);
            axios.post (url, {
            courseCode: courseInfo.courseCode,
            courseTitle: courseInfo.courseTitle,
            courseCreditHours: courseInfo.courseCreditHours,
            effectiveDateStart: courseESD,
            effectiveDateEnd: courseEED,
            coursePRID: courseInfo.coursePRID,
            departmentID: (courseInfo.departmentID == 'CS' ? 1 : (courseInfo.departmentID == 'BBA' ? 2 : (courseInfo.departmentID == 'EE' ? 3 : null))),          
            courseTypeID: (courseInfo.courseTypeID == 'Difficiency' ? 1 : (courseInfo.courseTypeID == 'Core' ? 2 : (courseInfo.courseTypeID == 'Elective' ? 3 : null))),
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
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
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
                        <TextField
                            type="text"
                            name="courseCode"
                            id="standard-basic"
                            onChange={handleChange}
                            value={courseInfo.courseCode || ''}
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
                            name="courseTitle"
                            value={courseInfo.courseTitle || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                       <TextField
                            
                            label="Course Credit Hours"
                            onChange={handleChange}
                            type="number"
                            name="courseCreditHours"
                            value={courseInfo.courseCreditHours || ''}
                            validators={[
                                'required',
                            ]}
                            errorMessages={['this field is required']}
                            sx={{ mb: 2, width: '100%', marginBottom: '16px',}}
                        />
                     <Autocomplete
                           name="coursePRID"
                           options={preReqData}
                           getOptionLabel={(option) => option.courseTitle ? option.courseTitle : 0}
                           isOptionEqualToValue={(option, value) => option.courseTitle === value.courseTitle}
                           onInputChange={(e, v, r) => {
                            console.log(v);
                          }}
                          onChange={handlePRCourseChange}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Pre-requisite Course"
                            variant="outlined"
                            fullWidth
                            //validators={['required']}
                           // errorMessages={['this field is required']}
                          />
                              )}
                    />
                   <Autocomplete
                           name="courseTypeID"
                           options={courseTypeData}
                           getOptionLabel={(option) => option.courseTypeShortDesc}
                           isOptionEqualToValue={(option, value) => option.courseTypeShortDesc === value.courseTypeShortDesc}
                           onInputChange={(e, v, r) => {
                            console.log(v);
                          }}
                          onChange={handleCourseTypeChange}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Course Type"
                            variant="outlined"
                            fullWidth
                            //validators={['required']}
                           // errorMessages={['this field is required']}
                          />
                              )}
                    />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                
                                value={courseESD}
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
                                value={courseEED}
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

export default AddCourseForm
