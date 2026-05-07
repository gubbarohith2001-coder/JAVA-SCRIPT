for (let i = 0; i <= 100; i++){
    if( i % 5 === 0 && i % 3 ===0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 ===0){
        console.log('buzz');
    }else{
        console.log('number ' + i );
    }
}

// while loop

let j = 1;

while (j <= 100) {
    if( j % 5 === 0 && j % 3 ===0) {
        console.log("fizzbuzz");
    } else if (j % 3 === 0) {
        console.log('fizz');
    } else if (j % 5 ===0){
        console.log('buzz');
    }else{
        console.log('number ' + j );
    }
    j++;
}