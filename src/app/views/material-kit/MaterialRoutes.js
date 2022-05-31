import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const SetMarksDistribution = Loadable(lazy(() => import("./tables/SetMarksDistrubutionFile")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AddCourseForm = Loadable(lazy(() => import("./forms/AddCourseFormFile")));
const AddTeacherForm = Loadable(lazy(() => import("./forms/AddTeacherFormFile")));
const EditStudentProfileForm = Loadable(lazy(() => import("./forms/EditStudentProfileFormFile")));
const EditStudentForm = Loadable(lazy(() => import("./forms/EditStudentFormFile")));
const AssignTeacherForm = Loadable(lazy(() => import("./forms/AssignTeacherFormFile")));
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));
const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
const AppRadio = Loadable(lazy(() => import("./radio/AppRadio")));
const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));
const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
const AppExpansionPanel = Loadable(lazy(() => import("./expansion-panel/AppExpansionPanel")));
const ManageEvaluation = Loadable(lazy(() => import("./tables/ManageEvaluationFile")));
const StudentsList = Loadable(lazy(() => import("./forms/EvaluateStudents")));

const materialRoutes = [
    {
        path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/material/SetMarksDistribution',
        element: <SetMarksDistribution />,
    },
    {
        path: '/material/manageEvaluation',
        element: <ManageEvaluation />,
    },
    {
        path: '/material/form',
        element: <AppForm />,
    },
    {
        path: '/material/AddCourseForm',
        element: <AddCourseForm />,
    },
    {
        path: '/material/AddTeacherForm',
        element: <AddTeacherForm />,
    },
    {
        path: '/material/EditStudentProfileForm',
        element: <EditStudentProfileForm />,
    },
    {
        path: '/material/EditStudentForm',
        element: <EditStudentForm />,
    },
    {
        path: '/material/EvaluateStudents',
        element: <StudentsList />,
    },
    {
        path: '/material/AssignTeacherForm',
        element: <AssignTeacherForm />,
    },
    {
        path: '/material/buttons',
        element: <AppButton />,
    },
    {
        path: '/material/icons',
        element: <AppIcon />,
    },
    {
        path: '/material/progress',
        element: <AppProgress />,
    },
    {
        path: '/material/menu',
        element: <AppMenu />,
    },
    {
        path: '/material/checkbox',
        element: <AppCheckbox />,
    },
    {
        path: '/material/switch',
        element: <AppSwitch />,
    },
    {
        path: '/material/radio',
        element: <AppRadio />,
    },
    {
        path: '/material/slider',
        element: <AppSlider />,
    },
    {
        path: '/material/autocomplete',
        element: <AppAutoComplete />,
    },
    {
        path: '/material/expansion-panel',
        element: <AppExpansionPanel />,
    },
    {
        path: '/material/dialog',
        element: <AppDialog />,
    },
    {
        path: '/material/snackbar',
        element: <AppSnackbar />,
    },
]

export default materialRoutes
