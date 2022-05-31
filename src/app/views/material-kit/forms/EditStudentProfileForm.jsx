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
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

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

const ProductTable = styled(Table)(() => ({
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
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Select size="small" defaultValue="this_month">
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="last_month">Last Month</MenuItem>
                </Select>
            </CardHeader>
            <Box overflow="auto">
                <ProductTable height={400}
      data={data}
      onScroll={handleScroll}
      onRowClick={data => {
        console.log(data);
      }}>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={4} align="left">
                                <IconButton >
                                <Checkbox value="checkedC" inputProps={{'aria-label': 'uncontrolled-checkbox',}}/>
                                </IconButton>
                            </TableCell>
                            <TableCell colSpan={4} >
                                Profile
                            </TableCell>
                            <TableCell colSpan={4}>
                                Roll Number
                            </TableCell>
                            <TableCell colSpan={6}>
                                Name
                            </TableCell>
                            <TableCell colSpan={6}>
                                Date of Birth
                            </TableCell>
                            <TableCell colSpan={6}>
                                Contact
                            </TableCell>
                            <TableCell colSpan={7}>
                                Email
                            </TableCell>
                            <TableCell colSpan={4}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                            <TableCell align="left" colSpan={4}>
                                <IconButton>
                                <Checkbox value="checkedC" inputProps={{'aria-label': 'uncontrolled-checkbox',}}/>
                                </IconButton>
                            </TableCell>
                                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                                    <Box display="flex" alignItems="center">
                                        <Avatar src={product.imgUrl} />
                                        <Paragraph sx={{ m: 0, ml: 4 }}>
                                            {product.Avatar}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell align="left" colSpan={4} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {product.RollNumber}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {product.Name}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {product.DOB}
                                </TableCell>
                                <TableCell align="left" colSpan={6} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        {product.Contact}
                                </TableCell>
                                <TableCell align="left" colSpan={7} sx={{ px: 0 }}>
                                        {product.Email}
                                </TableCell>
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    <IconButton onClick={()=> navigate('/material/EditStudentForm')}>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

const productList = [
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
]

export default TopSellingTable
