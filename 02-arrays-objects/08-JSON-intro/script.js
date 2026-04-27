const post = {
    title : 'post One',
    body : "this is the body",
};

// convert to JSON String
const str = JSON.stringify(post);

// parse JSON

const obj = JSON.parse(str);

const posts = [{
    id : 1,
    title : 'post One',
    body : "this is the body",
},
{
    id : 2,
    title : 'post two',
    body : "this is the body",
}
];

const str2 = JSON.stringify(posts);

console.log(str2);