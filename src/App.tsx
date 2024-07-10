import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PublicRoutes from './routes/PublicRoutes'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import AdminRoutes from './routes/AdminRoutes'
import { useAuth } from './context/authentication'
import Notifications from './pages/admin/Notifications'
import Users from './pages/admin/Users'
import Requests from './pages/admin/Requests'
import Position from './pages/admin/Position'
import Office from './pages/admin/Office'
import AccountProperties from './pages/admin/AccountProperties'
import Repair from './pages/admin/Repair'
import Assistance from './pages/admin/Assistance'
import History from './pages/admin/History'

function App() {
  const { user, userClaims } = useAuth()
  return (
    <Routes>
      <Route path='/' element={<PublicRoutes />}>
        <Route path='login' element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes user={user} />}>
        <Route element={<AdminRoutes isAdmin={userClaims?.admin} />}>
          <Route path='dashboard' index element={<Dashboard />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='users' element={<Users />} />
          <Route path='requests'>
            <Route index element={<Requests />} />
            <Route path='repair' element={<Repair />} />
            <Route path='assitance' element={<Assistance />} />
            <Route path='history' element={<History />} />
          </Route>
          <Route path='account-properties'>
            <Route index element={<AccountProperties />} />
            <Route path='position' element={<Position />} />
            <Route path='office' element={<Office />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
