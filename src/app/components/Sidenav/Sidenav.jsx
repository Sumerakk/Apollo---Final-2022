import React, { Fragment } from 'react'
import Scrollbar from 'react-perfect-scrollbar'
import { TeacherNavigation } from 'app/TeacherNavigation'
import { StudentNavigation } from '../../../app/StudentNavigation'
import {AdminNavigation} from '../../../app/AdminNavigation'
import { MatxVerticalNav } from 'app/components'
import useSettings from 'app/hooks/useSettings'
import { styled } from '@mui/system'
import { authRoles } from '../../auth/authRoles'
const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
}))

const SideNavMobile = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
}))

const Sidenav = ({ children }) => {
    
    const { settings, updateSettings } = useSettings()
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    console.log('role in side nav', userDetails?.roleID)
   

    const updateSidebarMode = (sidebarSettings) => {
        let activeLayoutSettingsName = settings.activeLayout + 'Settings'
        let activeLayoutSettings = settings[activeLayoutSettingsName]

        updateSettings({
            ...settings,
            [activeLayoutSettingsName]: {
                ...activeLayoutSettings,
                leftSidebar: {
                    ...activeLayoutSettings.leftSidebar,
                    ...sidebarSettings,
                },
            },
        })
    }

    return (
        <Fragment>
                 <StyledScrollBar options={{ suppressScrollX: true }}>
                {children}
                <MatxVerticalNav 
                items={
                    userDetails?.roleID == 2 ? TeacherNavigation : (userDetails?.roleID == 3 ? StudentNavigation : (userDetails?.roleID == 1 ? AdminNavigation : null))}
                />
                </StyledScrollBar>

            <SideNavMobile
                onClick={() => updateSidebarMode({ mode: 'close' })}
            />
        </Fragment>
             
         )
}

export default Sidenav
