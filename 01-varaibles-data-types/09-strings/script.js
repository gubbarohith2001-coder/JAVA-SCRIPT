let x;

const name = 'jhon';
const age = 30;


// x = 'hello my name is ' + name + ' and I am ' + age + ' years old';


//template literals
x = `Hello my name is ${name} and I am ${age} years old`;

//string properties and methods
const s = new String('hello world');

x = typeof s;

x = s.length;

// acesss value by key

x=s[1];  

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(1);

x = s.indexOf("h");

x = s.substring(0, 5);

x = s.substring(7);

x = s.slice(0, 5);

x = s.slice(-11, -6);

x = "            hello world";

x = x.trim();

x = s.replace('world', 'jhon');

x= s.includes('hell');

x = s.valueOf();

x = s.split("");

console.log(x);