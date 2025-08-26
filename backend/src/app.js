import express from 'express'
import sequelize from './db.js'

const app = express()

try {
  await sequelize.sync({ force: false })
} catch (error) {
  console.error(error.message)
}

app.get('/', (req, res) => {
  res.send('O_o ola desde bun')
})

export default app
