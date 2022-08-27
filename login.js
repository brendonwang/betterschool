import readFile from "fs";
const form = document.querySelector("form");
let eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://betterschool.glitch.me/login.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
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
    let arr = getText("login.txt").split('\n').split(' ');
  }
};
