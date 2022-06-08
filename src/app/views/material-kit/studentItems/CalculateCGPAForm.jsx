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
import React, { useState, useEffect, Fragment } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Autocomplete } from '@mui/material'
import TimePicker from '@mui/lab/TimePicker'
import { Icon, Button, Fab, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { render } from 'react-dom';
import TextField from '@mui/material/TextField';
import * as _ from 'lodash'
import { add } from 'mathjs'

const TextField1 = styled(TextValidator)(() => ({
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

    const [SE, setSE] = useState();
    const [AdvSE, setAdvSE] = useState();
    const [SQA, setSQA] = useState();
    const [SPM, setSPM] = useState();
 

    const [SE_GPA, setSE_GPA] = useState();
    const [AdvSE_GPA, setAdvSE_GPA] = useState();
    const [SQA_GPA, setSQA_GPA] = useState();
    const [SPM_GPA, setSPM_GPA] = useState();
    const [SGPA, setSGPA] = useState();

    const [state, setState] = useState({
        date: new Date(),
    })

    const handleSEMarks = (event) => {
        console.log("SE => ", event.target.value)
        setSE(event.target.value);
    }
    const handleAdvSEMarks = (event) => {
        console.log("Adv SE => ", event.target.value)
        setAdvSE(event.target.value);
    }
    const handleSPMMarks = (event) => {
        console.log("SPM => ", event.target.value)
        setSPM(event.target.value);
    }
    const handleSQAMarks = (event) => {
        console.log("SQA => ", event.target.value)
        setSQA(event.target.value);
    }
    const handleSGPA = (event) => {
        console.log("SGPA => ", event.target.value)
        setSGPA(event.target.value);
    }
    const calculateSGPA = (setSE_GPA,setAdvSE_GPA,setSQA_GPA,setSPM_GPA)=> {
        console.log("SGPA is: => ", JSON.stringify(SE_GPA))
        
      //console.log ('I am from semester table: ', semester)
        localStorage.setItem('course1GPA', JSON.stringify(SE_GPA))
        const c1GPA = JSON.parse(localStorage.getItem('course1GPA'))
        console.log('My GPA for course 1 is',c1GPA)

        localStorage.setItem('course2GPA', JSON.stringify(AdvSE_GPA))
        const c2GPA = JSON.parse(localStorage.getItem('course2GPA'))
        console.log('My GPA for course 1 is',c2GPA)


        localStorage.setItem('course3GPA', JSON.stringify(SQA_GPA))
        const c3GPA = JSON.parse(localStorage.getItem('course3GPA'))
        console.log('My GPA for course 1 is',c3GPA)

        localStorage.setItem('course4GPA', JSON.stringify(SPM_GPA))
        const c4GPA = JSON.parse(localStorage.getItem('course4GPA'))
        console.log('My GPA for course 1 is',c4GPA)

        const creditHours = 3;
        const numOfCourse = 4;
        const totalCreditHours = creditHours * numOfCourse;

        const valSGPA = ((c1GPA * creditHours) + (c2GPA * creditHours) + (c3GPA * creditHours) + (c4GPA * creditHours))/ totalCreditHours;
        return (valSGPA).toFixed(2)
    }
    const calculateGPA = (marks) => {
        console.log("Marks received => ", marks, ((marks - 50) / 12) + 1)
        var valGPA = ((marks - 50) / 12) + 1;
        if((valGPA) >= 4)
        {
            return 4;
        } 
        else if((valGPA).toFixed(2) >= 3.66 && (valGPA).toFixed(2) < 4)
        {
            return 3.67;
        }
        else if((valGPA) >= 3.33 && (valGPA) < 3.67)
        {
            return 3.33;
        }
        else if((valGPA) >= 3 && (valGPA) < 3.33)
        {
            return 3;
        }
        else if((valGPA.toFixed(2)) >= 2.66 && (valGPA).toFixed(2) < 3)
        {
            return 2.67;
        }
        else if((valGPA) >= 2.33 && (valGPA) < 2.67)
        {
            return 2.33;
        }
        else if(valGPA >= 2 && valGPA < 2.33)
        {
            return 2;
        }
        else if((valGPA).toFixed(2) >= 1.67 && (valGPA).toFixed(2) < 2)
        {
            return 1.67;
        }
        else if((valGPA) >= 1.33 && (valGPA) < 1.67)
        {
            return 1.33;
        }
        else if((valGPA) >= 1 && (valGPA) < 1.33)
        {
            return 1;
        }
        else
        {
           return 'FAIL'
        }
    }
    /*const onSubmit = (marks1,marks2,marks3,marks4) => {
        setSGPA(calculateSGPA(marks1,marks2,marks3,marks4));
    }*/
    const onClickSE = (marks) => {
        setSE_GPA(calculateGPA(marks));
    }
    const onClickAdvSE = (marks) => {
        setAdvSE_GPA(calculateGPA(marks));
    }
    const onClickSPM = (marks) => {
        setSPM_GPA(calculateGPA(marks));
    }
    const onClickSQA = (marks) => {
        setSQA_GPA(calculateGPA(marks));
    }
    const onClickCalculateSGPA = (valGPA) => {
        setSGPA(calculateSGPA(valGPA));
    }


    const { marks1, marks2, marks3, marks4 } = state
    const { ClassHours1, ClassHours2, ClassHours3, } = state
    const { CrsName, gpa, } = state

    return (
        <ValidatorForm onSubmit={calculateSGPA} onError={() => null}>

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
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                    Software Engineering
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 160 }}>
                    <TextField
                        type="text"
                        name="marks1"
                        id="standard-basic"
                        onChange={handleSEMarks}
                        value={SE}
                        validators={[
                            'required',
                        ]}
                        label="Marks (Min 50, Max 100)"
                        variant="outlined"
                        errorMessages={['This field is required']}
                    />
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 100 }}>
                    <Button style={{ marginLeft: '20%', width: 140 }} disabled={_.isNil(SE)} onClick={() => { onClickSE(SE) }} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell align="center">
                    {SE_GPA}
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                    Advanced Software Engineering
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="text"
                        name="marks2"
                        id="standard-basic"
                        onChange={handleAdvSEMarks}
                        value={AdvSE}
                        validators={[
                            'required',
                        ]}
                        label="Marks (Min 0, Max 100)"
                        errorMessages={['This field is required']}
                    />
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 80 }}>
                    <Button style={{ marginLeft: '20%', width: 140 }} disabled={_.isNil(AdvSE)} onClick={() => { onClickAdvSE(AdvSE)}} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell align="center">
                {AdvSE_GPA}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 300 }}>
                    Software Project Management
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="text"
                        name="marks3"
                        id="standard-basic"
                        onChange={handleSPMMarks}
                        value={SPM}
                        validators={[
                            'required',
                        ]}
                        label="Marks (Min 0, Max 100)"
                        errorMessages={['This field is required']}
                    />
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 200 }}>
                    <Button style={{ marginLeft: '20%', width: 140 }} disabled={_.isNil(SPM)} onClick={() => { onClickSPM(SPM)}} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell align="center">
                {SPM_GPA}
                </TableCell>
                </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                    Software Quality Assurance
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="text"
                        name="marks4"
                        id="standard-basic"
                        onChange={handleSQAMarks}
                        value={SQA}
                        validators={[
                            'required',
                        ]}
                        label="Marks (Min 0, Max 100)"
                        errorMessages={['This field is required']}
                    />
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 200 }}>
                    <Button style={{ marginLeft: '20%', width: 140 }} disabled={_.isNil(SQA)} onClick={() => { onClickSQA(SQA)}} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell align="center">
                    {SQA_GPA}
                </TableCell>
              
            </TableRow>
            <Box py="10px" />
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                   <h3><b>       Semester GPA is:      </b> {SGPA}</h3>
                    
                </TableCell>
                <TableCell>
                </TableCell>
            </TableRow>
            <Box py="10px" />
            <Button style={{ marginLeft: '4%' , width: 180 }} onClick={() => { onClickCalculateSGPA()}} color="primary" variant="contained" type="submit">
                <Icon>exposure</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Calculate SGPA
                </Span>
            </Button>
        </ValidatorForm>
    )
}

export default AssignTeacherform
