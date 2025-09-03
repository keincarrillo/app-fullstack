import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const {
    signin,
    errors: signInErrors,
    isAuthenticated
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

  const onSubmit = handleSubmit(async data => await signin(data))

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {signInErrors.map((error, i) => (
          <div
            className="bg-red-500 p-2 text-white text-center my-2 rounded-md"
            key={i}
          >
            {error.message || error}
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-4 text-white">Sign In</h1>
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 hover:cursor-pointer hover:bg-sky-600"
          >
            Register
          </button>
          <p>
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-sky-500 hover:cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
