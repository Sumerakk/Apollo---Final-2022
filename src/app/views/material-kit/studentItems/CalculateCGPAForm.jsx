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

    const [SE, setSE] = useState(0);
    const [AdvSE, setAdvSE] = useState(0);
    const [SQA, setSQA] = useState(0);
    const [SPM, setSPM] = useState(0);

    const [SE_GPA, setSE_GPA] = useState(0);
    const [AdvSE_GPA, setAdvSE_GPA] = useState(0);
    const [SQA_GPA, setSQA_GPA] = useState(0);
    const [SPM_GPA, setSPM_GPA] = useState(0);


    const [state, setState] = useState({
        date: new Date(),
    })

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }
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

    const calculateGPA = (marks) => {
        console.log("Marks received => ", marks, ((marks - 50) / 12) + 1)
        var valGPA = ((marks - 50) / 12) + 1;
        if (valGPA >= 4) {
            return 4;
        } else {
            console.log("GPA => ", valGPA)
            return valGPA;
        }
    }

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

    const { marks1, marks2, marks3, marks4 } = state
    const { ClassHours1, ClassHours2, ClassHours3, } = state
    const { CrsName, gpa, } = state

    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>

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
                        type="number"
                        name="marks1"
                        id="standard-basic"
                        onChange={handleSEMarks}
                        value={SE}
                        validators={[
                            'required',
                        ]}
                        label="Marks (Min 0, Max 100)"
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
                <TableCell style={{ marginLeft: '5%', width: 130 }}>
                    {SE_GPA}
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                    Advanced Software Engineering
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="number"
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
                    <Button style={{ marginLeft: '20%', width: 140 }} onClick={() => { }} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 130 }}>
                    {/* {AdvSE_GPA > 0 ? AdvSE_GPA : ""} */}
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 300 }}>
                    Software Project Management
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="number"
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
                    <Button style={{ marginLeft: '20%', width: 140 }} onClick={() => { }} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 130 }}>
                    {/* {SPM_GPA > 0 ? SPM_GPA : ""} */}
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ marginLeft: '5%', width: 250 }}>
                    Software Quality Assurance
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 150 }}>
                    <TextField
                        type="number"
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
                    <Button style={{ marginLeft: '20%', width: 140 }} onClick={() => { }} color="primary" variant="contained" type="submit">
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Calculate
                        </Span>
                    </Button>
                </TableCell>
                <TableCell style={{ marginLeft: '5%', width: 130 }}>
                    {/* {SQA_GPA > 0 ? SQA_GPA : ""} */}
                </TableCell>

            </TableRow>
            <Box py="10px" />
            <Button style={{ marginLeft: '1%', width: 140 }} color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Submit
                </Span>
            </Button>
        </ValidatorForm>
    )
}

export default AssignTeacherform
