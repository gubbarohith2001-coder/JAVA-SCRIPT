
(function ()
{
    const user = 'brad';
    console.log(user);
    const hello = () => console.log('hello from the IIFE');
    hello();
})();

(function (name) {
    console.log('hello ' + name);
})('rohith');

(function hello(){
    console.log('hello');
})();