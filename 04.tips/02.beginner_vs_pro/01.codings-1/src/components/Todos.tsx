import React, { useState } from 'react'

export const Todos = () => {
  const initialTodos: ITodo[] = [
    {
      id: 1,
      complete: false,
      name: 'name1',
    },
    {
      id: 2,
      complete: true,
      name: 'name2',
    },
    {
      id: 3,
      complete: false,
      name: 'name3',
    },
  ]
  return (
    <div>
      {/* <BoobTodos initialTodos={initialTodos} /> */}
      {/* <AdvancedTodos initialTodos={initialTodos} /> */}
      <ProTodos initialTodos={initialTodos} />
    </div>
  )
}
interface ITodo {
  id: number
  complete: boolean
  name: string
}

interface IProps {
  initialTodos: ITodo[]
}

const BoobTodos = (props: IProps) => {
  const { initialTodos } = props
  const [todos, setTodos] = useState<ITodo[]>(initialTodos)
  const [selectedTodo, setSelectedTodo] = useState<ITodo>()

  const handleToggleComplete = (todoId: number) => {
    setTodos((currTodos: ITodo[]) => {
      const todo = currTodos.find((todo) => todo.id === todoId) as ITodo
      todo.complete = !todo.complete
      return currTodos
    })
  }
  const handleSelect = (todoId: number) => {
    setSelectedTodo(todos.find((todo) => todo.id === todoId))
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={handleSelect}
        />
      ))}
      <h3>selected todo</h3>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={handleSelect}
        />
      )}
    </div>
  )
}

interface ITodoProps {
  todo: ITodo
  handleSelect: (todoId: number) => void
  handleToggleComplete: (todoId: number) => void
}

const Todo = (props: ITodoProps) => {
  const toggleComplete = () => {
    handleToggleComplete(todo.id)
  }
  const onSelect = () => {
    handleSelect(todo.id)
  }
  const { todo, handleSelect, handleToggleComplete } = props

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={toggleComplete}
      />
      {todo.name}
      <button onClick={onSelect}>Select</button>
    </div>
  )
}

const AdvancedTodos = (props: IProps) => {
  const { initialTodos } = props
  const [todos, setTodos] = useState<ITodo[]>(initialTodos)
  const [selectedTodo, setSelectedTodo] = useState<ITodo>()

  const handleToggleComplete = (todoId: number) => {
    setTodos((currTodos: ITodo[]) => {
      return currTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    })
  }
  const handleSelect = (todoId: number) => {
    setSelectedTodo(todos.find((todo) => todo.id === todoId))
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={handleSelect}
        />
      ))}
      <h3>selected todo</h3>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={handleSelect}
        />
      )}
    </div>
  )
}

const ProTodos = (props: IProps) => {
  const { initialTodos } = props
  const [todos, setTodos] = useState<ITodo[]>(initialTodos)
  const [selectedTodoId, setSelectedTodoId] = useState<number>()
  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId)

  const handleToggleComplete = (todoId: number) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    })
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={setSelectedTodoId}
        />
      ))}
      <h3>selected todo</h3>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={setSelectedTodoId}
        />
      )}
    </div>
  )
}
