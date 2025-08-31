import { useForm } from 'react-hook-form'

const SignInPage = () => {
  const { register, handleSubmit, formState: errors } = useForm()
  const onSubmit = handleSubmit(data => console.log(data))
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md grid gap-2"
    >
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
      {errors.email && <span className="text-red-500">Email is required</span>}
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
  )
}

export default SignInPage
