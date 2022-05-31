export const authRoles = {
    sa: ['1'], // Only Super Admin has access
    admin: ['2'], // Only SA & Admin has access
    teacher: ['3'], // Only SA & Admin & Editor has access
    student: ['4'], // Everyone has access
}

// Check out app/views/dashboard/DashboardRoutes.js
// Only SA & Admin has dashboard access

// const dashboardRoutes = [
//   {
//     path: "/dashboard/analytics",
//     component: Analytics,
//     auth: authRoles.admin <===============
//   }
// ];

// Check navigaitons.js

// {
//   name: "Dashboard",
//   path: "/dashboard/analytics",
//   icon: "dashboard",
//   auth: authRoles.admin <=================
// }
