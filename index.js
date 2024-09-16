// const shoppingList = ["apple", "tomato", "cherries"];
// console.log("shoppingList: ", shoppingList);
// console.log(shoppingList[0]);
// console.log(shoppingList.length);

// const diverseArray = ["Max", 22, 25, true, false, undefined];
// diverseArray[10] = "Elvis";
// console.log("diverseArray: ", diverseArray);
// console.log(diverseArray.length);

// const complexArray = [1, 2, ["Hello", "Sharks", [1, 2, 3]], 25];
// console.log(complexArray[2][2][0]);

// shoppingList.push("milk");
// console.log("shoppingList: ", shoppingList);
// shoppingList.shift();
// console.log("shoppingList: ", shoppingList);

const person = {
  name: "Max Blub",
  age: 21,
  isStudent: false,
  address: {
    street: "Berliner Str.",
    number: 42,
    city: "Leipzig",
    zipCode: "12345",
  },
};
const person2 = {
  name: "Tim Taylor",
  age: 19,
  isStudent: true,
  address: {
    street: "Berliner Str.",
    number: 44,
    city: "Leipzig",
    zipCode: "12345",
  },
};
console.log(person.isStudent);

// if (person.isStudent){....}
console.log(person.address.city);

person.name = "Max Bla";
console.log(person.name);

person.score = 1500;
console.log(person);

delete person.age;
console.log(person);

person.shoppingList = ["apple", "tomato"];
console.log(person);

const employees = [person, person2];
console.log(employees);

const name = "Roland";
const age = 22;

const newPerson = person;
newPerson.age = 1000;
console.log(person.age);
