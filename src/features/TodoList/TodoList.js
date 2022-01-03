import React, { useState } from 'react'
import styles from './TodoList.module.css'
import { useTodos } from 'hooks/use-todos'

export const TodoList = ({ children }) => {
  const [todos, addTodo, deleteTodo] = useTodos()
  const [newTodo, setNewTodo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo.mutate(newTodo)
    setNewTodo('')
  }

  if (todos.isLoading) {
    return 'Loading...'
  }

  if (todos.isError) {
    return `Error: ${todos.error.message}`
  }

  return (
    <div className={styles.TodoList}>
      <h1>Todos</h1>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo}>
            {todo}{' '}
            <span
              onClick={() => deleteTodo.mutate(todo)}
              style={{ cursor: 'default' }}
            >
              🗑
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </div>
  )
}
