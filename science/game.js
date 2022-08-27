function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}
const question = document.getElementById("question");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const ready = document.getElementById("ready");
const coins = document.getElementById("coins");

let cssStyle = (el, styles) => {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
};
//type something.
//IF THERE IS A YES OPTION THERE SHOULD BE A NO OPTION
cssStyle(b1, { display: "none" });
cssStyle(b2, { display: "none" });
cssStyle(b3, { display: "none" });
cssStyle(b4, { display: "none" });

question.style.display = "none";

const questions = shuffle([
  "What is salmonella usually found in?",
  "Can energy be destroyed?",
  "When you use an air conditioner, does it make the outside warmer?",
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
};
const correct_answer = {
  "What is salmonella usually found in?": "Chicken",
  "Can energy be destroyed?": "No",
  "When you use an air conditioner, does it make the outside warmer?": "Yes",
};
let click = false;
let answer = "";
let i = 0;
let original_coins = coins.innerText;
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
  }
}
function b1click() {
  click = true;
  answer = b1.innerText;
  if (correct_answer[questions[i]] == answer) {
    coins.innerText = parseInt(coins.innerText) + 1;
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
  }
  load(++i);
  console.log(i);
  end();
}
//can i make a shop @invisibleflame
//Yes