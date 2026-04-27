let x;

const person = {
    name : 'rohtih',
    age : 24,
    isAdmin : true,
    address:{
        street : '123 s v model school',
        city : 'hyderabad',
        state : 'TG',
    },
    hobbies : ['music', 'sports']
};
x= person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'gubba rohith';
person['isAdmin'] = false;

delete person.age;

person.hasChildern = true;

person.greet = function () {
    console.log(`hello, my name is ${this.name}`);
}

person.greet();

x = person;

const person2 = {
    "first name" : 'gubba',
    "last name" : 'rohith'
}

// x = person2.first name;
x = person2["first name"];


console.log(x);