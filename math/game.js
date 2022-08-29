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
  "Solve the equation 9-4x+4=-5x+3-x",
  "Solve the equation 2t/3+7=3(t-9)",
  "Find x and y if x-y=3 and 1/x+1/y=1/2",
  "Find all ordered pairs (x, y) such that -x+2y=8 and x-y=-5",
  "Find all ordered pairs (x, y) such that x^2+xy=126 and x^2-xy=36",
  "Solve log3(243)",
  "Solve log2(65536)",
  "What does injective mean?",
  "What does the Identity Function ouput?",
  "What is an example of the Linear Function?",
  "What is the typical form of the Quadratic Function?",
  "Calculate the volume of a sphere with radius 2",
  "Simplify sqrt(5+2sqrt(6))",
]);
const answer_choices = {
  "Solve the equation 9-4x+4=-5x+3-x": [
    "x=-1",
    "x=1",
    "y=-1",
    "x=-4",
  ],
  "Solve the equation 2t/3+7=3(t-9)": [
    "t=102/7", 
    "t=14",
    "t=13",
    "t=100/7",
  ],
  "Find x and y if x-y=3 and 1/x+1/y=1/2": [
    "x=1, y=-2",
    "x=2, y=1",
    "x=4, y=2",
    "x=1, y=3",
  ],
  "Find all ordered pairs (x, y) such that -x+2y=8 and x-y=-5": [
    "(-2, 3)", 
    "(2, 3)",
    "(2, -3)",
    "(-2, -3)",
  ],
  "Find all ordered pairs (x, y) such that x^2+xy=126 and x^2-xy=36": [
    "(-9, -5)",
    "(-8. -7)",
    "(-10, -4)",
    "(-1, -4)",
  ],
  "Solve log3(243)": [
    "5",
    "4",
    "6",
    "4.5",
  ],
  "Solve log2(65536)": [
    "16",
    "15",
    "14",
    "17",
  ],
  "What does injective mean?": [
    "one-to-one",
    "similar",
    "indignant",
    "power",
  ],
  "What does the Identity Function ouput?": [
    "The input",
    "Zero",
    "The opposite of the input",
    "The input squared",
  ],
  "What is an example of the Linear Function?": [
    "3x+y=7",
    "2x^2+y=5",
    "2x^2+y^2=6",
    "3x-y^2=1",
  ],
  "What is the typical form of the Quadratic Function?": [
    "ax^2+bx+c",
    "ax+b",
    "(ax+b)^2",
    "ax^3+bx^2+cx+d",
  ],
  "Calculate the volume of a sphere with radius 2": [
    "32/3pi",
    "10pi",
    "69/5pi",
    "12pi",
  ],
  "Simplify sqrt(5+2sqrt(6))": [
    "sqrt2+sqrt3", 
    "sqrt3+2",
    "1+sqrt2",
    "sqrt5+sqrt2",
  ],
};
const correct_answer = {
  "Solve the equation 9-4x+4=-5x+3-x": "x=-1",
  "Solve the equation 2t/3+7=3(t-9)": "t=102/7",
  "Find x and y if x-y=3 and 1/x+1/y=1/2": "x=1, y=-2",
  "Find all ordered pairs (x, y) such that -x+2y=8 and x-y=-5": "(-2, 3)",
  "Find all ordered pairs (x, y) such that x^2+xy=126 and x^2-xy=36": "(-9, -5)",
  "Solve log3(243)": "5",
  "Solve log2(65536)": "16",
  "What does injective mean?": "one-to-one",
  "What does the Identity Function ouput?": "The input",
  "What is an example of the Linear Function?": "3x+y=7",
  "What is the typical form of the Quadratic Function?": "ax^2+bx+c",
  "Calculate the volume of a sphere with radius 2": "32/3pi",
  "Simplify sqrt(5+2sqrt(6))": "sqrt2+sqrt3",
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
    if (j <= 7) localStorage.value -= 10; document.getElementById('coins').innerText = localStorage.value;
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
