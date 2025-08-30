import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    if (tasks.length === 0)
      return res.status(404).json({ message: 'Tasks not found 😕' })
    res.json(tasks)
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const getTask = async (req, res) => {
  const { id } = req.params
  try {
    const taskFound = await Task.findByPk(id)
    if (!taskFound)
      return res.status(404).json({ message: 'Task not found 😕' })
    res.json(taskFound)
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const createTask = async (req, res) => {
  const { title, description } = req.body
  try {
    await Task.create({ title, description })
    res.json({ message: 'Task created 🎉' })
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    const deletedTask = await Task.destroy({ where: { id } })
    deletedTask === 0
      ? res.status(404).json({ message: 'Task not found 😕' })
      : res.json({ message: 'Task deleted 🎉' })
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}

export const putTask = async (req, res) => {
  const { title, description } = req.body
  const { id } = req.params
  try {
    const updatedTask = await Task.update(
      { title, description },
      { where: { id }, returning: true }
    )

    if (updatedTask[0] === 0)
      return res.status(404).json({ message: 'Task not found 😕' })

    res.json(updatedTask[1][0])
  } catch (error) {
    console.error(error.message)
    res.status(500).json(error.message)
  }
}
