import { createContext, useState, useEffect } from 'react'
import { signUpRequest, signInRequest } from '../api/auth.js'

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

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer) // limpiar el timer cuando el componente deje de renderizarse(esto funciona para evitar memory leaks y para reiniciar el timer cada vez que se renderiza el componente)
    }
  }, [errors])

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, errors, signin }}
    >
      {children}
    </AuthContext.Provider>
  )
}
