function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex = 0;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let coins = 0;
const question = document.getElementById("question");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
b1.style.display = "none";
b2.style.display = "none";
b3.style.display = "none";
b4.style.display = "none";
question.style.display = "none";
//hi i added some questions you can check it
//you just need to delete the thing at the top and the last 2 buttons 
const questions = shuffle(["What is salmonella usually found in?", "Can energy be destroyed?", "When you use an air conditioner, does it make the outside warmer?"]);
const answer_choices = {
  "What is salmonella usually found in?": ["Chicken", "Grass", "Cooked Eggs", "Meat"],
  "Can energy be destroyed?": ["Yes", "No"],
  "When you use an air conditioner, does it make the outside warmer?": ["Yes", "No"]
};
const correct_answer = { "What is salmonella usually found in?": "Chicken", "Can energy be destroyed?": "No", : "C" };
let click = false;
let answer = "";
let i = 0;
function load(i){
  if (i < 4){
    question.innerText = questions[i];
    answer_choices[questions[i]] = shuffle(answer_choices[questions[i]]);
    b1.style.display = "inline";
    b2.style.display = "inline";
    b3.style.display = "inline";
    b4.style.display = "inline";

    if (answer_choices[questions[i]].length < 1){
      b1.sytle.display = "none";
    } else{
      b1.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 2){
      b2.sytle.display = "none";
    } else{
      b2.innerText = answer_choices[questions[i]][1];
    }
    if (answer_choices[questions[i]].length < 3){
      b3.sytle.display = "none";
    } else{
      b3.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 4){
      b4.sytle.display = "none";
    } else{
      b4.innerText = answer_choices[questions[i]][3];
    }
    b1.innerText = answer_choices[questions[i]][0];
    b2.innerText = answer_choices[questions[i]][1];
    b3.innerText = answer_choices[questions[i]][2];
    b4.innerText = answer_choices[questions[i]][3];

  }
}
function hide(){
  load(0);
  question.style.display = "inline";
}
function b1click() {
  click = true;
  answer = b1.innerText;
  load(i++);
}
function b2click() {
  click = true;
  answer = b2.innerText;
  load(i++);

  
}
function b3click() {
  click = true;
  answer = b3.innerText;
  load(i++);

}
function b4click() {
  click = true;
  answer = b4.innerText;
  load(i++);
}