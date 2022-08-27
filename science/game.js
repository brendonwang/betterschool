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
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const question = document.getElementById("question");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

const questions = ["A", "B", "C"];
const answer_choices = {
  A: ["A", "B", "C", "D"],
  B: ["A", "B", "C", "D"],
  C: ["A", "B", "C", "D"],
};
const correct_answer = { A: "A", B: "B", C: "C" };
let click = false;
let answer = "";
shuffle(questions);
for (let i = 0; i < questions.length; ++i) {
  question.innerText = questions[i];
  shuffle(answer_choices[i]);
  for (let j = 0; j < 4; ++j){
    document.getElementById("b"+j).innerText = answer_choices[i][j];
  }
  while(!click){}
}
function b1click(){
  click = true;
  answer = b1.innerText;
}
function b2click(){
  click = true;
  answer = b2.innerText;
}
function b3click(){
  click = true;
  answer = b3.innerText;
}
function b4click(){
  click = true;
  answer = b4.innerText;
}