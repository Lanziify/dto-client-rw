import { UserInfo } from 'firebase/auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRoutesProps = {
  user: UserInfo | null | undefined
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = (props) => {
  return <Outlet />
  // return props.user ? <Outlet /> : <Navigate to='login' />
}

export default ProtectedRoutes
