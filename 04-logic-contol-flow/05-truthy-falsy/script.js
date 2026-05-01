// Falsy Values:
// - false
//-0
// -"" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// '0' (0 in a string)
// -' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// const x = false;
// const x = 0;
// const x = "";
// const x = NaN;
// const x = null;
// const x = undefined;




// const x = true;
// const x = '0';
// const x = ' ';
// const x = 'false';
// const x = [];
const x = {};
// const x = fnction () {};


if (x) {
    console.log('this is truthy');
} else {
    console.log('this is falsy');
}

console.log(Boolean(x));

// truthy and falsy caveats
const childern = 0;

// if (childern !== undefined) {
if (!isNaN(childern)) {
    console.log(`you have ${childern} childern`);
} else {
    console.log(`please enter number of childern`);
}

// checking for empty values
// const posts = ['post one','post two'];
const posts = [];

if(posts.length > 0){
    console.log('list posts');
}else {
    console.log('no posts to list');
}

// checking for empty objects
// const user ={
//     name:'rohith',
// };
const user ={
   
};

if (Object.keys(user).length > 0) {
    console.log('list user');
} else {
    console.log('no user');
}

// loose equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);