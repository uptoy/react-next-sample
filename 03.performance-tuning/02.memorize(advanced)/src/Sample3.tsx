import { useState, ChangeEvent, useMemo } from 'react'
export function Sample3() {
  const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`)
  const List = ({ list }: any) => {
    const [filter, setFilter] = useState('')
    const filteredElements = useMemo(
      () => list.filter((item: any) => item.includes(filter)),
      [filter],
    )
    return (
      <div>
        <input
          type="text"
          placeholder="Filter"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
        />
        <ul>
          {filteredElements.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  const Clicker = ({ children }: any) => {
    const [count, setCount] = useState(0)
    return (
      <div data-count={count}>
        {children}
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    )
  }

  return (
    <div>
      <Clicker>
        <List list={list} />
      </Clicker>
    </div>
  )
}
