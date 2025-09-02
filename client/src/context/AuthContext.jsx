import { createContext, useState, useEffect } from 'react'
import { signUpRequest, signInRequest } from '../api/auth.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  const signup = async user => {
    try {
      const res = await signUpRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      const errorData = error.response.data
      if (Array.isArray(errorData)) {
        setErrors(errorData)
      } else {
        setErrors([errorData.message || errorData])
      }
    }
  }

  const signin = async user => {
    try {
      const res = await signInRequest(user)
      console.log(res)
    } catch (error) {
      const errorData = error.response.data
      if (Array.isArray(errorData)) {
        setErrors(errorData)
      } else {
        setErrors([errorData.message || errorData])
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, errors, signin }}
    >
      {children}
    </AuthContext.Provider>
  )
}
