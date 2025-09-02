import axios from 'axios'

const API = `http://localhost:3000/api/auth`

export const signUpRequest = user => axios.post(`${API}/signup`, user)

export const signInRequest = user => axios.post(`${API}/signin`, user)
