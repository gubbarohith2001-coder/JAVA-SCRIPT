const library = [{
    title : "book1",
    author : 'rohith',
    status :{
        own : true,
        reading : false,
        read : false,
    },
},{

    title : "book2",
    author : 'chintu',
    status :{
        own : true,
        reading : false,
        read : false,
    },
},

{
    title : "book3",
    author : 'gubba',
    status :{
        own : true,
        reading : false,
        read : false,
    },
}
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3

const {title: firstbook} = library[0];

console.log(firstbook);

// step 4

const libraryJson = JSON.stringify(library);

console.log(libraryJson);