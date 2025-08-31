import { createContext, useState } from 'react'
import { signUpRequest } from '../api/auth.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])

  const signup = async user => {
    try {
      const res = await signUpRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  )
}
