import Mock from '../mock'
import jwt from 'jsonwebtoken'
import axios from 'axios'
const JWT_SECRET = 'jwt_secret_key'
const JWT_VALIDITY = '7 days'



Mock.onPost('http://localhost:5000/Login').reply(async (config) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await axios.get('http://localhost:5000/userData')

        const { loginID } = JSON.parse(config.data)
        const { password } = JSON.parse(config.data)
        const user = response.data.find((u) => u.loginID === loginID && u.password === password )
        console.log('auth user',user)
        localStorage.setItem('userDetails',JSON.stringify(user))
        
        const teacherResponse =  await axios.get('http://localhost:5000/Teacher')
        const { tUsername } = JSON.parse(config.data)
        const teacher = teacherResponse.data.find((s) => s.tUsername === user.loginID)
        console.log ('I am from teacher table: ', teacher)
        localStorage.setItem('teacherDetails', JSON.stringify(teacher))

        const avatar = '/assets/images/sukhan.jpg'

        if( !teacher && user.roleID ==3) {
        //validating if the student logging in is a registred user
        const stdResponse =  await axios.get('http://localhost:5000/Student')
        const { username } = JSON.parse(config.data)
        const student = stdResponse.data.find((s) => s.username === loginID)
        console.log ('I am from student table: ', student)
        localStorage.setItem('stdDetails', JSON.stringify(student))

        const deptResponse = await axios.get('http://localhost:5000/Department')
        const { deptartmentID } = JSON.parse(config.data)
        const department = deptResponse.data.find((d) => d.deptartmentID === user.departmentID)
        console.log ('I am from department table: ', department)
        localStorage.setItem('deptDetails', JSON.stringify(department))

        const programResponse = await axios.get('http://localhost:5000/Program')
        const { programID } = JSON.parse(config.data)
        const program = programResponse.data.find((p) => p.programID === student.programID)
        console.log ('I am from program table: ', program)
        localStorage.setItem('programDetails', JSON.stringify(program))

        const campusResponse = await axios.get('http://localhost:5000/Campus')
        const { campusID } = JSON.parse(config.data)
        const campus = campusResponse.data.find((c) => c.campusID === user.campusID)
        console.log ('I am from campus table: ', campus)
        localStorage.setItem('campusDetails', JSON.stringify(campus))

        const semesterResponse = await axios.get('http://localhost:5000/Semester')
        const { semesterID } = JSON.parse(config.data)
        const semester = semesterResponse.data.find((s) => s.semesterID === student.semesterID)
        console.log ('I am from semester table: ', semester)
        localStorage.setItem('semesterDetails', JSON.stringify(semester))
        }
        else{
        const departmentResponse = await axios.get('http://localhost:5000/Department');
        const dept = departmentResponse.data;
        console.log ('My departments are: ', dept)
        localStorage.setItem('deparmentDetails', JSON.stringify(dept))

        const courseResponse = await axios.get('http://localhost:5000/Course');
        const course = courseResponse.data;
        console.log ('My courses are: ', course)
        localStorage.setItem('courseDetails', JSON.stringify(course))

        const courseTypeResponse = await axios.get('http://localhost:5000/CourseType');
        const courseType = courseTypeResponse.data;
        console.log ('My courses are: ', courseType)
        localStorage.setItem('courseTypeDetails', JSON.stringify(courseType))
        }
        

        if (!user) {
            return [400, { message: 'Invalid user or password' }]
        }
        const accessToken = jwt.sign({ userId: user.loginID }, JWT_SECRET, {
            expiresIn: JWT_VALIDITY,
        })

        return [
            200,
            {
                accessToken,
                user: {
                    id: user.loginID,
                    avatar: user.avatar,
                    email: user.loginID,
                   // name: user.name,
                    role: user.role,
                },
            },
        ]
    } catch (err) {
        console.error(err)
        return [500, { message: 'Incorrect User ID Or Password' }]
    }
})