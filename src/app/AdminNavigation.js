export const AdminNavigation = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
    {
        name: 'Plan Semester',
        icon: 'playlist_add_check',
        children: [
            {
                name: 'Add Course',
                iconText: 'SI',
                path: '/material/AddCourseform',
            },
            {
                name: 'Offer Courses',
                iconText: 'SU',
                path: '/material/OfferCourse',
            },
            {
                name: 'Add Teacher',
                iconText: '404',
                path: '/material/AddTeacherForm',
            },
            {
                name: 'Assign Teacher',
                iconText: '404',
                path: '/material/AssignTeacherForm',
            },
        ],
    },
    {
        name: 'Student Management',
        icon: 'people',
        children: [
            {
                name: 'Edit Student Profile',
                iconText: 'SI',
                path: '/material/EditStudentProfileForm',
            },
            {
                name: 'Student Course Section',
                iconText: 'SU',
                path: '/material/EditStudentProfileForm',
            },
            {
                name: 'Reset Student Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
        ],
    },
    {
        name: 'Semester Operations',
        icon: 'event',
        children: [
            {
                name: 'Withdraw Course',
                iconText: 'SI',
                path: '/material/WithdrawCourseTable'
            },
        ],
    },
    
]
