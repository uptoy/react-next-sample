import React from 'react'

export const User = () => {
  return (
    <div>
      {/* <BoobUser age={1} /> */}
      {/* <AdvancedUser age={1} /> */}
      <ProUser age={1} />
    </div>
  )
}
interface IProps {
  age: number
}

// const BoobUser = (props: IProps) => {
//   const { age } = props
//   const [name, setName] = React.useState<string>('')
//   const [dark, setDark] = React.useState(false)
//   const user = { age, name }
//   const buttonStyle = {
//     backgroundColor: dark ? '#000' : 'initial',
//     color: dark ? '#FFF' : 'initial',
//   }
//   React.useEffect(() => {
//     console.log(user)
//   })

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         style={buttonStyle}
//         onClick={() => setDark((currDark) => !currDark)}
//       >
//         toggle theme
//       </button>
//     </div>
//   )
// }

// const AdvancedUser = (props: IProps) => {
//   const { age } = props
//   const [name, setName] = React.useState<string>('')
//   const [dark, setDark] = React.useState(false)
//   const user = { age, name }
//   const buttonStyle = {
//     backgroundColor: dark ? '#000' : 'initial',
//     color: dark ? '#FFF' : 'initial',
//   }
//   React.useEffect(() => {
//     console.log(user)
//   }, [user])

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         style={buttonStyle}
//         onClick={() => setDark((currDark) => !currDark)}
//       >
//         toggle theme
//       </button>
//     </div>
//   )
// }

const ProUser = (props: IProps) => {
  const { age } = props
  const [name, setName] = React.useState<string>('')
  const [dark, setDark] = React.useState(false)
  const user = React.useMemo(() => {
    return { age, name }
  }, [name, age])
  const buttonStyle = {
    backgroundColor: dark ? '#000' : 'initial',
    color: dark ? '#FFF' : 'initial',
  }
  React.useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark((currDark) => !currDark)}
      >
        toggle theme
      </button>
    </div>
  )
}
