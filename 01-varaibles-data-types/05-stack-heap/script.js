//values stored in stack

const name ='jhon';
const age = 20;

// reference values stored on the heap

const person = {
    name : 'brad',
    age : 40,
};

let newName = name;
newName = 'jhonathan';

let newPerson = person;
newPerson.name = 'bradey'

console.log(name, newName);
console.log(person, newPerson);


