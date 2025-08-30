import jwt from 'jsonwebtoken'

export const authRequired = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'No token, Unathorized' })

  try {
    const id = await jwt.verify(token, process.env.PRIVATE_KEY)
    req.userId = id
  } catch (error) {
    console.error(error)
    res.status(500).json(error.message)
  }
  next()
}
