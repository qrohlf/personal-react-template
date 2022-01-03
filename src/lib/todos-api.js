// api mock using localStorage

// storage key
const TODOS = 'TODOS'
const defaultTodos = ['Get groceries', 'Water plants', 'Shovel snow']
// seed the "backend" if not exists
if (!localStorage.getItem(TODOS)) {
  localStorage.setItem(TODOS, JSON.stringify(defaultTodos))
}

const readTodos = async () => {
  console.log('GET /api/todos')
  return JSON.parse(localStorage.getItem(TODOS))
}

const insertTodo = async (newTodo) => {
  const oldTodos = JSON.parse(localStorage.getItem(TODOS))
  const newTodos = [...oldTodos, newTodo]
  console.log('POST /api/todos')
  localStorage.setItem(TODOS, JSON.stringify(newTodos))
}

const deleteTodo = async (todo) => {
  const oldTodos = JSON.parse(localStorage.getItem(TODOS))
  const newTodos = oldTodos.filter((t) => t !== todo)
  console.log('DELETE /api/todos/:id')
  localStorage.setItem(TODOS, JSON.stringify(newTodos))
}

export const todosApi = {
  fetchIndex: () => readTodos(),
  create: (newTodo) => insertTodo(newTodo),
  delete: (todo) => deleteTodo(todo),
}
