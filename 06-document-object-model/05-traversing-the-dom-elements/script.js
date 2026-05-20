let output;

// get childern elements

const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[0].innertext;
output = parent.children[1].className;
output = parent.children[2].nodeName;

parent.children[1].innerText = "child two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "child one";
parent.lastElementChild.innerText = "child three";

// get parent elements

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// sibling elements

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
// console.dir(output);
