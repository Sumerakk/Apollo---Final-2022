import { authRoles } from '../../auth/authRoles'

export const SET_USER_NAVIGATION = 'SET_USER_NAVIGATION'
export const SET_STUDENT_NAVIGATION = 'SET_STUDENT_NAVIGATION'

const getfilteredNavigations = (navList = [], role) => {
    return navList.reduce((array, nav) => {
        if (nav.auth) {
            if (nav.auth.includes(role)) {
                array.push(nav)
            }
        } else {
            if (nav.children) {
                nav.children = getfilteredNavigations(nav.children, role)
                array.push(nav)
            } else {
                array.push(nav)
            }
        }
        return array
    }, [])
}

export function getNavigationByUser() {
    return (dispatch, getState) => {
        let { user, navigations = [] } = getState()
        let { student, StudentNavigation = [] } = getState()

        let filteredNavigations = getfilteredNavigations(navigations, user.role)
        let stdnavigations = getfilteredNavigations(StudentNavigation, student.role)

        dispatch({
            auth: authRoles.teacher,
            type: SET_USER_NAVIGATION,
            payload: [...filteredNavigations],
            
            auth: authRoles.student,
            type: SET_STUDENT_NAVIGATION,
            payload: [...stdnavigations],
            
        })
    }
}
