import User from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const singUp = async (req, res) => {
  const { email, password, userName } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const { id } = await User.create({
      email,
      password: passwordHash,
      userName
    })

    const token = jwt.sign({ id }, process.env.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24
    })

    res.status(201).json({ message: 'User created 🎉', token })
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const singIn = (req, res) => {
  res.send('Sign in')
}
