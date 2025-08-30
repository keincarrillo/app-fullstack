import express from 'express'
import sequelize from './db.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

// Routes
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser()) // El middleware funciona para parsear el header de las cookies y transformalas en un objeto en req.cookies

try {
  await sequelize.sync({ force: false })
} catch (error) {
  console.error(error.message)
}

app.get('/', (req, res) => {
  res.json({ message: 'O_o ok' })
})

// Routes
app.use('/api', authRoutes)
app.use('/api', tasksRoutes)

export default app
