const socials = ['twiter','linkedIn','facebook','instagram'];

console.log(socials.__proto__);

// socials.forEach(function (item ){
//     console.log(item);
// });


// socials.forEach((item,index,arr) => console.log(` ${index} -  ${item}`));

function logsocials(social) {
    console.log(social);
}

// socials.forEach(logsocials);

const socialonjects = [
    {name : 'twitter', url : ' https://twitter.com'},
    {name : 'linkedIn', url : ' https://linkedIn.com'},
    {name : 'facebook', url : ' https://facebook.com'},
    {name : 'instagram', url : ' https://instagram.com'},
];

socialonjects.forEach((item) => console.log(item));
socialonjects.forEach((item) => console.log(item.name));
socialonjects.forEach((item) => console.log(item.url));
