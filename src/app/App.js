import { QueryClientProvider } from 'react-query'
import { queryClient } from './queryClient'
import './variables.css'
import './App.css'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World</h1>
    </QueryClientProvider>
  )
}
