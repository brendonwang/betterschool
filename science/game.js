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

const questions = shuffle(["A", "B", "C"]);
const answer_choices = {
  A: ["A", "B", "C", "D"],
  B: ["A", "B"],
  C: ["A", "B", "C", "D"],
};
const correct_answer = { A: "A", B: "B", C: "C" };
let click = false;
let answer = "";
let i = 0;
function load(i){
  if (i < 4){
    question.innerText = questions[i];
    answer_choices[questions[i]] = shuffle(answer_choices[questions[i]]);
    if (answer_choices[questions[i]].length < 1){
      b1.sytle.display = "none";
    } else{
      b1.sytle.display = "block";
      b1.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 2){
      b2.sytle.display = "none";
    } else{
      b2.sytle.display = "block";
      b2.innerText = answer_choices[questions[i]][1];
    }
    if (answer_choices[questions[i]].length < 3){
      b3.sytle.display = "none";
    } else{
      b3.sytle.display = "block";
      b3.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 4){
      b3.sytle.display = "none";
    } else{
      b3.sytle.display = "block";
      b3.innerText = answer_choices[questions[i]][3];
    }
    b1.innerText = answer_choices[questions[i]][0];
    b2.innerText = answer_choices[questions[i]][1];
    b3.innerText = answer_choices[questions[i]][2];
    b4.innerText = answer_choices[questions[i]][3];

  }
}
load(0);

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
