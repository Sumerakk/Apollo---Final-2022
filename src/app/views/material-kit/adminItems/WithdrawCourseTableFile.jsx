import {React , useState } from 'react'
import {StyleSheet, Text} from 'react-native'
import WithdrawCourseTable from './WithdrawCourseTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled , useTheme} from '@mui/system'
import { Icon, Button, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { topBarHeight } from 'app/utils/constant'


const countries = [
    {
        id: "20K-1520",
        name: "Muzna Akhtar"
    },
    {
        id: "20K-1521",
        name: "Samra Hanif"
    },
    {
        id: "20K-1522",
        name: "Wajeeha Memon"
    },
    {
        id: "20K-1523",
        name: "Sumera Khan"
    },
    {
        id: "20K-1524",
        name: "Naba Tanvir"
    },
    {
        id: "20K-1525",
        name: "Sania Safdar"
    },
    {
        id: "20K-1526",
        name: "Hisham Ahmed"
    },
    {
        id: "20K-1527",
        name: "Asad Abdullah"
    },
    {
        id: "20K-1528",
        name: "Hussain Ali"
    },
    {
        id: "20K-1530",
        name: "Ahmed Muneeb"
    },
    {
        id: "20K-1531",
        name: "Salman Khan"
    },
    {
        id: "20K-1520",
        name: "Babar Azam"
    }
]
    const Container = styled('div')(({ theme }) => ({
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
}))

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
const CourseRegisterationTableFile = () => {

    const [searchInput, setSearchInput] = useState("");
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.match(searchInput);
      });
      }
    return (
               <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Withdraw Course' },
                    ]}
                />
           </div>
           <Box py="10px" />

            <SimpleCard title="Withdraw Course">
<div>

           <Text><Text style={{paddingLeft: '4px', fontWeight: "bold"}}> Semester:</Text><Text>  Spring-2022</Text></Text>
           <Text><Text style={{paddingLeft: '20px', fontWeight: "bold"}}> Program:</Text><Text>  BS-CS</Text></Text>        
           <Text><Text style={{paddingLeft: '445px', fontWeight: "bold"}}>Search Student Id:&nbsp;&nbsp;&nbsp;</Text></Text>
            
           <input
                style={{fontWeight: "bold", width: "300px"}}
                type="search"
                placeholder="Search here..."
                onChange={handleChange}
                
                value={searchInput} />
                 </div>
                    <Box py="20px" />
                <WithdrawCourseTable />
            </SimpleCard>

        </Container>
    )
}

export default CourseRegisterationTableFile
