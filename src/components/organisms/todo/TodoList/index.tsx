import { FC, Suspense } from 'react'
import { useTodoListQuery } from '../hooks/useTodoListQuery'
import { ErrorBoundary } from 'react-error-boundary'

const TodoListNoErrorBoundary = () => {
  const { data } = useTodoListQuery()
  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export const TodoList = () => {
  return (
    <ErrorBoundary fallback={<div>Error発生中</div>}>
      <TodoListNoErrorBoundary />
    </ErrorBoundary>
  )
}