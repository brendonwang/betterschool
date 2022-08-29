
async function fetchFile(file) {
  const response = await fetch(file);
  const exam = await response.text();
  return exam;
}
if (localStorage.value == undefined){
  localStorage.value = 0;
} 
document.getElementById('coins').innerText = localStorage.value;

if(localStorage.achievements == undefined || localStorage.achievements == ''){
  localStorage.achievements = JSON.stringify([]);
}
let achievement = JSON.parse(localStorage.achievements)
check()
function check(){
  if (localStorage.value == undefined){
    localStorage.value = 0;
  }
  if (localStorage.bought == undefined || localStorage.bought == ""){
      localStorage.bought = JSON.stringify(["https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/poke-removebg-preview.png?v=1661644487585"]);
    }
  if (localStorage.value >= 1){
    achievement.push("And So It Begins")
  }
  if (localStorage.value >= 100){
    achievement.push("Noob")
  }
  if (localStorage.value >= 500){
    achievement.push("Princess of the Lower Levels")
  }
  if (localStorage.value >= 1000){
    achievement.push("Queen of the Lower Levels")
  }
  if (localStorage.value >= 2500){
    achievement.push("Duke of the MidLeague")
  }
  if (localStorage.value >= 5000){
    achievement.push("Tyrant of the MidLeague")
  }
  if (localStorage.value >= 10000){
    achievement.push("Exploding Rich")
  }
  if (localStorage.value >= 100000){
    achievement.push("G.O.A.T.")
  }
  if (localStorage.value >= 500000){
    achievement.push("Top God")
  }
  if (localStorage.value >= 1000000){
    achievement.push("Hacker")
  }
  if (localStorage.value >= 10000000){
    achievement.push("Scammer")
  }
  if (localStorage.value >= 100000000){
    achievement.push("Code Invader")
  }
  if (localStorage.value >= 1000000000){
    achievement.push("Developer")
  }
  if (localStorage.bought.includes("https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/martinis-removebg-preview.png?v=1661694567838")){
    achievement.push("Unorthodox Methods");
  }
  if (localStorage.bought.includes("https://cdn.glitch.global/3501ec51-0efe-4944-b3f1-a842653a5553/arceus-removebg-preview.png?v=1661639967015")){
    achievement.push("The Original One");
  }
  if (localStorage.bought.length == 10){
    achievement.push("Pokemon Master");
  }
  
  localStorage.achievements = JSON.stringify(achievement)
}