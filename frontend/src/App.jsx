import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/signin" element={<h1>Signin</h1>} />
        <Route path="/tasks" element={<h1>Tasks</h1>} />
        <Route path="/add-tasks" element={<h1>Add-tasks</h1>} />
        <Route path="/task/:id" element={<h1>Task id</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
