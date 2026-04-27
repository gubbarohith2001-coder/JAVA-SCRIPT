// array literal
const numbers = [122,45,123,45,67];

// array constructor

const fruits = new Array('apple', 'grape', 'orange');

// x = numbers[0];
// x = numbers[0] + numbers[3];
// x = `my favorite furit is an ${fruits[2]}`;
// x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);