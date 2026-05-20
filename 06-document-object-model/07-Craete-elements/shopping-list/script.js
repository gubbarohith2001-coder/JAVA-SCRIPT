const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");

// div.innerText = "hello world";

const text = document.createTextNode("hello world");
div.appendChild(text);

console.log(div);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);
