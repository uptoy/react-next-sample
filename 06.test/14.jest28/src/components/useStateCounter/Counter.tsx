import { useState } from 'react'
export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div role="contentinfo">Counter is {count}</div>
    </div>
  )
}
