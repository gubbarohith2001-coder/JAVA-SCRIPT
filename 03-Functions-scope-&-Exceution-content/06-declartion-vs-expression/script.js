console.log(addDollarSign(100));

// function Declartion

function addDollarSign(value){
    return '$' + value;
}


// function Expression
const addPlusSign = function (value){
    return '+' + value;
};

console.log(addPlusSign(200))
