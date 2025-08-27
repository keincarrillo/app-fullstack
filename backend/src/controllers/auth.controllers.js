import User from '../models/user.model'

export const singUp = async (req, res) => {
  const { email, password, userName } = req.body
  try {
    await User.create({ email, password, userName })
    res.status(201).json({ message: 'User created 🎉' })
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const singIn = (req, res) => {
  res.send('Sign in')
}
