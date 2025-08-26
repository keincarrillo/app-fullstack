import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres'
  }
)

export default sequelize
