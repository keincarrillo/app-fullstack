import axios from './axios.js'

export const signUpRequest = user => axios.post(`/signup`, user)

export const signInRequest = user => axios.post(`/signin`, user)
