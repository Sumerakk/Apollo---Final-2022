import Mock from '../mock'
import jwt from 'jsonwebtoken'
import axios from 'axios'
const JWT_SECRET = 'jwt_secret_key'
const JWT_VALIDITY = '7 days'

const userList = [
    {
        id: 1,
        role: 'A',
        //name: 'Jason Alexander',
        loginID: 'arehman',
        password: 'teacher'
      //  email: 'jason@ui-lib.com',
       // avatar: '/assets/images/face-6.jpg',
        //age: 25,
    },
]

// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com

Mock.onPost('http://localhost:5000/Login').reply(async (config) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await axios.get('http://localhost:5000/UserData')

        const { loginID } = JSON.parse(config.data)
        const user = response.data.find((u) => u.loginID === loginID)
        console.log('auth user',user)
        localStorage.setItem('userDetails',JSON.stringify(user))

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
                    //avatar: user.avatar,
                    email: user.loginID,
                   // name: user.name,
                    role: user.role,
                },
            },
        ]
    } catch (err) {
        console.error(err)
        return [500, { message: 'Internal server error I have reached auth LOGIN' }]
    }
})


Mock.onGet('/api/auth/profile').reply((config) => {
    try {
        const { Authorization } = config.headers
        if (!Authorization) {
            return [401, { message: 'Invalid Authorization token' }]
        }

        const accessToken = Authorization.split(' ')[1]
        const { userId } = jwt.verify(accessToken, JWT_SECRET)
        const user = userList.find((u) => u.id === userId)

        if (!user) {
            return [401, { message: 'Invalid authorization token' }]
        }

        return [
            200,
            {
                user: {
                    id: user.id,
                   // avatar: user.avatar,
                  //  email: user.email,
                   // name: user.name,
                    role: user.role,
                },
            },
        ]
    } catch (err) {
        console.error(err)
        return [500, { message: 'Internal server error' }]
    }
})