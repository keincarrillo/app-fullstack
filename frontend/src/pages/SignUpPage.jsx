import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const { signup, isAuthenticated } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async data => {
    await signup(data)
  })
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form
        action=""
        onSubmit={onSubmit}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md grid gap-2"
      >
        <input
          type="text"
          {...register('userName', {
            required: true
          })}
          placeholder="Username"
          className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md"
        />
        <input
          type="email"
          {...register('email', {
            required: true
          })}
          placeholder="Email"
          className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md"
        />
        <input
          type="password"
          {...register('password', {
            required: true
          })}
          placeholder="Password"
          className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="rounded-md hover:cursor-pointer hover:bg-zinc-500 max-w-md mx-auto px-4"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default SignUpPage
