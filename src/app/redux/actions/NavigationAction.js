import { authRoles } from '../../auth/authRoles'

export const SET_USER_NAVIGATION = 'SET_USER_NAVIGATION'
export const SET_STUDENT_NAVIGATION = 'SET_STUDENT_NAVIGATION'

const getfilteredNavigations = (navList = [], authRoles) => {
    console.log("I'm in Navigation Action File" + navList)
    return navList.reduce((array, nav) => {
        if (nav.auth) {
            if (nav.auth.includes(authRoles)) {
                array.push(nav)
                }
        } else {
            if (nav.children) {
                nav.children = getfilteredNavigations(nav.children, authRoles)
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

        let filteredNavigations = getfilteredNavigations(navigations, user.authRoles)
        let stdnavigations = getfilteredNavigations(StudentNavigation, student.authRoles)

        console.log("I'm in Navigation Action File" + navigations)
    
        dispatch({
            auth: authRoles.teacher,
            type: SET_USER_NAVIGATION,
            payload: [...filteredNavigations],

            auth: authRoles.student,
            type: SET_STUDENT_NAVIGATION,
            payload: [...stdnavigations],
            
        })
        console.log(dispatch)
    }
}
