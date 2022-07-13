import React from 'react'

export const Counter = () => {
  return (
    <div>
      {' '}
      {/* <BoobCounter /> */}
      {/* <AdvancedCounter /> */}
      <ProCounter initialState={1} />
    </div>
  )
}

// const BoobCounter = (props: IProps) => {
// const initialState = 0
//   let [count, setCount] = React.useState(initialState)
//   const incrementCount = () => {
//     count = count + 1
//     console.log(count)
//   }
//   const decrementCount = () => {
//     count = count - 1
//     console.log(count)
//   }

//   return (
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <p>{count}</p>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   )
// }

// const AdvancedCounter = (props: IProps) => {
//   const initialState = 0
//   let [count, setCount] = React.useState(initialState)
//   const incrementCount = () => {
//     setCount(count + 1)
//     console.log(count)
//   }
//   const decrementCount = () => {
//     setCount(count - 1)
//     console.log(count)
//   }

//   return (
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <p>{count}</p>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   )
// }

interface IProps {
  initialState: number
}

const ProCounter = (props: IProps) => {
  // const initialState = 0
  const { initialState } = props
  let [count, setCount] = React.useState(initialState)
  const incrementCount = () => {
    setCount((currCount) => currCount + 1)
    console.log(count)
  }
  const decrementCount = () => {
    setCount((currCount) => currCount - 1)
    console.log(count)
  }
  React.useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}
