const d = new Date(2026,1,5,8,0,0);
const month = d.getMonth();
const hour = d.getHours

switch (month) {
    case 1:
        console.log('it is january');
        break;
    case 2:
        console.log('it is february');
        break;
    case 2:
        console.log('it is march');
        break;    
    default:
        console.log('it is not jan , frb or march');
}

switch (true) {
    case hour < 12:
        console.log('good morning');
        break;
    case hour < 18:
        console.log('good afternoon');
        break;
    default:
        console.log('good night');
}