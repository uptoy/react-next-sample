//Good Code
const person2 = {
  age: 22,
}

interface IPerson {
  age: number
}

function canDrinkBetter(person: IPerson) {
  //null check
  if (person?.age == null) {
    console.log('You are not a person')
    return
  }
  const result = canDrinkResponse(person.age)
  console.log(result)
}

function canDrinkResponse(age: number) {
  if (age < 18) return 'Nope Baby'
  if (age < 21) return 'Not in the US'
  return 'Yes Beer'
}

canDrinkBetter(person2)
