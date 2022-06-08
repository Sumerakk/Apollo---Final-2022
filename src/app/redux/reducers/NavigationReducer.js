import { TeacherNavigation } from 'app/TeacherNavigation'
import { SET_USER_NAVIGATION, SET_STUDENT_NAVIGATION } from '../actions/NavigationAction'

const initialState = [...TeacherNavigation]

const NavigationReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAVIGATION: {
            return [...action.payload]
        }
        case SET_STUDENT_NAVIGATION: {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default NavigationReducer
