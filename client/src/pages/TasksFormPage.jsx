import { useForm } from 'react-hook-form'

const TasksFormPage = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit(data => console.log(data))
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
          autoFocus
        />
        <textarea
          name=""
          id=""
          rows="3"
          placeholder="Description"
          {...register('description')}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TasksFormPage
