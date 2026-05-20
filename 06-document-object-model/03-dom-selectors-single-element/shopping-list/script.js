// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").getAttribute("id"));

// set Attribute

document.getElementById("app-title").title = "shopping list";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

// get/change content

console.log(title.textContent);

title.textContent = "hello world";
title.innerText = "hello again";
title.innerHTML = "<strong>shopping list</strong>";

// change styles

title.style.color = "red";
title.style.backgroundColor = "blue";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector();

console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector("li"));
console.log(document.querySelector("li:nth-child(2)"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");

secondItem.innerText = "apple juice";
secondItem.style.color = "red";

console.log(secondItem);

// use this methods on other elements

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = 'blue';
