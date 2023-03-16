import { Suspense } from 'react'
import './App.css'
import { TodoList } from './components/organisms/todo/TodoList'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<div>グローバルError発生中</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
