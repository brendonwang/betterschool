let achievements = ["And So It Begins", "Noob", "Princess of the Lower Levels", "Queen of the Lower Levels", "Duke of the MidLeague", "Tyrant of the MidLeague", "Exploding Rich", "G.O.A.T.", "Top God", "Hacker", "Scammer", "Code Invader", "Developer", "Unorthodox Methods", "The Original One", "Pokemon Master", "Failure", "Archimedes", "Atomic Precision", "Perfection at Its Finest"] // possible

if (localStorage.achievements == undefined || localStorage.achievements == ''){
  localStorage.achievements = JSON.stringify([]);
}
let a = JSON.parse(localStorage.achievements);
for(let i = 0; i < achievements.length; ++i){
  if (a.includes(achievements[i])){
    document.getElementById("a"+i.toString()).style.color = "black";
  } else{
    document.getElementById("a"+i.toString()).style.color = "grey";
  }
}