import express from 'express'
import sequelize from './db.js'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes.js'

const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

try {
  await sequelize.sync({ force: false })
} catch (error) {
  console.error(error.message)
}

app.get('/', (req, res) => {
  res.json({ message: 'O_o ok' })
})

app.use(authRoutes)

export default app
