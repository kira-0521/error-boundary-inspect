import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../../../../repositories/todo/todoList'

export const useTodoListQuery = () => {
  return useQuery(['todoList'], fetchTodos)
}
