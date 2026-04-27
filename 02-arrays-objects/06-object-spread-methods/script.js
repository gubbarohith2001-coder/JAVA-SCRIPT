let x;

// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

x = todo;

const person = {
    address :{
        coords:{
            lat:42.3455,
            long:-71.1234
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b:  2};
const obj2 = {c: 3, d:  4};


// const obj3 = {obj1 , obj2};
// const obj3 = {...obj1 , obj2};
const obj3 = {...obj1 , ...obj2};

x = obj3;

const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todos = [
    {id : 1, name : 'buy food'},
    {id : 2, name : 'pick kids'},
    {id : 3, name : 'take out trash'},
    ];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todos);

x = todo.hasOwnProperty('name');

x = todo.hasOwnProperty('age');


console.log(x);