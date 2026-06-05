const itemInput = document.getElementById("item-input");

const onKeyPress = (c) => {
  console.log("keypress");
};

const onKeyUP = (c) => {
  console.log("keyup");
};

const onKeyDown = (c) => {
  //  key
  // console.log(c.key);
  // document.querySelector("h1").innerText = c.key;
  // if (c.key === "Enter") {
  //   alert("you Pressed enter");
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes

  // if (c.keyCode === 13) {
  //   alert("you pressed enter");
  // }

  // code
  if (c.code === "Digit1") {
    console.log("you pressed 1");
  }

  if (c.repeat) {
    console.log("you are holding " + c.key);
  }

  if (c.shiftKey && c.key === "k") {
    console.log("you hit shift + K");
  }
  // console.log("shift: " + c.shiftKey);
  // console.log("Ctrl: " + c.ctrlKey);
  // console.log("alt: " + c.altKey);
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUP);
itemInput.addEventListener("keydown", onKeyDown);
