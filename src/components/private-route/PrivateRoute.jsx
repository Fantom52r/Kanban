import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { paths } from '../../Routes'
import { useUser } from '../../context/UseUser'

const PrivateRoute = () => {
  const {user} = useUser()
  return (
user? <Outlet/>:<Navigate to ={paths.LOGIN}/>
  )
}

export default PrivateRoute
