import User from '../models/user.model'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt'

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

    const token = await createAccessToken(id)

    res.status(201).json({ message: 'User created 🎉', token })
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const singIn = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      where: { email },
      attributes: ['id', 'password']
    })
    if (!user) return res.status(404).json({ message: 'User not found 😕' })

    const token = await createAccessToken(user.id)

    const validPassword = await bcrypt.compare(password, user.password)

    !validPassword
      ? res.status(401).json({ message: 'Invalid password' })
      : res.json({ message: 'User logged in 🎉', token })
  } catch (error) {
    console.error(error)
    res.status(500).json(error.message)
  }
}
