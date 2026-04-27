const firstName = 'jhon';
const lastName = 'doe';
const age = 24;

const person = {
    firstName,
    lastName,
    age,
};



console.log(person.age);

// Destructing 

const todo = {
    id : 1,
    title : 'take out trash',
    user:{
        name:'rohtih',
    },
}

const {id: todoId,
    title,
    user: {name},
} = todo;

console.log(todoId);

//Destruct arrays
const numbers = [23, 67, 33, 49, 52];

const [first,second, ...rest] = numbers;

console.log(first,second, rest);