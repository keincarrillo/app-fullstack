import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const {
    signup,
    isAuthenticated,
    errors: SignUpErrors
  } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async data => {
    await signup(data)
  })
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {SignUpErrors.map((error, i) => (
        <div className="text-red-500" key={i}>
          {error.message}
        </div>
      ))}
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
        {errors.userName && (
          <span className="text-red-500">Username is required</span>
        )}
        <input
          type="email"
          {...register('email', {
            required: true
          })}
          placeholder="Email"
          className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
        <input
          type="password"
          {...register('password', {
            required: true
          })}
          placeholder="Password"
          className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md"
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}
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
