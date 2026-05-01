const d = new Date(10, 30,2022,20,0,0);
const hour = d.getHours();

if (hour < 12) {
    console.log('good morning');
} else if(hour < 18) {
    console.log('good afternoon');
}else {
    console.log('good night');
}

// nested if

if (hour < 12) {
    console.log('good morning');

    if (hour === 6) {
        console.log('wake up');
    }
} else if(hour < 18) {
    console.log('good afternoon');
}else {
    console.log('good night');


    if (hour >= 20) {
        console.log('zzzzzzz');
    }
}

console.log(hour);

if (hour >= 7  && hour <= 15) {
    console.log('it is work time');
}

if (hour === 6 || hour === 20) {
    console.log('brush your teeth');
}