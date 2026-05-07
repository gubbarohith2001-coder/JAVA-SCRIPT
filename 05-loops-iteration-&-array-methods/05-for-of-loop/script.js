// loops through arrays

const items = ['book','table','chair','kite'];
const users = [
    {name:'brad'},
    {name:'keven'},
    {name:'jhon'},
];

// for (const item of items ){
//     console.log(item);
// }

for (const user of users){
    console.log(user.name);
}

// loops over strings

const str = 'hello world';

for (const letter of str){
    console.log(letter);
}

// loops over maps

const map = new Map();
map.set('name','jhon');
map.set('age',30);

for (const[key,value] of map){
    console.log(key,value);
}
