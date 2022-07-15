//Bad Code
const person1 = {
  age: 22,
}

interface IPerson {
  age: number
}

function canDrink(person: IPerson) {
  //not null
  if (person?.age != null) {
    if (person.age < 18) {
      console.log('Nope Baby')
    } else if (person.age < 21) {
      console.log('Not in the US')
    } else {
      console.log('Yes Beer')
    }
  }
  console.log('You are not a person')
}

canDrink(person1)
