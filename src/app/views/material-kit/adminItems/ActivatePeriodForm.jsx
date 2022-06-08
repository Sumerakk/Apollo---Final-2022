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
import { styled } from '@mui/system'
import { DatePicker } from '@mui/lab'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect, Fragment} from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
//import {Autocomplete} from '@mui/material'
import TimePicker from '@mui/lab/TimePicker';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
     
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

const ActivePeriod = () => {
    const [ startTime, setStartTime] = React.useState(null)
    const [ endTime , setEndTime] = React.useState(null)
    const [state, setState] = useState({
        date: new Date(),
    })
    const handleStartDateChange = (startDate) => {
        setState({ ...state, startDate })
    }
    const handleEndDateChange = (endDate) => {
        setState({ ...state, endDate })
    }
    const [message, setMessage] = useState('active')
    const handleSubmit = (event) => {
            setMessage(message);
      // alert('Period is active')
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
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
    const { ClassHours, startDate, endDate } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleClick} onError={() => null} >
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%', mb: 90, ml: 90}}
                    variant="filled"   
                >
                    Registration Period has been actived.
                </Alert>
            </Snackbar>
                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                 <DatePicker 
                    value={startDate}
                    onChange={handleStartDateChange}
                    renderInput={(props) => (
                    <TextField
                        {...props}
                        // variant="Outlined"
                        id="mui-pickers-date"
                        label="Start Date"
                        sx={{ mb: 2, width: '100%', }}
                        />
                        )}
                    /> 
                     </LocalizationProvider>
                 </TableCell>

                 <TableCell>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>                            
                 <DatePicker
                    value={endDate}
                    onChange={handleEndDateChange}
                    renderInput={(props) => (
                    <TextField
                        {...props}
                        // variant="Outlined"
                        id="mui-pickers-date"
                        label="End Date"
                        sx={{ mb: 2, width: '100%' }}
                        />
                        )}
                    /> 
                      </LocalizationProvider>
                 </TableCell>
               
        <Button style={{margin: 'center', width:150, marginTop: '1%'}} color="primary" variant="contained" type="submit">
                    <Span sx={{ pl: 1, textTransform: 'capitalize'}}>
                        Activate
                    </Span>
                </Button>
               </ValidatorForm>
        </div>
    )
}

export default ActivePeriod
//adminFeature