// challenge 1
// function getCelsius(f){
//     const celsius = ((f - 32) * 5) / 9;
//     return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`the temp is ${(getCelsius(32))} \xB0C`);
console.log(getCelsius(10));
// challenge 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{
        min,
        max
    }
}

console.log(minMax([1,2,3,4,5,6]));

// challenge 3
((length,width) => {
    const area = length * width;

    const output = `the area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

    console.log(output);
})(10,5);