import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const TeacherDashboard = Loadable(lazy(() => import('./TeacherDashboard')))
const StudentDashboard = Loadable(lazy(() => import('./StudentDashboard')))
//const AdminDashboard = Loadable(lazy(() => import('./AdminDashboard')))

const dashboardRoutes = [
    {
        path: '/dashboard/teacher',
        element: <TeacherDashboard />,
        auth: authRoles.teacher,
    },
    {
        path: '/dashboard/student',
        element: <StudentDashboard />,
        auth: authRoles.student,
    },    
   /* {
        path: '/dashboard/admin',
        element: <StudentDashboard />,
        auth: authRoles.admin,
    },*/
]

export default dashboardRoutes
