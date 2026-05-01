const age = 19;

//  using if statement
if (age >= 18){
    console.log('you can vote');
} else{
    console.log('you cannot vote');
}

// using ternary operator

age >= 18 ? console.log('you can vote'): console.log('you can not vote');

// assigning a conditional value to a varaiable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'you can vote' : 'you can not vote';

console.log(canVote);
console.log(canVote2);

// multiple statements

const auth = true;
// const auth = false;
// let redirect;

// if (auth) {
//     alert('welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login'
// }


// const redirect = auth ? (alert('welcome to dashboard'), '/dashboard') : (alert('acess denied'), '/login');

// console.log(redirect);

// auth ? console.log('welcome to the dashboard'):null;

auth && console.log('welcome to the dashboard');
