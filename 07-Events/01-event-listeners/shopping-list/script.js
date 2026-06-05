// javascript Event Listeners

const clearBtn = document.querySelector("#clear");

function onClear() {
  // alert("Clear Items");
  const itemList = document.querySelector("ul");
  const items = document.querySelector("li");

  // itemList.innerHTML = "";

  // items.array.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// clearBtn.onclick = function () {
// console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener("click", function () {
//   alert("clear Items");
// });
// clearBtn.addEventListener("click", () => alert("clear Items"));
clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
