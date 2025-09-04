import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  if (!isAuthenticated) return <Navigate to="/signin" replace />

  return <Outlet />
}

export default ProtectedRoute
