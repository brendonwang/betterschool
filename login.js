const form = document.querySelector("form");
let uField = form.querySelector(".email"),
uInput = uField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
const {readFileSync, promises: fsPromises} = require('fs');

function ReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split('\n');
  for(let i = 0; i < arr.length; ++i){
    arr[i] = arr[i].split(' ')
  }
  

  return arr;
}

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  if (uInput.value == ""){uField.classList.add("shake", "error");}
  if (pInput.value == ""){pField.classList.add("shake", "error");}
  

  setTimeout(()=>{ //remove shake class after 500ms
    uField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);


  if(!uField.classList.contains("error") && !pField.classList.contains("error")){
    const fs = require('fs');
    let files = ReadFile('login.txt');
    let login = false;
    for (let i = 0; i < files.length; i++){
      if (files[i][0] == uInput && files[i][1] == pInput){
        console.log("SUCCESS");
      }
    }

  }
}