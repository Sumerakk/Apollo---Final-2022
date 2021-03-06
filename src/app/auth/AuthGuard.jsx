import useAuth from 'app/hooks/useAuth'
import { flat } from 'app/utils/utils'
import React, { useState, useEffect, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AppContext from '../contexts/AppContext'
import { AllPages } from '../routes/routes'
import NavigationAction from '../../app/redux/actions/NavigationAction'

const getUserRoleAuthStatus = (pathname, user, routes) => {
    if (!user) {
        return false
    }
    const matched = routes.find((r) => r.path === pathname)

    const authenticated =
        matched && matched.auth && matched.auth.length
            ? matched.auth.includes(user)
            : true
    console.log(matched, user)
    return authenticated
}

const AuthGuard = ({ children }) => {
    const { isAuthenticated, user } = useAuth()

    // return <>{isAuthenticated ? children : <Navigate to="/session/signin" />}</>

    console.log("I am here --- 01: " + isAuthenticated)

    const [previouseRoute, setPreviousRoute] = useState(null)
    console.log("I am here --- 02: " + user)
    const { pathname } = useLocation()
    console.log("I am here --- 03" + pathname)




    //const [previouseRoute, setPreviousRoute] = useState(null)
    //const { pathname } = useLocation()
    const routes = flat(AllPages())

    //console.log(user)
    console.log(user)

    const isUserRoleAuthenticated = getUserRoleAuthStatus(
        pathname,
        user,
        routes
    )
    let authenticated = (user && isAuthenticated) || isUserRoleAuthenticated
   // console.log(isUserRoleAuthenticated)

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE

    // let authenticated = isAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (authenticated) return <>{children}</>
    else {
        return (
            
            <Navigate
                to="/session/signin"
                state={{ redirectUrl: previouseRoute }}
            />
            // <Redirect
            //     to={{
            //         pathname: '/session/signin',
            //         state: { redirectUrl: previouseRoute },
            //     }}
            // />
        )
        
    }
}

export default AuthGuard