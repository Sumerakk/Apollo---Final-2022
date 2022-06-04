import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const OfferCourse = Loadable(lazy(() => import("./adminItems/OfferCourseFile")));
const SetMarksDistribution = Loadable(lazy(() => import("./tables/SetMarksDistrubutionFile")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AddCourseForm = Loadable(lazy(() => import("./adminItems/AddCourseFormFile")));
const AddTeacherForm = Loadable(lazy(() => import("./adminItems/AddTeacherFormFile")));
const EditStudentProfileForm = Loadable(lazy(() => import("./adminItems/EditStudentProfileFormFile")));
const EditStudentForm = Loadable(lazy(() => import("./adminItems/EditStudentFormFile")));
const AssignTeacherForm = Loadable(lazy(() => import("./adminItems/AssignTeacherFormFile")));
const WithdrawCourseTable = Loadable(lazy(() => import("./adminItems/WithdrawCourseTableFile")));
const CalculateCGPAForm = Loadable(lazy(() => import("./studentItems/CalculateCGPAFormFile")));
const CourseRegisterationTable = Loadable(lazy(() => import("./studentItems/CourseRegisterationTableFile")));
const ViewAttendance = Loadable(lazy(() => import("./studentItems/ViewAttendanceFile")));
const ViewMarks = Loadable(lazy(() => import("./studentItems/ViewMarksFile")));
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
        path: '/material/EvaluateStudents',
        element: <StudentsList />,
    },
    {
        path: '/material/AssignTeacherForm',
        element: <AssignTeacherForm />,
    },
    {
        path: '/material/OfferCourse',
        element: <OfferCourse />,
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
        path: '/material/AssignTeacherForm',
        element: <AssignTeacherForm />,
    },
    {
        path: '/material/WithdrawCourseTable',
        element: <WithdrawCourseTable />,
    },    
    {
        path: '/material/CourseRegisterationTable',
        element: <CourseRegisterationTable />,
    },
    {
        path: '/material/ViewAttendance',
        element: <ViewAttendance />,
    },
    {
        path: '/material/ViewMarks',
        element: <ViewMarks />,
    },
    {
        path: '/material/CalculateCGPAForm',
        element: <CalculateCGPAForm />,
    },    
]

export default materialRoutes
