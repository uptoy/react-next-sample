import { useState, ChangeEvent, memo, useMemo } from 'react'
export function Sample2() {
  const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`)
  const List = ({ list }: any) => (
    <ul>
      {list.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('')
  const filteredElements = useMemo(
    () => list.filter((item) => item.includes(filter)),
    [filter],
  )

  return (
    <div>
      <p>{count}</p>
      <List list={filteredElements} />
      <input
        type="text"
        placeholder="Filter"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}
