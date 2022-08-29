function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
async function fetchFile(file) {
  const response = await fetch(file);
  const exam = await response.text();
  return exam;
}
const question = document.getElementById("question");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const ready = document.getElementById("ready");
const done = document.getElementById("done");
const score = document.getElementById("score");

const coins = document.getElementById("coins");

let cssStyle = (el, styles) => {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
};
cssStyle(b1, { display: "none" });
cssStyle(b2, { display: "none" });
cssStyle(b3, { display: "none" });
cssStyle(b4, { display: "none" });

question.style.display = "none";

const questions = shuffle([
  "What is salmonella usually found in?",
  "Can energy be destroyed?",
  "When you use an air conditioner, does it make the outside warmer?",
  "Can people with hemophilia easily heal wounds?",
  "How many different protein molecules are in the clotting factors?",
  "Does starch get broken down into glucose?",
  "Does the pancreas make growth enzymes?",
  "Does asthma only affect the breathing?",
  "Do amino acids and protein relate?",
  "Does the cold slow molecules down?",
  "Does heat slow down molecules in the air?",
  "Is it possible for molecules to go below absolute zero?",
  "Is food poisoning poison or bacteria?",
  "Are beans a good source of proteins?",
  "Is bread a good source of fiber?",
]);
const answer_choices = {
  "What is salmonella usually found in?": [
    "Chicken",
    "Grass",
    "Cooked Eggs",
    "Meat",
  ],
  "Can energy be destroyed?": ["Yes", "No"],
  "When you use an air conditioner, does it make the outside warmer?": [
    "Yes",
    "No",
  ],
  "Can people with hemophilia easily heal wounds?": ["Yes", "No"],
  "How many different protein molecules are in the clotting factors?": [
    "12",
    "13",
    "14",
    "15",
  ],
  "Does starch get broken down into glucose?": ["Yes", "No"],
  "Does the pancreas make growth enzymes?": ["Yes", "No"],
  "Does asthma only affect the breathing?": ["Yes", "No"],
  "Do amino acids and protein relate?": ["Yes", "No"],
  "Does the cold slow molecules down?": ["Yes", "No"],
  "Does heat slow down molecules in the air?": ["Yes", "No"],
  "Is it possible for molecules to go below absolute zero?": ["Yes", "No"],
  "Is food poisoning poison or bacteria?": ["Poison", "Bacteria"],
  "Are beans a good source of proteins?": ["Yes", "No"],
  "Is bread a good source of fiber?": ["Yes", "No"],
};
const correct_answer = {
  "What is salmonella usually found in?": "Chicken",
  "Can energy be destroyed?": "No",
  "When you use an air conditioner, does it make the outside warmer?": "Yes",
  "Can people with hemophilia easily heal wounds?": "No",
  "How many different protein molecules are in the clotting factors?": "13",
  "Does starch get broken down into glucose?": "Yes",
  "Does the pancreas make growth enzymes?": "No",
  "Does asthma only affect the breathing?": "No",
  "Do amino acids and protein relate?": "Yes",
  "Does the cold slow molecules down?": "Yes",
  "Does heat slow down molecules in the air?": "No",
  "Is it possible for molecules to go below absolute zero?": "No",
  "Is food poisoning poison or bacteria?": "Bacteria",
  "Are beans a good source of proteins?": "Yes",
  "Is bread a good source of fiber?": "No",
};
cssStyle(done, { display: "none" });
let click = false;
let answer = "";
let i = 0;
let j = 0;



function load(i) {
  if (i < questions.length) {
    cssStyle(question, { display: "block" });

    question.innerText = questions[i];
    answer_choices[questions[i]] = shuffle(answer_choices[questions[i]]);
    cssStyle(b1, { display: "inline" });
    cssStyle(b2, { display: "inline" });
    cssStyle(b3, { display: "inline" });
    cssStyle(b4, { display: "inline" });

    if (answer_choices[questions[i]].length < 1) {
      cssStyle(b1, { display: "none" });
    } else {
      b1.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 2) {
      cssStyle(b2, { display: "none" });
    } else {
      b2.innerText = answer_choices[questions[i]][1];
    }
    if (answer_choices[questions[i]].length < 3) {
      cssStyle(b3, { display: "none" });
    } else {
      b3.innerText = answer_choices[questions[i]][0];
    }
    if (answer_choices[questions[i]].length < 4) {
      cssStyle(b4, { display: "none" });
    } else {
      b4.innerText = answer_choices[questions[i]][3];
    }
    b1.innerText = answer_choices[questions[i]][0];
    b2.innerText = answer_choices[questions[i]][1];
    b3.innerText = answer_choices[questions[i]][2];
    b4.innerText = answer_choices[questions[i]][3];
  }
}
function hide() {
  cssStyle(ready, { display: "none" });
  load(0);
}
function end() {
  if (i > questions.length - 1) {
    cssStyle(question, { display: "none" });

    cssStyle(b1, { display: "none" });
    cssStyle(b2, { display: "none" });
    cssStyle(b3, { display: "none" });
    cssStyle(b4, { display: "none" });
    cssStyle(done, { display: "inline" });
    score.innerText = j.toString();
    if (j.toString() < 9)
    if (localStorage.value == undefined){
      localStorage.value = 0;
    }
    localStorage.value = parseInt(coins.innerText);
    if (j.toString() < 9) localStorage.value -= 10; document.getElementById('coins').innerText = localStorage.value;
  }
}
function b1click() {
  click = true;
  answer = b1.innerText;
  if (correct_answer[questions[i]] == answer) {
    coins.innerText = parseInt(coins.innerText) + 1;
    j++;
  }
  load(++i);
  console.log(i);
  end();
}
function b2click() {
  click = true;
  answer = b2.innerText;
  if (correct_answer[questions[i]] == answer) {
    coins.innerText = parseInt(coins.innerText) + 1;
    j++;
  }
  load(++i);
  console.log(i);
  end();
}
function b3click() {
  click = true;
  answer = b3.innerText;
  if (correct_answer[questions[i]] == answer) {
    coins.innerText = parseInt(coins.innerText) + 1;
    j++;
  }
  load(++i);
  console.log(i);
  end();
}
function b4click() {
  click = true;
  answer = b4.innerText;
  if (correct_answer[questions[i]] == answer) {
    coins.innerText = parseInt(coins.innerText) + 1;
    j++;
  }
  load(++i);
  console.log(i);
  end();
}
//can i make a shop @invisibleflame
//Yes
