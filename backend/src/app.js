import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('O_o ola desde bun')
})

export default app
