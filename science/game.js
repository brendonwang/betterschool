function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
const question = document.getElementById("question");
const questions = ["A", "B", "C"];
const answer_choices = {
  A: ["A", "B", "C", "D"],
  B: ["A", "B", "C", "D"],
  C: ["A", "B", "C", "D"],
};
const correct_answer = { A: "A", B: "B", C: "C" };
shuffleArray(questions);
for (let i = 0; i < questions.length; ++i) {
  question.innerText = questions[i];
  setTimeout(1000);
}
