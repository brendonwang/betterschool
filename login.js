import readFile from "fs";
const form = document.querySelector("form");
let eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

function syncReadFile(filename) {
  const contents = fetch('https://betterschool.glitch.me/login.txt');

  const arr = contents.split("\n");
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].split(" ");
  }

  return arr;
}

form.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  if (eInput.value == "") {
    eField.classList.add("shake", "error");
  }
  if (pInput.value == "") {
    pField.classList.add("shake", "error");
  }

  setTimeout(() => {
    //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    let arr = syncReadFile("login.txt");
  }
};
