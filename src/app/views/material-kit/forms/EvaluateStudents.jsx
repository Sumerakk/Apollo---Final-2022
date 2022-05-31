import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import { Checkbox } from '@mui/material'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
    Grid,Styled
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
const StyledTable = styled(Table)(({ theme }) => ({
   
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))
const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const studentTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = () => {
  const navigate = useNavigate();
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main
    const handleScroll = (x, y) => {
      // This should print 200 under normal conditions
      console.log(data.length);
    };
    const [data, setData] = React.useState([]);
    return (
     
      <Grid color="primary" container spacing={1} justifyContent="center">
      <Box width="95%" overflow="auto">
      <StyledTable>
          <TableHead>
                        <TableRow>
                            <TableCell colSpan={4}>Roll Number</TableCell>
                            <TableCell colSpan={6}>Name</TableCell>
                            <TableCell colSpan={4}>Assignment</TableCell>
                            <TableCell colSpan={4}>Mid Term</TableCell>
                            <TableCell colSpan={4}>Project</TableCell>
                            <TableCell colSpan={4}>Final</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList.map((student, index) => (
                            <TableRow key={index} hover>
                                <TableCell align="left" colSpan={4} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.RollNumber}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.Name}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.Assignment}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.MidTerm}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.Project}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {student.Final}
                                </TableCell>
                            
                               
                            </TableRow>
                        ))}
                    </TableBody>
            </StyledTable>
        </Box>
        </Grid>
    )
}

const studentList = [
    {
       // imgUrl: '/assets/avatars/faces/4.jpg',
        RollNumber: '20K-1519',
        Name: 'Muzna Akhtar',
        Assignment: '',
        MidTerm: '',
        Project: '',
        Final: '',
      // CNIC: '45305-0620870-4',
       // DOB: '21/01/1997'	,
       // Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
        //Contact: '0304-29-34916'	,
       // Email: 'muzna@gmail.com',
       // Status: '',
       // Semester: '',
       // Program: '',
        Action: '',
    },
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1520',
      Name: 'Samra Hanif',
      Assignment: '',
      MidTerm: '',
      Project: '',
      Final: '',
    },
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1521',
      Name: 'Ahmed Muneeb',
      Assignment: '',
        MidTerm: '',
        Project: '',
        Final: '',
    },
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1524',
      Name: 'Naba Tanvir',
      Assignment: '',
        MidTerm: '',
        Project: '',
        Final: '',
    },
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1525',
      Name: 'Sania Safdar',
      Assignment: '',
        MidTerm: '',
        Project: '',
        Final: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1526',
      Name: 'Hussain Ali',
      Assignment: '',
        MidTerm: '',
        Project: '',
        Final: '',
    },
    
   /* {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },
    
    {
      imgUrl: '/assets/avatars/faces/4.jpg',
      RollNumber: '20K-1523',
      Name: 'Sumera Khan',
      CNIC: '45305-0620870-4',
      DOB: '21/01/1997'	,
      Address: 'Flat C2/08 Rupali Residency Gulshan-E-Iqbal Block 19',
      Contact: '0304-29-34916'	,
      Email: 'sumera4200@gmail.com',
      Status: '',
      Semester: '',
      Program: '',
      Action: '',
    },*/
]

export default TopSellingTable
