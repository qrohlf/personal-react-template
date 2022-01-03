import { useQuery, useMutation, useQueryClient } from 'react-query'
import { queryConstants } from 'lib/query-constants'
import { todosApi } from 'lib/todos-api'

export const useTodos = () => {
  const queryClient = useQueryClient()

  const todos = useQuery(queryConstants.TODOS.INDEX, () =>
    todosApi.fetchIndex(),
  )

  const addTodo = useMutation((newTodo) => todosApi.create(newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryConstants.TODOS.INDEX)
      addTodo.reset()
    },
  })

  const deleteTodo = useMutation((todo) => todosApi.delete(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryConstants.TODOS.INDEX)
      deleteTodo.reset()
    },
  })

  return [todos, addTodo, deleteTodo]
}
