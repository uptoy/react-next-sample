///////////////////////////////////////
const title = data && data[0] ? data[0].title : “”


null check undefined
//! sample
// const name: string | undefined = 'name'
// name === undefined && <div>aaaa</div>
// return <div>{name}</div>
//! sample
// const name: string | undefined = 'name'
// return <div>{name && <div>name</div>}</div>
//! sample
const name: string | undefined = ''
return <>{name ? 'name' : 'undefined'}</>

///////////////////////////////////////

import { useState } from 'react'

const foo = { name: 'foo', age: 10, completed: false }
const bar = { name: 'bar', age: 20, completed: true }
const baz = { name: 'baz', age: 30, completed: false }

function App() {
//! Bad Code
// console.log(foo)
// console.log(bar)
// console.log(baz)

//! Good Code
// console.log({ foo, bar, baz })

//! Good Code
console.table([foo, bar, baz])

//! Good Code
console.time('looper')
let i = 0
while (i < 10000) {
i++
}
console.time('looper')
//! Good Code
const deleteMe = () => console.trace('bye bye database')
deleteMe()
deleteMe()

///////////////////////////////////////
//! Bad Code
const pikachu = { name: 'pika' }
const stats = { hp: 30, attack: 60, defense: 45 }

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defence'] = stats.defence

//OR
const sample = Object.assign(pikachu, stats)
const sample1 = Object.assign(pikachu, { hp: 30 })

//! Good Code

const sample2 = { ...pikachu, ...stats }
const sample3 = { ...pikachu, hp: 45 }

//! Bad Code
let pokemon = ['pokemon1', 'pokemon2', 'pokemon3']
pokemon.push('pokemon4')
pokemon.push('pokemon5')
pokemon.push('pokemon6')
//! Good Code
const pokemon1 = ['pokemon1', 'pokemon2', 'pokemon3']
const pokemon2 = [...pokemon1, 'pokemon1', 'pokemon2', 'pokemon3']

//! Bad Code
const orders = [1, 2, 3, 4]
let total = 0
const withTax = []
const highValue = []
for (i = 0; i < orders.length; i++) {
//reduce
total += orders[i]
//map
withTax.push(orders[i])
//filter
if (orders[i] > 100) {
highValue.push(orders[i])
}
}
//! Good Code
//reduce
const total1 = orders.reduce((acc, cur) => acc + cur)
//map
const withTax1 = orders.reduce((v) => v \* 1.1)
//filter
const highValue1 = orders.filter((v) => v > 100)

//////////////////////////////////////////////
const random = () => {
return Promise.resolve(Math.random())
}
//! Bad Code
const sumRandomAcyncNums = () => {
let first
let second
let third
return random()
.then((v) => {
first = v
return random()
})
.then((v) => {
second = v
return random()
})
.then((v) => {
third = v
return first + second + third
})
}

//! Good Code
const sumRandomAcyncNums1 = async () => {
const first = await random()
const second = await random()
const third = await random()
return first + second + third
}

return <div>app</div>
}

export default App

// // if (user && user.name) {
// // user.name = name
// // }
// user && user.name && (user.name = name)
const title = data && data[0] ? data[0].title : “”
