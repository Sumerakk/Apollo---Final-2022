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

const AssessmentType = () => {
    const suggestions = [
        { label: 'Quiz' },
        { label: 'Mid Term' },
        { label: 'Project' },
        { label: 'Presentation' },
        { label: 'Assignment' },
        { label: 'Class Participation' },
        { label: 'Final' }
    ];
    const weightage = [
        { label: '5' },
        { label: '10' },
        { label: '15' },
        { label: '20' },
        { label: '25' },
        { label: '30' },
        { label: '35' },
        { label: '40' },
        { label: '45' },
        { label: '50' },
        { label: '60' },
        { label: '70' },
        { label: '80' },
        { label: '90' },
    ];
    const [ startTime, setStartTime] = React.useState(null)
    const [ endTime , setEndTime] = React.useState(null)
    const [state, setState] = useState({
        date: new Date(),
    })

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
       alert("saved marks")
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
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
                            label="Assessment Type"
                            variant="outlined"
                            fullWidth
                          />
                              )}
                       />
                           <Autocomplete
                           options={weightage}
                           getOptionLabel={(option) => option.label}
                           renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Weightage"
                            variant="outlined"
                            fullWidth
                          />
                              )}
                       />
                                         
                     </Grid>
               </Grid>
                <Button style={{marginLeft: '25%', width:150}} color="primary" variant="contained" type="submit">
                   
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Save
                    </Span>
                </Button>
               </ValidatorForm>
        </div>
    )
}

export default AssessmentType
