const numbers = [1,2,3,4,5,6,7,8,9,10];

const doublenumbers = numbers.map((number) => number * 2);

console.log(doublenumbers);

// same for for each

const doublenumbers2 = [];

numbers.forEach((number) => {
    doublenumbers2.push(number * 2);
});

console.log(doublenumbers2);

const companies = [
{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
{ name: 'Company Five', category: 'Technology', start: 2009, end:
2014 },
{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
{ name: 'Company Eight', category: 'Technology', start: 2011, end:
2016 },
{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// cerate array of company names

const companynames = companies.map((company) => company.name);

console.log(companynames);

// craete an array with just company and category

const companyinfo = companies.map((company) =>{
    return {
        name : company.name,
        category : company.category,
    };
} );

console.log(companyinfo);


// create an array of the length of each company in years

const companyYears = companies.map((company) => {
    return{
        name : company.name,
        length : company.end - company.start + 'years',
    };
});

console.log(companyYears);

// chain map methods

const SquareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);


const SquareAndDouble2 = numbers
    .map(function (number) {
    return Math.sqrt(number);
    })
    .map(function (sqrt){
        return sqrt * 2;
    })
    .map(function (sqrtdoubled){
        return sqrtdoubled * 2;
    });

console.log(SquareAndDouble);
console.log(SquareAndDouble2);


// chaining diff methods

const evendoubled = numbers
.filter((number) => number % 2 === 0 )
.map((number) => number * 2);

console.log(evendoubled);