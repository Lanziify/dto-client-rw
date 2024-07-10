import { useAuth } from '@/context/authentication'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
  const { user, isUserLoading, userClaims } = useAuth()

  if (isUserLoading && !user) {
    console.log('loading user')
  } else if (!isUserLoading && user && userClaims) {
    // console.log('loading user')
    return <Navigate to='dashboard' replace />
  } else if (!isUserLoading && !user && !userClaims) {
    // return <Outlet />
  }
  // return user ? userClaims?.admin ? <Navigate to='dashboard' replace/> : <></> : <Outlet />
}

export default PublicRoutes
