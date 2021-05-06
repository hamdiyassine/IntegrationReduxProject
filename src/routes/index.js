import React from "react"
import { Redirect } from "react-router-dom"


//dashboard
import Dashboard from '../pages/Dashboard/index'





const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  

  

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
]

export { authProtectedRoutes, publicRoutes }
