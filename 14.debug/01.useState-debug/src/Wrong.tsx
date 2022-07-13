import React, { useState } from 'react'

interface IUser {
  id: number
  name: string
  age: number
}

const Wrong = () => {
  const initialData = {
    id: 0,
    name: '',
  }
  const [users, setUsers] = useState<IUser[]>([
    { id: 1, name: 'Kyle', age: 1 },
    { id: 2, name: 'John', age: 2 },
  ])
  const [selectedUser, setSelectedUser] = useState<IUser>()

  function incrementAge(id: number) {
    setUsers((currUsers: any) => {
      return currUsers.map((user: any) => {
        if (user.id === id) {
          return { ...users, age: user.age + 1 }
        } else {
          return user
        }
      })
    })
  }

  function selectUser(id: number) {
    const user = users.find((user: any) => user.id === id)
    setSelectedUser(user)
  }

  return (
    <>
      <div>
        {selectedUser == null
          ? 'no'
          : `${selectedUser.name} is ${selectedUser.age}`}
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} is {user.age} years old
            <button onClick={() => incrementAge(user.id)}>inc</button>
            <button onClick={() => selectUser(user.id)}>select</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wrong

// if (user && user.name) {
//   user.name = name
// }
// user && user.name && (user.name = name)
