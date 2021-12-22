import { useState } from 'react'

const defaultTodos = ['Make breakfast', 'Do laundry', 'Pack for christmas']

export const useTodos = () => {
  const [todos, setTodos] = useState(defaultTodos)

  const addTodo = (newTodo) => setTodos((todos) => [...todos, newTodo])

  return { todos, addTodo }
}
