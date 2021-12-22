import React, { useState } from 'react'
import styles from './TodoList.module.css'
import { useTodos } from 'hooks/useTodos'

export const TodoList = ({ children }) => {
  const { todos, addTodo } = useTodos()
  const [newTodo, setNewTodo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <div className={styles.TodoList}>
      <h1>To do</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
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
