const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // // classname
  // console.log(itemList.className);
  // text.className = 'card dark';

  // classList
  // console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add("dark");
  // text.classList.remove("card");

  // text.classList.toggle("dark");
  // text.classList.toggle("hidden");
  // text.classList.replace("hidden", "dark");

  // change Style
  // itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "red";

    if (index === 1) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
