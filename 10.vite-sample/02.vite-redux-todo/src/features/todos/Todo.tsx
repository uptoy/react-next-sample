import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '../../app/store'
import { getTodosAction } from 'features/todos/todoAsyncActions'

export const Todo = () => {
  const dispatch = useAppDispatch()
  const { todos, loading } = useSelector((state: RootState) => state.todo)
  console.log('todos', todos)
  console.log('loading', loading)
  useEffect(() => {
    dispatch(getTodosAction())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full bg-blue-900"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span>ID:{todo.id}</span>
              <span>TITLE:{todo.title}</span>
              <span>USERID:{todo.userId}</span>
              <span>COMPLETED:{todo.completed}</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
