import './reset.css'
import './variables.css'
import './App.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'
import { TodoList } from 'features/TodoList'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  )
}
