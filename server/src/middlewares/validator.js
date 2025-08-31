export const validateSchema = schema => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    console.error(error)
    if (error.issues) {
      return res.status(400).json(
        error.issues.map(issue => ({
          message: `${issue.message} in ${issue.path.join('.')}`
        }))
      )
    }
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
