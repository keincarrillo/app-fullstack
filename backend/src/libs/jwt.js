import jwt from 'jsonwebtoken'

export const createAccessToken = payload => {
  return new Promise((res, rej) => {
    jwt.sign(payload, process.env.PRIVATE_KEY, (err, token) => {
      if (err) rej(err)
      res(token)
    })
  })
}
