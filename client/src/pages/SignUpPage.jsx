import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const {
    signup,
    isAuthenticated,
    errors: signUpErrors
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
    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {signUpErrors.map((error, i) => (
          <div
            className="bg-red-500 p-2 text-white text-center my-2 rounded-md"
            key={i}
          >
            {error.message || error}
          </div>
        ))}
        <h1 className="text-2xl font-bold mb-4 text-white">Sign Up</h1>
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            {...register('userName', { required: true })}
            placeholder="Username"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.userName && (
            <p className="text-red-500">Username is required</p>
          )}

          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md my-2 hover:cursor-pointer hover:bg-sky-600"
          >
            Register
          </button>
          <p>
            Already have an account?{' '}
            <Link
              to="/signin"
              className="text-sky-500 hover:cursor-pointer hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
