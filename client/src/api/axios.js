import axios from 'axios'

const intance = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export default intance
